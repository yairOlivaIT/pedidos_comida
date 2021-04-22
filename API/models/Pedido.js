const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Schema estructura en la base de datos

const pedidoSchema = new Schema({
    pedido: {
        type : String,
        trim: true,
    },
    nombre: {
        type : String,
        trim: true
    },
    fecha: {
        type: String,
        trim: true
    },
    hora:{
        type: String,
        trim: true
    },
    telefono:{
        type: String,
        trim: true
    },
    detalles:{
        type: String,
        trim: true
    }
});


module.exports = mongoose.model('Pedido', pedidoSchema); //por lo general mongoose pone el nombre de la table en plural osea pedidos, si quiero indicarle tendria que poner 'pedido' como tercer parametro es decir mongoose.model('Pedido', pedidoSchema,'pedido');




// /*Trim elimina los espacios si alguien pone YAIR      => trim elimina esos espacios*/
