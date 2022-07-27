var matematicasControler = {}

matematicasControler.suma = function(request, response){
    response.json({mensaje: parseInt(request.body.valor1) + parseInt(request.body.valor2) })
}

matematicasControler.resta = function(request, response){
    response.json({mensaje: parseInt(request.body.valor1) - parseInt(request.body.valor2) })
}

matematicasControler.multiplicacion = function(request, response){
    response.json({mensaje: parseInt(request.body.valor1) * parseInt(request.body.valor2) })
}

matematicasControler.division = function(request, response){
    response.json({mensaje: parseInt(request.body.valor1) / parseInt(request.body.valor2) })
}



module.exports.matematicasControler = matematicasControler