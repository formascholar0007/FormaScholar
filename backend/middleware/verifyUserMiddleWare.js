
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const verifyUserMiddleWare = (req, res, next) => {

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.globalResponse(StatusCodes.BAD_REQUEST, false, 'Token Not Found in Headers', null);
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.decodedToken = decodedToken;
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.globalResponse(StatusCodes.UNAUTHORIZED, false, 'Token Expired', null);
        } else if (err.name === 'JsonWebTokenError' || err.name === 'SyntaxError') {
            return res.globalResponse(StatusCodes.UNAUTHORIZED, false, 'Invalid Token', null);
        } else {
            return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Internal Server Error', null);
        }
    }

}

module.exports = verifyUserMiddleWare;