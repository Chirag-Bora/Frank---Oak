const mongoose = require('mongoose');
let colorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    code:{
        type:String,
        required:[true,'color code is required']
    },
    status: {
        type: Boolean,
        default: true
    },
    order: {
        type: Number,
        default: 0
    },
    deleted_at: {
        type: Date,
        default: ''
    },status:{
        type:Boolean,
        default:true
    }

}, { timestamps: true })
let colorModal = mongoose.model('Colors', colorSchema);
module.exports = colorModal