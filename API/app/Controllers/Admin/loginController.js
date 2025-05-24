const userModal = require("../../Models/user.js")
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async (request, response) => {

    const user = await userModal.findOne({ email : request.body.email, type : 'admin'});

    if (!user) {
        const resp = {
            status: false,
            message: "Email id does't exit !!",
            data: []
        }
        response.send(resp)
    } else {

        var password = await bcrypt.compare(request.body.password, user.password);

        if(password){

            var token = jwt.sign({ user }, 'secret', { expiresIn: '1h' });

            const resp = {
                status: true,
                message: 'Login Succesfully !!',
                token: token,
                data: []
            }
        
            response.send(resp)
        } else {
            const resp = {
                status: false,
                message: "Password is incorrect !!",
                data: []
            }
            response.send(resp)
        }
    }
}