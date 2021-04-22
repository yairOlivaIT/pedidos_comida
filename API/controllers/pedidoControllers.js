const Pedido = require('../models/Pedido');

//cuando se crea un nuevo pedido
exports.nuevoPedido = async (req , res , next) => {
    //crear objeto de pedido con req.body
    const pedido = new Pedido(req.body);

    try {
        await pedido.save();
        res.json({ mensaje: 'El cliente se agregó correctamente' });
    } catch (error) {
        console.log(error);
        next();
    }

}


exports.obtenerPedidos = async (req ,res ,next ) => {
    try {
        const pedidos = await Pedido.find(); 
        res.json(pedidos);
    } catch (error) {
        res.status(404).json({message: error.message})
        next();
    }
}

exports.obtenerPedidoId = async (req ,res ,next) => {
    try {
        const pedido = await Pedido.findById(req.params.id);

        res.json(pedido);

    } catch (error) {
        console.log(error);
        next();
    }
}


exports.actualizarPedido = async (req, res, next) => {
    
    try {
        const pedido = await Pedido.findOneAndUpdate({_id: req.params.id}, req.body,{ //buscamos el id, con req.body le decimos que vamos a actualizarlo
            new: true //con esto que nos traiga el nuevo resultado
        });

        res.json(pedido);
    } catch (error) {
        console.log(error);
        next();
    }
}


exports.eliminarPedido = async (req, res ,next) => {
    try {
        await Pedido.findOneAndDelete({_id: req.params.id});
        res.json({mensaje:'pedido eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}