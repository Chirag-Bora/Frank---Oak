const express = require('express');
const { create, index, update, destroy, details, changeStatus } = require('../../Controllers/Admin/subCategoryController');

const router = express.Router();
const path = require('path');
const multer  = require('multer')
const folder = multer({ dest: 'uploads/categories' })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/categories')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        var imagepath = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix+imagepath)
    }
})
  
const upload = multer({ storage: storage }).none();
const single = multer({ storage: storage }).single('image');

module.exports = server => {

    router.post('/add',single,create);

    router.post('/',folder.none(),index);

    router.post('/v1',folder.none(),index);

    router.post('/details/:id',upload,details);

    router.put('/update/:id',single,update);

    router.post('/delete',folder.none(),destroy);

    router.post('/change-status',folder.none(),changeStatus);

    server.use('/api/admin/sub-categories',router);
}