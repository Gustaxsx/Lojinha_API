const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');

//criando as rotas para os produtos 

// 1 rota para obter todos os produtos
router.get('/', productController.getAllProducts);

//2 rota para obter um produto pelo ID
router.get('/:id', productController.getProductById);

//3 rota para criar um novo produto
router.post('/', productController.createProduct);

//4 rota para atualizar um produto
router.put('/:id', productController.updateProduct);

//5 rota para deletar um produto
router.delete('/:id', productController.deleteProduct);

module.exports = router;