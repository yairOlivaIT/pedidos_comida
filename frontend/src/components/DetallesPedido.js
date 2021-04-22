import React from 'react';
import { Link , withRouter } from 'react-router-dom';
import Moment from 'react-moment';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2'; 


const DetallesPedido = (props) => {

    if(!props.order){
        props.history.push('/');
        return null;
    }

    const { order: { _id , pedido , nombre , fecha , hora , detalles , telefono } } = props;


    const eliminarPedido =  id => {
            Swal.fire({
                title: '¿Estas seguro?',
                text: "Un pedido eliminado no se puede recuperar",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si , eliminar',
                cancelButtonText: 'Cancelar'
              }).then((result) => {
                if (result.isConfirmed) {

                    //Alerta de eliminado
                    Swal.fire(
                        'Eliminado!',
                        'El pedido fue eliminado.',
                        'success'
                  )
                    //Eliminado de la base de datos 
                    clienteAxios.delete(`/pedidos/${id}`)
                        .then( respuesta => {
                            props.setConsultar(true);
                            props.history.push('/')
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
              })
    }
    
    return ( 
        <>
            <h1 className="orden">Orden de {nombre}</h1>
            <div className="col-md-8 mx-auto mt-5">
                <div className="list-group">
                    <div className="p-5 list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between mb-4">
                            <h3 className="mb-3">{pedido}</h3>
                            
                            <div className="d-block">
                                <button type="button"
                                    className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col-12  mx-auto"
                                    onClick = {() => eliminarPedido(_id)}
                                >
                                    Eliminar &times;
                                </button>
                            </div>
                        </div>
                        
                        <div className="contato py-3">
                            <p className="info">Fecha Pedido: <Moment format="DD/MM/YYYY">{fecha}</Moment></p>
                        </div>

                        <div className="contato py-3">
                            <p className="info">Hora del Pedido: { hora }</p>
                        </div>

                        <div className="contato py-3">
                            <p className="info">Teléfono : {telefono}</p>
                        </div>
                        
                        <div className="contato py-3">
                            <p className="info">Detalles : {detalles}</p>
                        </div>                 
                    </div>
                </div>
            </div>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-secondary text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default withRouter(DetallesPedido);