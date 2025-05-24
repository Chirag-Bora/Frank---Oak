const mongoose = require('mongoose');

const productImageSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Types.ObjectId,
        required: [true, 'name is required']
    },
    image: {
        type: String,
        // required: [true, "thumbnail is required"]
    },
    deleted_at: {
        type: Date,
        default: ''
    },
}, { timestamps: true })
let productImageModel = mongoose.model('ProductImage', productImageSchema);
module.exports = productImageModel;