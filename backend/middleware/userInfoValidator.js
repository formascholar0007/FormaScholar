const { StatusCodes } = require('http-status-codes');
const userInfoValidatorSchema = (Schema) =>(req,res,next)=>{

    const{error} = Schema.validate(req.body)
    if(error){
        return res.globalResponse(StatusCodes.CONFLICT, false, 'Validation Failed', {error:error.details[0].message});
    }
    next();
}
module.exports = userInfoValidatorSchema;
