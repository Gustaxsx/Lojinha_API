//importar o modulo do express
const express = require('express');

//importar o modulo de rotas 
const productRoutes = require('./src/routes/productRoutes');
const clienteRoutes = require('./src/routes/clientRoutes'); 

//criar uma aplicação express
const app = express();

//definir um middleware para parsear o corpo das requisições como JSON
app.use(express.json());

//definir a porta que o servidor irá escutar
const porta = 4000;

//rota de teste da api
app.get('/', (req, res) => {
    res.send('API de Produtos e Clientes funcionando!');
});

//usando as rotas de produtos e clientes
app.use('/api/products', productRoutes);
app.use('/api/client', clienteRoutes);

//iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});

//Fim do arquivo server.js