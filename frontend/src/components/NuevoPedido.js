import React , { useState } from 'react';
import { Link , withRouter } from 'react-router-dom';
import Swal from 'sweetalert2'; 

import clienteAxios from '../config/axios';

const NuevoPedido = (props) => {


    const[order , setOrder ] = useState({
        pedido: '',
        nombre: '',
        fecha: '',
        hora: '',
        telefono: '',
        detalles: ''
    });

    const [ error , setError ] = useState(false);

    const { pedido , nombre , fecha , hora , telefono ,detalles } = order;

    const actualizarState = e => {
        setOrder({
            ...order,
            [e.target.name] : e.target.value
        })
    }

    //enviar peticion a la api
    const crearPedido = e => {
        e.preventDefault();

        if(pedido.trim() === '' || nombre.trim() === '' || fecha.trim() === '' || hora.trim() === '' || telefono.trim() === '' || detalles.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
       
        //enviar peticion por axios
        clienteAxios.post('/pedidos', order)
            .then(respuesta => {

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Pedido creado exitosamente.',
                    showConfirmButton: false,
                    timer: 1500
                  });

                props.setConsultar(true);
                props.history.push('/');
            })
    }
    return ( 
        <>
            <h1 className="my-5">Crear nuevo pedido</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-secondary text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <form 
                            onSubmit = {crearPedido}
                            className="bg-white p-5 bordered">
                            { error ? <h3 className="text-center mt-2 mb-5">Todos los campos son obligatorios </h3> : null }
                            <div className="form-group">
                                <label htmlFor="pedido">Nombre Pedido</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="pedido" 
                                    name="pedido" 
                                    placeholder="Nombre Pedido"
                                    onChange = {actualizarState} 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Cliente</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="nombre" 
                                    name="nombre" 
                                    placeholder="Nombre Cliente" 
                                    onChange = {actualizarState} 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telefono">Teléfono</label>
                                <input 
                                    type="tel" 
                                    className="form-control form-control-lg" 
                                    id="telefono" 
                                    name="telefono" 
                                    placeholder="Teléfono" 
                                    onChange = {actualizarState} 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="fecha">Fecha Alta</label>
                                <input 
                                    type="date" 
                                    className="form-control form-control-lg" 
                                    id="fecha" 
                                    name="fecha"  
                                    onChange = {actualizarState} 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="hora">Hora Alta</label>
                                <input 
                                    type="time" 
                                    className="form-control form-control-lg" 
                                    id="hora" 
                                    name="hora"  
                                    onChange = {actualizarState} 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="detalles">Detalles</label>
                                <textarea 
                                    className="form-control texto" 
                                    name="detalles" 
                                    rows="6"
                                    onChange = {actualizarState} 
                                ></textarea>
                            </div>


                            <input type="submit" className="btn btn-info mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Cita"  />
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default withRouter(NuevoPedido);