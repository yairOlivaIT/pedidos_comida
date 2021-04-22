const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoControllers');

module.exports = function(){

    //Agrega nuevos pacientes via POST
    router.post('/',
        pedidoController.nuevoPedido
    );

    router.get('/',
        pedidoController.obtenerPedidos
    );

    router.get('/:id',
        pedidoController.obtenerPedidoId
    );


    router.put('/:id',
        pedidoController.actualizarPedido
    );


    router.delete('/:id',
        pedidoController.eliminarPedido
    );

    
    return router;
}