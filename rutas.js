var matematicasControler = require('./api/controladores/matematicasControler.js').matematicasControler

var datosControler = require('./api/controladores/datosControler.js').datosControler

//suma
app.post('/suma',function(request, response){
     matematicasControler.suma(request,response)
  })

//resta
  app.post('/resta',function(request, response){
      matematicasControler.resta(request,response)
  })

  //multiplicación
  app.post('/multiplicacion',function(request, response){
    matematicasControler.multiplicacion(request,response)
  })

  //división
  app.post('/division',function(request, response){
    matematicasControler.division(request,response)
  })


  app.post('/datosPersona',function(request, response){
       datosControler.datos(request,response)
  })

 
