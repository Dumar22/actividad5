
//Crear la petición
var Post = function(url,payload,callback){
    
    var xhr = new XMLHttpRequest
       xhr.open("POST",url)
       //necesidad de esta cabecera:
       xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
       xhr.send(payload)
       
       xhr.addEventListener('readystatechange',function(){
           if(this.readyState === 4){
               return callback(this.response)
              
           }
       })

   }

//capturar datos para las operaciones
   var CalcularSuma = function(){
    var valor1 = document.getElementById('valor1').value
    var valor2 = document.getElementById('valor2').value
    var payload = "valor1="+valor1+"&valor2="+valor2
    Post("http://localhost:3000/suma ",payload,function(respuesta){
    console.log(respuesta)
    })
   }

   var CalcularResta = function(){
    var valor1 = document.getElementById('valor1').value
    var valor2 = document.getElementById('valor2').value
    var payload = "valor1="+valor1+"&valor2="+valor2
    Post("http://localhost:3000/resta",payload,function(respuesta){
    console.log(respuesta)
    })
   }

   var CalcularMult = function(){
    var valor1 = document.getElementById('valor1').value
    var valor2 = document.getElementById('valor2').value
    var payload = "valor1="+valor1+"&valor2="+valor2
    Post("http://localhost:3000/multiplicacion",payload,function(respuesta){
    console.log(respuesta)
    })
   }

   var CalcularDiv = function(){
    var valor1 = document.getElementById('valor1').value
    var valor2 = document.getElementById('valor2').value
    var payload = "valor1="+valor1+"&valor2="+valor2
    Post("http://localhost:3000/division",payload,function(respuesta){
    console.log(respuesta)
    })
   }


   var DatosPer = function(){
    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value
    var direccion = document.getElementById('direccion').value
    var payload = "nombre="+nombre+"&apellido="+apellido+"&direccion="+direccion
    Post("http://localhost:3000/datosPersona",payload,function(respuesta){
    console.log(respuesta)
    })
   }