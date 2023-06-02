const express= require('express')
const router = express.Router()

router.get("/", (req, res) => {
    console.log(req.url) 
    console.log(__dirname)
    res.render("index",{titulo:"mi título dinámico"});
 });
 
 router.get("/prueba", (req, res) => {
     console.log(req.url) 
    res.send("Hello Prueba!");
});

router.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicios: "Este es un mensaje dinámico de servicios"})
})

module.exports = router;