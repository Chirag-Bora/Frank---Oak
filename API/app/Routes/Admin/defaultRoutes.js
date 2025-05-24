const express = require('express');
const { create, index, update, destroy } = require('../../Controllers/Admin/defaultController');
const router = express.Router();
const path = require('path');
const multer  = require('multer')
const folder = multer({ dest: 'uploads/categories' })


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/default')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

      
      var imagePath = path.extname(file.originalname);
      
      
      cb(null, file.fieldname + '-' + uniqueSuffix+imagePath)
    }
  })
  
const single = multer({ storage: storage }).single('default_image');
const multiple = multer({ storage: storage }).array('default_image',4);
const none = multer({ storage: storage }).none();

module.exports = server => {

        router.post('/add',none, create);

        router.post('/view',none, index);

        router.put('/update/:id',none, update);

        router.delete('/delete/:id',none, destroy);

    server.use('/api/admin/default', router);
}