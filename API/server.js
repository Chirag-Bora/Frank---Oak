const express = require('express');
const bodyParser = require('body-parser');
const  cors = require('cors');
const mongoose = require('mongoose');


const server = express(); // Executable Function


server.use(express.json());

server.use(cors());

server.use(express.urlencoded({extended:true}));


server.get('/', (request, response)=>{
    response.send('Server is working fine !!')
});


require('./app/Routes/Admin/parentCategoryRoutes.js')(server);
require('./app/Routes/Admin/subCategoryRoutes.js')(server);
require('./app/Routes/Admin/loginRoutes.js')(server);
require('./app/Routes/Admin/colorRoutes.js')(server);
require('./app/Routes/Admin/sizeRoutes.js')(server);
require('./app/Routes/Admin/productsRoutes.js')(server);

//Websites APIS
require('./app/Routes/Website/userRoutes.js')(server);




mongoose.connect('mongodb://127.0.0.1:27017/Frank_and_Oak')
.then(() => {
    server.listen('4000');
    console.log('Connected!');
})
.catch(() => {
    console.log('Connected!');
})
;
