const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
//cors
app.use(cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGIN = [
        'http://localhost:5173',
        'https://calendar-notifications.netlify.app'
      ]
      if (ACCEPTED_ORIGIN.includes(origin)) {
        return callback(null, true)
      }
      if (!origin) {
        return callback(null, true)
      }
      return callback(new Error("Not allowed by CORS"))
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: [
      'Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, OPTIONS, DELETE',
      "Access-Control-Allow-Origin", "*",
      "Content-Type", "Authorization"
    ],
    maxAge: 84600,
    // optionsSuccessStatus: 200 || 204,
    // credentials: true,
    preflightContinue: true,
  
  }))
  
// Directorio Público
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth') );
app.use('/api/events', require('./routes/events') );




// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});






