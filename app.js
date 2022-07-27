// console.log("hola mundo ")
//Creando el servidor
var express = require('express')
var config = require('./config.js').config
global.app = express();



var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

require('./rutas.js')


   
app.use('/',express.static(__dirname + '/Pagina'))

app.listen(config.puerto,function(){
    console.log('servidor funcionando por el puerto '+config.puerto)
})

