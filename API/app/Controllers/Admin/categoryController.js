const categoryModal = require("../../Models/category")

// For Add
exports.create = async(request, response) =>{


    console.log(request.body)
    const data = new categoryModal({
        name : request.body.name,
        order : request.body.order ? request.body.order :0,
    })

    await data.save()
    .then((result) => {
        const resp = {
            status : true,
            message : 'Record insert sucessfully !!',
            data : result
        }
        response.send(resp);
    })
    .catch((error) => {

        var errormessages = [];
        for( var value in error.errors){
            errormessages.push(error.errors[value].message);
        }
        const resp = {
            status : false,
            message : 'Somthing went Wrong !!',
            data : '',
            error: errormessages
        }   
        response.send(resp);
    })
}

// For View 
exports.index = async(request,response) => {

    if(request.body.page == undefined || request.body.page < 1){
        var page = 1;
    } else {
        var page = request.body.page;
    }

    if(request.body.limit == undefined){
        var limit = 20;
    } else {
        var limit = request.body.limit;
    }

    var skip = (page - 1) * limit;

    var condition  = {
        deleted_at : null, 
        root_id : 0,
    }

    if(request.body.status == undefined){
        
    } else {
        condition.status = request.body.status;
    }

    await categoryModal
    .find(condition)
    .select('name status order')
    .limit(limit).skip(skip)
    .sort({ _id : 'desc'})
    .then((result) => {
        if(result.length > 0){
            const resp = {
                status : true,
                message : 'Record found successfully !!',
                data : result,
            }
            response.send(resp);
        } else {
            const resp = {
                status : false,
                message : 'No record found !!',
                data : [],
            }
            response.send(resp);
        }
    })
    .catch((error) => {
        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : error
        }
        response.send(resp);
    })
}

// For Details
exports.details = async(request,response) => {

   
    await categoryModal
    .findOne({ deleted_at : null, _id : request.params.id})
    .then((result) => {
        if(result != undefined){
            const resp = {
                status : true,
                message : 'Record found successfully !!',
                data : result,
            }
            response.send(resp);
        } else {
            const resp = {
                status : false,
                message : 'No record found !!',
                data : [],
            }
            response.send(resp);
        }
    })
    .catch((error) => {
        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : error
        }
        response.send(resp);
    })
}

// For Update
exports.update = async(request, response) =>{

        await categoryModal.updateOne(
            {
                _id : request.params.id
            },
            {
                $set : {
                    name : request.body.name,
                    order : request.body.order,
                }
            }
        ).then((result) => {
            var resp = {
                status : true,
                message : 'Record update successfully !!',
                data : result
            }
            response.send(resp);
        }) .catch((error) => {

            var errormessages = [];
            for( var value in error.errors){
                errormessages.push(error.errors[value].message);
            }
            const resp = {
                status : false,
                message : 'Somthing went Wrong !!',
                data : '',
                error: errormessages
            }   
            response.send(resp);
        })
}

// For Delete
exports.destroy = async(request,response) => {
    console.log(request.body.id)
    await categoryModal.updateMany(
        {
            _id : {
                $in : request.body.id
            }
        },
        {
            $set : {
                deleted_at : Date.now(),
            }
        }
    ).then((result) =>{
        // console.log(result)
        var resp = {
            status : true,
            message : 'Record deleted successfully !!',
            data : result
        }

        response.send(resp);

    }).catch((error) => {
        var errormessages = [];

        for(var value in error.errors){
            console.log(value);
            errormessages.push(error.errors[value].message);
        }

        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : errormessages
        }
        response.send(resp);
    })
}

// For Change Status 
exports.changeStatus = async(request,response) => {

    console.log(request.body.id)

    await categoryModal.updateMany(
        
        {
            _id: {
                $in :request.body.id
            }
        },
        [
            { 
                $set: { 
                    status: { 
                        $switch: {
                            branches: [
                                { case: { $eq: [ "$status", 0 ] }, then: 1 },
                                { case: { $eq: [ "$status", 1 ] }, then: 0 },
                            ],
                        },
                    }, 
                },
            },
        ]    
        
    ).then((result) =>{
        var resp = {
            status : true,
            message :'Status update successfully !!',
            data : result
        }
        response.send(resp);

    })
    .catch((error) => {
        var errormessages = [];

        for(var value in error.errors){
            console.log(value);
            errormessages.push(error.errors[value].message);
        }

        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : errormessages
        }
        response.send(resp);
    })
}