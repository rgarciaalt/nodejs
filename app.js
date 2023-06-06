const express = require("express");

const app = express();
const port = 3000;

// la configuración está en .env
require('dotenv').config()

const dns=require('node:dns')

dns.resolveNs('segorbe.es',(err,addresses) => {
    addresses.forEach((dir) => {
       console.log(dir)
    })
})


// conexión a base de datos
const mongoose = require('mongoose')

const dbname = "veterinaria"
const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@bd1.iqwo3h8.mongodb.net/${dbname}`

mongoose.connect(uri)
  .then( () => console.log('Base de datos conectada'))
  .catch(e => console.log(e))

// motor de plantillas

app.set('view engine','ejs')
app.set('views',__dirname +'/views')
 
 app.use(express.static(__dirname+'/public'))

 // rutas Web
 app.use('/',require('./router/RutasWeb'))
 app.use('/mascotas',require('./router/Mascotas'))

 app.use((req,res,next) => {
    res.status(404).sendFile(__dirname+"/public/404.html")
})

app.listen(port, () => {
  console.log(__dirname)  
  console.log(`Example app listening at http://localhost:${port}`);
});

// estoy en MASTER