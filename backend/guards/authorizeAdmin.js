
 const authorizeAdmin = (req, res, next) => {
    if (req.decoded && req.decoded.role === 'admin') {
        next();
    } else {
        return res.status(StatusCodes.FORBIDDEN).json({ success: false, message: 'You are not authorized to perform this action' });
    }
};

module.exports = authorizeAdmin;