const userModal = require("../../Models/user.js");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

const saltRounds = 10;
var secretvalue = '1234567890';

//For Add Data
exports.register = async(request, response) =>{

    const password = bcrypt.hashSync(request.body.password, saltRounds);

    const data = new userModal({
        name : request.body.name,
        email : request.body.email,
        mobile_number : request.body.mobile_number,
        password : password,
        type : 'user',
    })
    await data.save()
    .then((result) => {

        var token = jwt.sign({result}, secretvalue, {expiresIn : '1h'});

        let resp = {
            status : true,
            message : 'user register  sucessfully !!',
            token : token,
            data : result
        }
        response.send(resp);
    })
    .catch((error) => {
        var errormessages = [];
        for( var value in error.errors){
            errormessages.push(error.errors[value].message);
        }
        const resp = {
            status : false,
            message : 'Somthing went Wrong !!',
            data :errormessages ,
        }   
        response.send(resp);
    })
}

// For Login
exports.login = async (request, response) => {

    const user = await userModal.findOne({ email : request.body.email, type : 'user', deleted_at: null});

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

            if(user.status == true){

                var token = jwt.sign({ user }, secretvalue, { expiresIn: '1h' });

                const resp = {
                    status: true,
                    message: 'Login Succesfully !!',
                    token: token,
                    data: user
                }

                response.send(resp)

            } else {
                const resp = {
                    status: false,
                    message: "Your account is blocked !!",
                    data: []
                }
                response.send(resp)
            }
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

//For view-profile
exports.viewProfile = async (request, response) =>{


        const token = request.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(token,secretvalue);
     

    await userModal.findOne({_id: decoded.user._id, deleted_at : null })
    .then((result) => {
        if(result){
            const resp = {
                status : true,
                message : 'Record found sucessfully !!',
                data : result
            }
            response.send(resp);
        }else{
            const resp = {
                status : false,
                message : ' No record found !!',
                data : []
            }
            response.send(resp);
        }
        
        response.send(resp);
    })
    .catch((error) => {
        const resp = {
            status : false,
            message : 'Somthing went Wrong !!',
            data : error
            
        }   
        response.send(resp);
    })
}

//For Update-Profile
exports.updateProfile = async(request, response) =>{

    try{
        const token = request.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(token,secretvalue);

        var data = request.body;

        if(request.file){
            data.image = request.file.filename;
        }

    await userModal.updateOne( { _id :decoded.user._id},{email : request.body.email},{
        $set : data
    })
    .then((result) => {
        
        var resp = {
            status : true,
            message : 'Profile update successfully !!',
            data : result
        }
        response.send(resp);
    }) .catch((error) => {

        var errormessages = [];
        for( var value in error.errors){
            errormessages.push(error.errors[value].message);
        }
        const resp = {
            status : false,
            message : 'Somthing went Wrong !!',
            data : '',
            error: errormessages
        }   
        response.send(resp);
    })
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

//For Change Password
exports.changePassword = async (request, response) => {

    try {
        const token = request.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(token, secretvalue);

        const user = await userModal.findOne({ _id : decoded.user._id });

        var password = await bcrypt.compare(request.body.new_password, user.password);

        if (password) {
            const resp = {
                status: false,
                message: "New password is same as current password !!",
                data: []
            }
            response.send(resp)
        } else {

            const password = bcrypt.hashSync(request.body.new_password, saltRounds);

            await userModal.updateOne({ _id: decoded.user._id }, {
                $set: {
                    password : password
                }
            })
            .then((result) => {
                let resp = {
                    status: true,
                    message: 'Change password successfully',
                    data: result
                }
                response.send(resp)
            })
            .catch((error) => {
                var errormessage = []
                for (var value in error.errors) {
                    errormessage.push(error.errors[value].message)
                }
                let res = {
                    status: false,
                    message: 'something went wrong',
                    data: errormessage
                }
                response.send(res)
            })
        }
    } catch (error) {
        const data = {
            status: false,
            message: 'Token is invalid',
            tokenStatus : false,
            data: error
        }
        response.send(data)
    }
}

//For Forget Password
exports.forgetPassword = async (request, response) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: "ravideveloper0071@gmail.com",
          pass: "ihkfaqqvlnpdovcb",
        },
    });

    try {

        var forgetMessage =`<b>Hello User</b><br>
        <p>Please click on the following link to reset your password - <a href ="http://localhost:4000/reset-password/${request.body.email}">http://localhost:4000/reset-password/${request.body.email}</a> </p>`
        

        const info = await transporter.sendMail({
            from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
            to: request.body.email, // list of receivers
            subject: "Forgot Password", // Subject line
            // text: "Hello world?", // plain text body
            html: forgetMessage, // html body
        });

        const resp = {
            status: true,
            message: "Forgot password email has beeb sent successfully !!",
            data: []
        }
        response.send(resp)
    } catch (error) {
        const errormessage = error.message
        let res = {
            status: false,
            message: 'something went wrong',
            data: errormessage
        }
        response.send(res)
    }
}

//For Reset Password
exports.resetPassword = async (request, response) => {

    try {

            const password = bcrypt.hashSync(request.body.password, saltRounds);

            await userModal.updateOne({email:request.body.email }, {
                $set: {
                    password : password
                }
            })
            .then((result) => {
                let resp = {
                    status: true,
                    message: 'Reset password successfully',
                    data: result
                }
                response.send(resp)
            })
            .catch((error) => {
                var errormessage = []
                for (var value in error.errors) {
                    errormessage.push(error.errors[value].message)
                }
                let res = {
                    status: false,
                    message: 'something went wrong',
                    data: errormessage
                }
                response.send(res)
            })
        
    } catch (error) {
        let res = {
            status: false,
            message: 'something went wrong',
            data: errormessage
        }
        response.send(res)
    }
}
