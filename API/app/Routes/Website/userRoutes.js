const express = require('express');
const { login, register, updateProfile, viewProfile, forgetPassword, resetPassword, changePassword } = require('../../Controllers/Website/userController.js');
const router = express.Router();
const path = require('path');
const multer  = require('multer')
const folder = multer({ dest: 'uploads/users' })
const validationMiddleware = require('../../validationMiddleware.js');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/users')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

      
      var imagePath = path.extname(file.originalname);
      
      
      cb(null, file.fieldname + '-' + uniqueSuffix+imagePath)
    }
  })
  
const single = multer({ storage: storage }).single('image');
const multiple = multer({ storage: storage }).array('images');
const none = multer({ storage: storage }).none();


module.exports = server => {

    router.post('/login',none,login);
    router.post('/register',none,register);
    router.post('/view-profile',none,validationMiddleware,viewProfile);
    router.post('/update-profile',single,validationMiddleware,updateProfile);
    router.post('/change-password',none,validationMiddleware,changePassword);
    router.post('/forget-password',none,forgetPassword);
    router.post('/reset-password',none, resetPassword);

    server.use('/api/website/user', router);
}