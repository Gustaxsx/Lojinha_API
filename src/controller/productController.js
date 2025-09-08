const productModel = require('../model/productModel')

//Metodo do controlador para listar todos os produtos 
const getAllProducts = (req, res) => {
    const products = productModel.findAll();
    res.status(200).json(products);
}

//Metodo do controlador para listar um produto pelo ID
const getProductById = (req, res) => {

    //pegar o id da requisição
    const id = parseInt(req.params.id);

    //chamando o metodo findById
    const product = productModel.findById(id);

    //verificando se o produto existe
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({message: 'Produto não encontrado'});
    }
}

//Metodo do controlador para criar um novo produto
const createProduct = (req, res) => {

    //pegar os dados do produto do corpo da requisição
    const newProduct = req.body;

    //validar os dados do produto
    if (!newProduct.name || !newProduct.price || !newProduct.stock) {
        return res.status(400).json({message: 'Dados do produto incompletos'});
    }

    //chamando o metodo create
    const createdProduct = productModel.create(newProduct);
    res.status(201).json(createdProduct);
}

//metodo para atualizar um produto (estoque e preço)
const updateProduct = (req, res) => {
    // Pegar o ID da requisição
    const id = parseInt(req.params.id);
    // Pegar os dados atualizados do produto do corpo da requisição
    const {name, price, stock} = req.body;
    const updateProduct = productModel.update(id, {name, price, stock});
    res.status(200).json(updateProduct)
    
};
   

    //metodo para deletar um produto
    const deleteProduct = (req, res) => {
        // Pegar o ID da requisição
        const id = parseInt(req.params.id);
        // Chamando o método remove
        const deletedProduct = productModel.remove(id);
        // Verificando se o produto existe
        if (deletedProduct) {
            res.status(200).json({message: 'Produto deletado com sucesso'});
        } else {
            res.status(404).json({message: 'Produto não encontrado'});
        }
       
    }
 

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};