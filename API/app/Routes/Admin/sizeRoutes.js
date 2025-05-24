const express = require('express');
const router =express.Router();
const path = require('path')
const multer = require('multer');
const { insert, index, update, destory, details, changestatus } = require('../../Controllers/Admin/sizeController.js');


const storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,'uploads/default')
    },
    filename:function(req,file,cb){
        const uniquevalue = Date.now()+ '-'+ Math.round(Math.random()*1E9)
        // console.log(file);
        var imgpath= path.extname(file.originalname);
        cb(null,file.fieldname+'-'+ uniquevalue+imgpath)
    }
})


// const single = multer({storage:storage}).single('default_image')
// const multiple = multer({storage:storage}).array('default_images')
const none = multer({storage:storage}).none()
module.exports= app=>{
    router.post('/add',none,insert)
    router.post('/',none,index)
    router.put('/update/:id',none,update)
    router.post('/delete',none,destory)
    router.post('/change-status',none,changestatus)
    router.post('/detail/:id',none,details)
    app.use('/api/admin/size',router)
}