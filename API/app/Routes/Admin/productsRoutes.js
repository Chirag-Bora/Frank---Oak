const express = require('express');

const router =express.Router();
const path = require('path')
const multer = require('multer');
const { insert, index, update, destroy, details, changeStatus } = require('../../Controllers/Admin/productController.js');
const uploads = multer({ dest: 'uploads/products' })
const validationMiddleware = require('../../validationMiddleware.js');

const storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,'uploads/products')
    },
    filename:function(req,file,cb){
        const uniquevalue = Date.now()+ '-'+ Math.round(Math.random()*1E9)
        var imgpath= path.extname(file.originalname);
        cb(null,file.fieldname+'-'+ uniquevalue+imgpath)
    }
})

const single = multer({storage:storage}).single('image')
const multiple = multer({storage:storage}).array('images')
const upload = multer({storage:storage}).fields([{ name: 'image', maxCount: 1 }, { name: 'images', maxCount: 8 }])
const none = multer({storage:storage}).none()

module.exports= app=>{

    router.post('/add',upload,validationMiddleware,insert)
    
    router.post('/',none,validationMiddleware,index)
    
    router.put('/update/:id',upload,validationMiddleware,update)

    router.post('/delete',none,validationMiddleware,destroy)

    router.post('/change-status',none,validationMiddleware,changeStatus)

    router.post('/detail/:id',none,validationMiddleware,details)

    app.use('/api/admin/products',router)
}