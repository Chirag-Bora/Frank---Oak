const mongoose = require('mongoose');
let SizeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
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
    }

}, { timestamps: true })
let SizeModal = mongoose.model('Size', SizeSchema);
module.exports = SizeModal