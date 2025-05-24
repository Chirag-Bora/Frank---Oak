// const { text } = require('body-parser');
const mongoose = require('mongoose');
const Category = require('./category.js')
const Colors = require('./color.js')
const Sizes = require('./size.js')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    actual_price: {
        type: Number,
        default:0,
        required: [true, "price is required"]
    },
    sale_price: {
        type: Number,
        default:0,
        required: [true, "price is required"]
    },
    best_selling: {
        type: String,
        enum:['Yes','No'],
        default:'No'
    },
    category_id: {
        type: String,
        ref : 'Category',
        required: [true, 'category is required']
    },
    sub_category_id: {
        type: String,
        ref : 'Category',
    },
    color_id: {
        type: String,
        ref : 'Colors',
    },
    size_id: {
        type: String,
        ref: 'Sizes',
        required: [true, 'size is required']
    },
    size_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sizes',
        required: [true, 'size is required']
    }],
    image: {
        type: String,
        // required: [true, "thumbnail is required"]
    },
    description: {
        type: String,
        default:''
    },
    short_description:{
        type:String,
        default:''
    },
    shipping_charges:{
        type:Number,
        default:0
    },
    order: {
        type: Number,
        required: [true, 'order is required']
    },
    deleted_at: {
        type: Date,
        default: ''
    },
    status: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })
let productModel = mongoose.model('Products', productSchema);
module.exports = productModel;