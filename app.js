const express = require('express')
const app = express()
const path = require('path')

const port = 3010

// views
const views = path.join(__dirname, 'views/')
// public
const public = path.join(__dirname, 'public/')
// hhtp routes
const htppRaiz = '/'
const htppHome = '/home'
const htppRegister = '/register'
const httpLogin = '/login'
// html
const homeHtml = 'home.html'
const registerHtml = 'register.html'
const loginHtml = 'login.html' 

// Define the static file path
app.use(express.static(__dirname +'/public/'));

app.get(htppRaiz, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})

app.get(htppHome, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})

app.get(htppRegister, (req, res) => {
    res.sendFile(path.join(views, registerHtml))
})

app.get(httpLogin, (req, res) => {
    res.sendFile(path.join(views, loginHtml))
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
    console.log(__dirname)
})

