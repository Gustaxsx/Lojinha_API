const clientModel = require('../model/clientModel');

// Metodo do controlador para listar todos os clientes
const getAllClient = (req, res) => {
    const client = clientModel.findAll();
    res.status(200).json(client);
}

// Metodo do controlador para listar um cliente pelo ID
const getClientById = (req, res) => {

    // Pegar o ID da requisição
    const id = parseInt(req.params.id);

    // Chamando o método findAllClientsById
    const client = clientModel.findById(id);

    // Verificando se o cliente existe
    if (client) {
        res.status(200).json(client);
    } else {
        res.status(404).json({message: 'Cliente não encontrado'});
    }
}

//Metodo para atualizar um cliente
const updateClient = (req, res) => {
    // Pegar o ID da requisição
    const id = parseInt(req.params.id);
    // Pegar os dados atualizados do cliente do corpo da requisição
    const {name, phone, city} = req.body;
    const update123 = clientModel.update(id, {name, phone, city}) 
    res.status(200).json(update123)
 
};

 

//metodo para deletar um cliente
const deleteClient = (req, res) => {
    // Pegar o ID da requisição
    const id = parseInt(req.params.id);

    // Chamando o método remove
    const deletedClient = clientModel.remove(id);

    // Verificando se o cliente existe
    if (deletedClient) {
        res.status(200).json({message: 'Cliente deletado com sucesso'});
    } else {
        res.status(404).json({message: 'Cliente não encontrado'});
    }
}



// Metodo do controlador para criar um novo cliente
const createClient = (req, res) => {

    // Pegar os dados do cliente do corpo da requisição
    const newClient = req.body;

    // Validar os dados do cliente
    if (!newClient.name || !newClient.phone || !newClient.city) {
        return res.status(400).json({message: 'Dados do cliente incompletos'});
    }

    // Chamando o método create
    const createdClient = clientModel.create(newClient);
    res.status(201).json(createdClient);
}

module.exports = {
    getAllClient,
    getClientById,
    createClient,
    updateClient,
    deleteClient
};