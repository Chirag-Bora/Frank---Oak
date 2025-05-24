const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required.'],
    },
    mobile_number : {
        type : String,
    },
    country_name : {
        type : String,
    },
    city_name : {
        type : String,
    },
    image : {
        type : String,
    },
    email : {
        type : String,
        required : [true, 'email is required.'],
        unique : true
    },
    password : {
        type : String,
        required : [true, 'password is required.'],
    },
    type:{
        type : String,
        enum : ['admin','user'],
        required : [true, 'type is required.'],
    },
    status : {
        type : Boolean,
       default : 1,
    },
    order :  {
        type : Number,
       default : 0,
    },
    created_at : {
        type : Date,
        default :Date.now()
    },
    updated_at : {
        type : Date,
        default :Date.now()
    },
    delete_at : {
        type : Date,
        default : ''
    },

});


const userModal = mongoose.model('User', userSchema);

module.exports = userModal;