const express = require('express')
require('dotenv').config() //connect with dotenv file
PORT = (process.env.PORT)



///crear el servidor de express
const app = express()


//directorio publico
app.use( express.static('public'))

//rutas
//TODO: auth // crear, login, renew
app.use('/api/auth', ( require('./routes/auth')))
//TODO:  CRUD Events 



//escuchar peticiones
app.listen( PORT, () => {
    console.log('Server on Port', PORT )
})