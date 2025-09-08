//simulação de um banco de dados em memoria para clientes
let client = [
  {id:1, name: 'Paulo', phone: '99999-9999', city: 'São Paulo'},
  {id:2, name: 'Ana', phone: '88888-8888', city: 'Rio de Janeiro'},
  {id:3, name: 'Maria', phone: '77777-7777', city: 'Belo Horizonte'},
];

// Função para buscar todos os clientes
const findAll = () => {
  return client;
}

// Função para buscar um cliente pelo ID
const findById = (id) => {
    return client.find(clientes => clientes.id === id);
}

//função para buscar um cliente pelo nome 
const findByName = (name) => {
    return client.find(clientes => client.name.toLowerCase() === name.toLowerCase());
}

// Função para adicionar um novo cliente 
const create = (newClient) => {
    const newID = client.length > 0 ? client[client.length -1].id = 1 : 1;
    const clientWithId = { id: newID, ...newClient};
    client.push(clientWithId);
    return clientWithId;
}

// função para atualizar um cliente
const update = (id, updatedClient) => {

    for (let i = 0; i < client.length; i++) {
        if (client[i].id === id) {
            client[i] = {id, ...updatedClient};
            return client;
        }
    }
    return null;
}

// função para deletar um cliente
const remove = (id) => {
    const index = client.findIndex(client => client.id === id);
    if (index !== -1) {
        const deletedClient = client.splice(index, 1);
        return deletedClient;
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