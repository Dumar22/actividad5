var datosModel = {}
datos=[]
datosModel.datos = function(info,callback){
    datos.push({mensaje:'Bienvenido ' + info.nombre +' '+ info.apellido})
    return callback(datos)
    
}

module.exports.datosModel = datosModel