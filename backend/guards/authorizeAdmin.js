const { StatusCodes } = require('http-status-codes');

const authorizeAdmin = (req, res, next) => {
    if (req.decodedToken && req.decodedToken.role === 'admin') {
        next();
    } else {
        return res.status(StatusCodes.FORBIDDEN).json({ success: false, message: 'You are not authorized to perform this action' });
    }
};
module.exports = authorizeAdmin;