//Simulação de um banco de dados em memoria para produtos 
let products = [
    {id:1, name: 'Notebook', price: 3500.00, stock: 10},
    {id:2, name: 'Smartphone', price: 2500.00, stock: 20},
    {id:3, name: 'Tablet', price: 1500.00, stock: 15},
];
// Função para buscar todos os produtos
const findAll = () => {
    return products;
}

// Função para buscar um produto pelo ID
const findById = (id) => {
    return products.find(products => products.id === id);
}

//função para buscar um produto pelo nome
const findByName = (nome) => {
    return products.find(products => products.name.toLowerCase() === nome.toLowerCase());
}

//função para adicionar um novo produto 
const create = (newProduct) => {
    const newId = products.length > 0 ? products[products.length -1].id + 1 : 1;
    const productWithId = {id: newId, ...newProduct};
    products.push(productWithId);
    return productWithId;
}

//função para atualizar um produto
const update = (id, updatedProduct) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            products[i] = {id, ...updatedProduct};
            return products;
        }
    }
    return null;
}



//função para deletar um produto
const remove = (id) => {
    const index = products.findIndex(products => products.id === id);
    if (index !== -1) {
        const deletedProduct = products.splice(index, 1);
        return deletedProduct;
    }
    return null;
}

//exportar as funções 
module.exports = {
    findAll,
    findById,
    findByName,
    update,
    remove,
    create
}