const globalResponse = require('../middleware/globalResponse');
const UserModel = require('../model/User');
const { StatusCodes } = require('http-status-codes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserInfo = require('../model/UserAdditionalInfo');
const nodemailer = require('nodemailer');

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

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await UserModel.create({
            userName,
            email,
            password: hashPassword
        });
        console.log(newUser)

        const token = jwt.sign({ userId: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '30d' });

        if (token) {
            return res.globalResponse(StatusCodes.CREATED, true, 'User Created', token);
        } else {
            return res.globalResponse(StatusCodes.BAD_REQUEST, false, 'Something wrong Generating Token', null);
        }

    } catch (error) {
       return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Error creating user', null);
    }
};

const login = async (req, res) => {

    const { email, password } = req.body;
    if (!(email && password)) {
        return req.globalResponse(StatusCodes.PRECONDITION_FAILED, false, 'Missing Field', null);
    }

    try {
        const existingUser = await UserModel.findOne({ email });
        console.log("existingUser : ", existingUser)
        if (!existingUser) {
            return res.globalResponse(StatusCodes.NOT_FOUND, false, 'User Not Found', null);
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        console.log(isPasswordValid)
        if (!isPasswordValid) {
            return res.globalResponse(StatusCodes.UNAUTHORIZED, false, 'Invalid Password', null);
        }
        const token = jwt.sign({ userId: existingUser._id, role: existingUser.role }, process.env.JWT_SECRET, { expiresIn: '30d' });
        if (token) {
            return res.globalResponse(StatusCodes.OK, true, 'Login Successful', token);
        } else {
            return res.globalResponse(StatusCodes.BAD_REQUEST, false, 'Error Generating Token', null);
        }

    } catch {
        (err) => {
            console.error("Error during login:", err);
            return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Error during login', null);
        }
    }


}

const userAdditionalInfo = async (req, res) => {

    const { fullName, about , phoneNumber, gender, className } = req.body;
    
    if (!(fullName && gender && className )) {
        return res.globalResponse(StatusCodes.PRECONDITION_FAILED, false, 'Missing fields', null);
    }
    const userId = req.decodedToken.userId;
    try {
        let image;
       if(req.file && req.file.path){
           image = req.file.path;
       }
      const userInfo = await UserInfo.create({
        userId,
        fullName,
        about,
        image,
        phoneNumber,
        gender,
        className
      })

     if(!userInfo){
        return res.globalResponse(StatusCodes.BAD_REQUEST,false,'User Additional Not Saved',null);
     }
     return res.globalResponse(StatusCodes.CREATED,true,'UserAdditionalInfo Created',userInfo);
       
    } catch (err) {
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Error creating userAdditionalInfo', null);
    }
}

const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.globalResponse(StatusCodes.NOT_FOUND, false, 'Email Not Found', null);
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '30d' });
        const link = `http://localhost:5173/resetPassword/${user._id}/${token}`;

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.APP_GMAIL,
                pass: process.env.APP_PASSWORD,
            }
        });

        var mailOptions = {
            from: process.env.APP_GMAIL,
            to: email, 
            subject: 'Password Reset',
            text: `Reset your password by clicking the following link: ${link}` 
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Error sending email', null);
            } else {
                console.log('Email sent: ' + info.response);
                return res.globalResponse(StatusCodes.OK, true, 'Email sent successfully', null);
            }
        });
    } catch (error) {
        console.error(error);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Error processing request', null);
    }
};


const resetPassword = async (req, res) => {
    const { userId, token } = req.params;
    console.log(req.params);
    const { password } = req.body;
    console.log(password)

    if(password.length < 6){
        return res.globalResponse(StatusCodes.PRECONDITION_REQUIRED, false, 'Password must be 6 letters', null);
    }

    try {
        const verifyValidUser = await UserModel.findOne({ _id: userId });
        console.log(verifyValidUser)
        if (!verifyValidUser) {
            return res.globalResponse(StatusCodes.NOT_FOUND, false, 'User Not Exists', null);
        }

        try {
            const verify = jwt.verify(token, process.env.JWT_SECRET);
            const encryptPassword = await bcrypt.hash(password, 10);
               
            const updateResult = await UserModel.updateOne(
                { _id: userId },
                { $set: { password: encryptPassword } }
            );
              console.log("this is updated one",updateResult)
            if (updateResult.acknowledged === false) {
                return res.globalResponse(StatusCodes.FORBIDDEN, false, 'Password not updated', null);
            }

            return res.globalResponse(StatusCodes.OK, true, 'Password Updated', null);

        } catch (err) {
            if (err.name === 'TokenExpiredError') {
                return res.globalResponse(StatusCodes.BAD_REQUEST, false, 'Token expired', null);
            } else {
                return res.globalResponse(StatusCodes.BAD_REQUEST, false, 'Invalid token', null);
            }
        }
    } catch (error) {
        console.error(error);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Error processing request', null);
    }
};


module.exports = { register, login, userAdditionalInfo , forgotPassword , resetPassword };

