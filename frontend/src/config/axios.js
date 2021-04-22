import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : 'https://pedidos-crud.herokuapp.com/'
});

export default clienteAxios;