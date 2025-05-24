const defaultModal = require("../../models/default.js");


//For Add Data
exports.create = async(request, response) =>{


    const data = new defaultModal({
        name : request.body.category_name,
    })
   


    await data.save()
    .then((result) => {
        const resp = {
            status : true,
            message : 'Recorde insert sucessfully !!',
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
//For View Data
exports.index = async(request, response) =>{

 
    await defaultModal.find({ dalete_at : null})

    .select('name  status order')
    .then((result) => {
        
        if(result.length > 0){
            const resp = {
                status : true,
                message : 'Record found sucessfully !!',
                data : result
            }
            response.send(resp);
        }else{
            const resp = {
                status : false,
                message : ' No record found !!',
                data : []
            }
            response.send(resp);
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
//For Update Data
exports.update = async(request, response) =>{
        await defaultModal.updateOne(
            {
                _id : request.params.id
            },
            {
                $set : {
                    name : request.body.category_name,
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
// For Delete Data
exports.destroy = async(request, response) =>{
    await defaultModal.updateOne(
        {
            _id : request.params.id
        },
        {
            $set : {
                dalete_at: Date.now(),
                
            }
        }
        ).then((result) => {
            var resp = {
                status : true,
                message : 'Record Delete successfully !!',
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