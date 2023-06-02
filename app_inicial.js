const {frutas,dinero} = require('./frutas')
const { v4: uuidv4 } = require('uuid');
const cowsay=require('cowsay')

frutas.forEach(fruta => {
    console.log(fruta)
})

console.log(frutas.length)
console.log(uuidv4());

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));


