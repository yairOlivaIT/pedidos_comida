const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({path:".env"});

//Crear el servidor
const app = express();

//habilitar cors
app.use(cors());



//habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
//habilitar routing
app.use('/pedidos',routes());//middleware de express

app.get('/', (req , res ) => {
    res.send('Hola a la app de pedidos');
});

// puerto y arrancar el servidor
const PORT = process.env.PORT || 4000;

connectDB();
 

app.listen( PORT,() => {
    console.log("Servidor andando en el puerto",PORT);
});