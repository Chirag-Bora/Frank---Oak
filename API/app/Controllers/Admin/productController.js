const productImageModel = require("../../Models/productImages.js")
const productModel = require("../../Models/product.js")
const jwt = require('jsonwebtoken'); // Make sure to require jwt
const payload = { userId: "12345", role: "admin" };
const secret = "your_secret_key";  // Use the same secret as in .env


//For Add 
exports.insert = async (request, response) => {

    var requestData = request.body;

    console.log(request.files);

    // if (request.files[0]) {
    //     if (request.files[0].filename) {
    //         requestData.image = request.files[0].filename
    //     }
    // }

    // if (request.files.images) {
    //     requestData.images = []
    //     request.files.images.forEach(element => {
    //         requestData.images.push(element.filename)
    //     });
    // }

    const data = new productModel(requestData)
    await data.save()
    .then((result) => {

        // if (request.files) {
        //     request.files.forEach(element => {
        //         const images = new productImageModel({
        //             product_id: result._id,
        //             image: element.filename
        //         });
        //     })
        // }

        let res = {
            status: true,
            message: 'Record insert successfully',
            data: result
        }
        response.send(res)
    })
    .catch((error) => {
        var errormessage = []

        for (var value in error.errors) {
            errormessage.push(error.errors[value].message)
        }
        let res = {
            status: false,
            message: 'Something went wrong',
            data: errormessage
        }
        response.send(res)
    })
}

//For View 
exports.index = async (request, response) => {

    var page = (request.body.page == undefined || request.body.page < 1) ? 1 : request.body.page;

    var limit = (request.body.limit == undefined) ? 5 : request.body.limit;

    var skip = (page - 1) * limit;

    const addCondition = [
        {
            deleted_at : null, 
        }
    ];
    
    const orCondition = [];

    if (request.body.name == undefined || request.body.name == '') {
    } else {
        orCondition.push({ 
            name : {
                $regex: request.body.name, $options: 'i' 
            }
        })
    }

    if (request.body.category_id == undefined || request.body.category_id == '') {
    } else {
        orCondition.push({ 
            category_id : request.body.category_id
        })
    }


    if(addCondition.length > 0){
        var condition = { $and : addCondition }
    } else {
        var condition = {}
    }
    
    if(orCondition.length > 0){
        condition.$or = orCondition;
    }




    // if (request.body.category_id == undefined) {
    // } else {
    //     condition.category_id = request.body.category_id
    // }

    // if (request.body.sub_category_id == undefined) {
    // } else {
    //     condition.category_id = request.body.sub_category_id
    // }

    // if (request.body.size_id == undefined) {
    // } else {
    //     condition.size_id = request.body.size_id
    // }

    // if (request.body.color_id == undefined) {
    // } else {
    //     condition.color_id = request.body.color_id
    // }

    

    // if (request.body.status == undefined) { 
    // } else {
    //     condition.status = request.body.status
    // }


    var totalRecords = await productModel.find().countDocuments();

    var totalProducts = await productModel.aggregate(
        [
            {
                $group:{
                    _id: "",
                    minPrice: { $min: "$sale_price" },
                    maxPrice: { $max: "$sale_price" },
                    avgPrice: { $avg: "$sale_price" },
                    sumPrice: { $sum: "$sale_price" }
                }
            }
        ]
    )
    
    await productModel.find(condition)
        .select('name category_id sub_category_id color_id size_id actual_price sale_price status order')
        .populate('category_id', 'name')
        .populate('sub_category_id', 'name')
        .populate('color_id', 'name')  
        // .populate('size_id', 'name')
        .populate('size_ids', 'name')
        .limit(limit).skip(skip)
        .sort({ _id: 'desc' })
        .then((result) => {
            if (result.length > 0) {
                const resp = {
                    status: true,
                    message: 'Record found succesfully',
                    totalRecords : totalProducts,
                    data: result
                }
                response.send(resp)
            }
            else {
                const data = {
                    status: false,
                    message: 'No record  found ',
                    data: []
                }
                response.send(data)
            }
        })
        .catch((error) => {
            var errormessage = []

            for (var value in error.errors) {
                console.log(value);
                errormessage.push(error.errors[value].message)
            }
            let res = {
                status: false,
                message: 'something went wrong',
                data: errormessage
            }
            response.send(res)
        })
}


exports.update = async (request, response) => {

    var requestData = request.body;

    if (request.files.image) {
        requestData.image = request.files.image[0].filename
    }

    await productModel.updateOne({ _id: request.params.id }, {
        $set: requestData
    })
        .then((result) => {
            let resp = {
                status: true,
                message: 'Record update successfully',
                data: result
            }
            response.send(resp)
        })
        .catch((error) => {
            var errormessage = []

            for (var value in error.errors) {
                console.log(value);
                errormessage.push(error.errors[value].message)
            }
            let res = {
                status: false,
                message: 'something went wrong',
                data: errormessage
            }
            response.send(res)
        })
}

//For Update 
exports.update = async (request, response) => {

    var requestData = request.body;

    if (request.files.image) {
        requestData.image = request.files.image[0].filename
    }

    await productModel.updateOne({ _id: request.params.id }, {
        $set: requestData
    })
        .then((result) => {
            let resp = {
                status: true,
                message: 'Record update successfully',
                data: result
            }
            response.send(resp)
        })
        .catch((error) => {
            var errormessage = []

            for (var value in error.errors) {
                console.log(value);
                errormessage.push(error.errors[value].message)
            }
            let res = {
                status: false,
                message: 'something went wrong',
                data: errormessage
            }
            response.send(res)
        })
}

//For Delete 
exports.destroy = async (request, response) => {
    await productModel.updateMany({
        _id: {
            $in: request.body.id
        }
    }, {
        $set: { deleted_at: Date.now() }
    })
    .then((result) => {
        let resp = {
            status: true,
            message: 'Record delete successfully',
            data: result
        }
        response.send(resp)
    })
    .catch((error) => {
        var errormessage = []

        for (var value in error.errors) {
            errormessage.push(error.errors[value].message)
        }
        let res = {
            status: false,
            message: 'something went wrong',
            data: errormessage
        }
        response.send(res)
    })
}

//For Detail View
exports.details = async (request, response) => {

    await productModel.findOne({ _id: request.params.id })
        .then((result) => {
            let data = {
                status: true,
                message: ' Record found ssuccessfully',
                data: result
            }
            response.send(data)
        }).catch((error) => {
            var errormessage = []

            for (var value in error.errors) {
                errormessage.push(error.errors[value].message)
            }
            let res = {
                status: false,
                message: 'something went wrong',
                data: errormessage
            }
            response.send(res)
        })
}

//For Change-Status 
exports.changeStatus = async (request, response) => {
    await productModel.updateMany({
        _id: {
            $in: request.body.id
        }
    },
      [  
        {
            $set:
            {
                status: {
                    $switch: {
                        branches: [
                            { case: { $eq: ["$status", true] }, then: false },
                            { case: { $eq: ["$status", false] }, then: true },
                        ],
                    }
                }
            }
        }
    ])
    .then((result) => {
        let resp = {
            status: true,
            message: 'status update successfully',
            data: result
        }
        response.send(resp)
    })
    .catch((error) => {
        var errormessage = []

        for (var value in error.errors) {
            errormessage.push(error.errors[value].message)
        }
        let res = {
            status: false,
            message: 'something went wrong',
            data: errormessage
        }
        response.send(res)
    })
}