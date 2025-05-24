const SizeModal = require("../../Models/size.js");

//For Add
exports.insert = async (request, response) => {
    const data = new SizeModal({
        name: request.body.name,
        order:request.body.order
    })
    await data.save()
        .then((result) => {
            let res = {
                status: true,
                message: 'record saved successfully',
                data: result
            }
            response.send(res)
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

//For View
exports.index = async (request, response) => {
    if (request.body.page == undefined || request.body.page < 1) {
        var page = 1;
    } else {
        var page = request.body.page
    }
    if(request.body.limit==undefined){
        var limit = 20;

    }else{
        var limit= request.body.limit;
    }
    var skip = (page-1)*limit;
    let condition = {
        deleted_at: null
    }
    if(request.body.status!=undefined){
        condition.status=request.body.status
    }
    await SizeModal.find(condition)
    .select('name status order')
    .limit(limit).skip(skip)
    .sort({_id : 'desc'})

        .then((result) => {
            if (result.length > 0) {
                const resp = {
                    status: true,
                    message: 'record  found succesfully',
                    data: result
                }
                response.send(resp)
            }
            else {
                const data = {
                    status: false,
                    message: 'no record  found ',
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

//For Update
exports.update = async (request, response) => {
    await SizeModal.updateOne({ _id: request.params.id }, {
        $set: {
            name: request.body.name,
            order:request.body.name ? request.body.order : 0
         }
    })
        .then((result) => {
            let resp = {
                status: true,
                message: 'record update successfully',
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
exports.destory = async (request, response) => {
    await SizeModal.updateOne({ _id: {$in:request.body.id} },{
        $set: {
            deleted_at: Date.now()
        }
    })
        .then((result) => {
            let resp = {
                status: true,
                message: 'record update successfully',
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
//For Details
exports.details= async(request,response)=>{
    await SizeModal.findOne({_id:request.params.id})
    .then((result)=>{
        let data= {
            status:true,
            message:' Record found ssuccessfully',
            data:result
        }
        response.send(data)
    }).catch((error) => {
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
//For Chnage-Status
exports.changestatus=async(request,response)=>{
    await SizeModal.updateMany({_id:{$in:request.body.id}},
        [
            {
                $set:
                {
                    status: {
                        $switch: {
                            branches: [
                                { case: { $eq: ["$status", true] }, then: false },
                                { case: { $eq: ["$status", false] }, then: true },
                            ]
                        }

                    }

                }
            }
        ]
    )
    .then((result)=>{
        let data = {
            status:true,
            message:'status change successfully',
            data : result
        }
        response.send(data)

    }).catch((error)=>{
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