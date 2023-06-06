const express = require("express");

const app = express();
const port = 3000;

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