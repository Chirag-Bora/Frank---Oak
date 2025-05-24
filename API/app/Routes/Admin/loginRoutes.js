const express = require('express');
const { login } = require('../../Controllers/Admin/loginController.js');
const router = express.Router();
const path = require('path');
const multer  = require('multer')
const folder = multer({ dest: 'uploads/categories' })



module.exports = server => {

        router.post('/',folder.none(), login)

        
    server.use('/api/admin/login', router);
}