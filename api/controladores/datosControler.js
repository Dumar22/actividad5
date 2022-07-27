
var datosModel = require("../modelos/datosModels").datosModel
var datosControler = {}

datosControler.datos = function(request,response){
    var nombre = request.body.nombre
    var apellido = request.body.apellido
    var direccion = request.body.direccion

    console.log(nombre)
    console.log(apellido)
    console.log(direccion)

    if(nombre == null || nombre == undefined || nombre == ''){
        response.json({state:false,mensaje:'Campo nombre requerido'})
    }else{
        if(apellido == null || apellido == undefined || apellido == ''){
            response.json({state:false,mensaje:'Campo apellido requerido'})
        }
    }

    
    var info = {
        nombre:nombre,
        apellido:apellido,
        direccion:direccion
    }
   datosModel.datos(info,function(resultado){
    response.json(resultado)
    
   })
}



module.exports.datosControler = datosControler