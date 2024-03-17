
function globalResponse(req,res,next){

res.globalResponse = function(statusCode,success,message,data){
    return res.status(statusCode).json({
        statusCode:statusCode,
        success:success,
        message:message,
        data:data,
    })

}

next();

}

module.exports = globalResponse;