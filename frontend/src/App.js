import React , { useState , useEffect } from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Pedidos from './components/Pedidos';
import NuevoPedido from './components/NuevoPedido';
import DetallesPedido from './components/DetallesPedido';
import clienteAxios from './config/axios';

function App() {

  const [ pedidos , setPedidos ] = useState([]);
  const [ consultar, setConsultar ] = useState(true);

  useEffect(() => {
    if(consultar){
      const consultaAPI = async () => {
        clienteAxios.get('/pedidos')
          .then(respuesta => {
            setPedidos(respuesta.data);

            //deshabilitar consulta
            setConsultar(false);
          })
          .catch(error => {
            console.log(error);
          })
        
      }
      consultaAPI();
    }
  },[consultar]);


  return (
      <Router>
        <Switch>
          <Route 
            exact path="/" 
            component={() => <Pedidos pedidos={pedidos} />}
          />

          <Route 
            exact path="/nuevo-pedido" component={() => <NuevoPedido setConsultar={setConsultar} />}
          />

          <Route 
            exact path="/detalles/:id"
            render={(props) => {
              const order = pedidos.filter(pedido =>  pedido._id === props.match.params.id );


              return(
                <DetallesPedido
                  order = {order[0]}
                  setConsultar = {setConsultar}
                />
              )}}    
          />  
        </Switch>
      </Router>
  );
}

export default App;
