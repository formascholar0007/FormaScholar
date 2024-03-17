const globalResponse = require('../middleware/globalResponse');
const UserModel = require('../model/User');
const { StatusCodes } = require('http-status-codes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {

    const { userName, email, password } = req.body;

    if (!userName && !email && !password) {
        return res.globalResponse(StatusCodes.PRECONDITION_FAILED, false, 'Missing fields', null);
    }

    try {
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.globalResponse(StatusCodes.CONFLICT, false, 'User Already Exists', null);
        }

        const hashPassword = await bcrypt.hash(password,10);

        const newUser = await UserModel.create({
            userName,
            email,
            password: hashPassword
        });

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '60d' });


        if(token){
            return res.globalResponse(StatusCodes.CREATED, true, 'User Created', token);
        }else {
            return res.globalResponse(StatusCodes.BAD_REQUEST, false, 'Something wrong Generating Token', null);
        }


    } catch (error) {

        console.error("Error creating user:", error);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Error creating user', null);
    }
};

module.exports = { register };

