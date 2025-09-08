const express = require('express');

const router = express.Router();

const clienteController = require('../controller/clientController');

//criando as rotas para os clientes 

// 1 rota para obter todos os clientes 
router.get('/', clienteController.getAllClient);

// 2 rota para obter um cliente pelo ID
router.get('/:id', clienteController.getClientById);

// 3 rota para criar um novo cliente
router.post('/', clienteController.createClient);

// 4 rota para atualizar um cliente 
router.patch('/:id', clienteController.updateClient);

// 5 rota para deletar um cliente
router.delete('/:id', clienteController.deleteClient);

module.exports = router;