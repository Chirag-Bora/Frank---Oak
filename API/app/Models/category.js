const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        match: /^[a-z 'A-Z]{2,20}$/,
        required : [true, 'Name is required.'],
    },
    root_id : {
        type : String,
        ref : 'Category',
        default : 0
    },
    image : {
        type : String,
    },
    featured_categories : {
        type : String,
        enum : ['Yes','No'],
        default : `No`
    },
    status : {
        type : Boolean,
        default : 1
    },
    order : {
        type : Number,
        default : 0
    },
    created_at : {
        type : Date,
        default : Date.now()
    },
    updated_at : {
        type : Date,
        default : Date.now()
    },
    deleted_at : {
        type : Date,
        default : ''
    },
});

const categoryModal = mongoose.model('Category',categorySchema);

module.exports = categoryModal;