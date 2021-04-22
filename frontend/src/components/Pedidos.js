import React  from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const Pedidos = ({pedidos}) => {

    return (
        <>
        { pedidos.length === 0 ?
                <div className="container mt-5 py-5">
                    <h1 className="my-5"> No hay pedidos </h1>
                        <div className="row">
                            <div className="col-12 mb-5 d-flex justify-content-center">
                                <Link to={'/nuevo-pedido'} className="btn btn-secondary text-uppercase py-2 px-5 font-weight-bold">Crear Pedido</Link>
                            </div>
                        </div>
                </div>
            :
                <div className="container mt-5 py-5">
                    <h1 className="my-5">Administrador de Pedidos</h1>
                    <div className="row">
                        <div className="col-12 mb-5 d-flex justify-content-center">
                            <Link to={'/nuevo-pedido'} className="btn btn-secondary text-uppercase py-2 px-5 font-weight-bold">Crear Pedido</Link>
                        </div>

                        <div className="col-md-8 mx-auto">
                            <div className="list-group">
                                {pedidos.map(pedido => (
                                    <Link 
                                        to={`/detalles/${pedido._id}`}
                                        key={pedido._id} 
                                        className="p-5 list-group-item list-group-item-action flex-column align-items-start"
                                    >
                                        <div className="d-flex w-100 justify-content-between mb-4">
                                            <h3 className="mb-3">{pedido.pedido}</h3>
                                            <small className="fecha-alta">
                                                <Moment format="DD/MM/YYYY">{pedido.fecha}</Moment> - { pedido.hora }
                                            </small>
                                        </div>
                                        <div className="contato py-3">
                                            <p>Pedido de : <span className="info">{pedido.nombre}</span> </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
 
export default Pedidos;