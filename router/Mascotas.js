const express= require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id:'1',nombre:'rex', descripcion:'descripcion'},
            {id:'2',nombre:'chanchan', descripcion:'descripcionc'},
            {id:'3',nombre:'perro', descripcion:'descripcionp'}
        ]
    })
})





module.exports = router;
