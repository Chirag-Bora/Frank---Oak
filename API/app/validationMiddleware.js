var jwt = require('jsonwebtoken');

const saltRounds = 10 ;
var secretvalue = '1234567890';

module.exports = (request,response,next) =>{
    try{
        const token = request.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(token,secretvalue);

        next()
    }catch(error){
        const resp = {
            status : false,
            message : ' Token is invaild ',
            tokenStatus : false,
            data : error
        }
        response.send(resp)
    }
}