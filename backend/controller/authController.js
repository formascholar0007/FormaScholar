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
        console.log(newUser)

        const token = jwt.sign({ userId: newUser._id , role:newUser.role}, process.env.JWT_SECRET, { expiresIn: '30d' });

        if(token){
            return res.globalResponse(StatusCodes.CREATED, true, 'User Created', token);
        }else {
            return res.globalResponse(StatusCodes.BAD_REQUEST, false, 'Something wrong Generating Token', null);
        }

    } catch (error) {
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Error creating user', null);
    }
};

const login = async (req,res)=>{

    const {email,password} = req.body;
    if(!(email && password)){
       return req.globalResponse(StatusCodes.PRECONDITION_FAILED , false , 'Missing Field', null);
    }

    try{
        const existingUser = await UserModel.findOne({email});
        console.log("existingUser : ",existingUser)
        if(!existingUser){
          return res.globalResponse(StatusCodes.NOT_FOUND,false,'User Not Found',null);
        }
    
        const isPasswordValid  = await bcrypt.compare(password , existingUser.password);
        console.log(isPasswordValid)
        if(!isPasswordValid){
            return res.globalResponse(StatusCodes.UNAUTHORIZED,false,'Invalid Password',null);
        }
        const token = jwt.sign({ userId: existingUser._id , role:existingUser.role }, process.env.JWT_SECRET, { expiresIn: '30d' });
        if (token) {
            return res.globalResponse(StatusCodes.OK, true, 'Login Successful', token);
        } else {
            return res.globalResponse(StatusCodes.BAD_REQUEST, false, 'Error Generating Token', null);
        }
    
    }catch{(err)=>{
        console.error("Error during login:", err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Error during login', null);
    }}
   

}

module.exports = { register , login };

