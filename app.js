//Declaracion de frameworks
const express = require('express');
const app = express();
const path = require('path')

//Declaracion de puertos
const port = 3000


//Declaracion de url

const urlHome = '/home'
const urlPerfil = '/perfil'
const urlProductosAgregar = '/producto/agregar'

//Declaracion respons
const resServer = 'Esto fue esxitoso'
const resHome ='Hola, estamos en el home'
let saludo = "Bienvenido/a, ahora estamos en tu perfil"

//Declaracion de variables
let producto ={
    tipoProducto: null,
    precio : null,
    cantidad: null
}

//Codigo

//>montar el servidor
app.listen(port,()=> console.log(resServer))

//>montar rutas 

//>Home
app.get(urlHome,function(req,res){res.send(resHome)})
//>Perfil
app.get(urlPerfil,function(req,res){res.send(saludo)})
//>agregar produco
app.get(urlProductosAgregar,function(req,res){res.send(producto)})