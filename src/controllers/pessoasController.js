const pessoas = require('../database/pessoas.json');

const pessoasController = {
    listarPessoas:(req,res) =>{
    // Enviar o array de pessoas para o cliente
    res.send(pessoas);

},
    mostrarPessoa:(req,res) =>{
        const id = req.params.id
        const pessoa = pessoas.find(p => p.id == id);
    
        // Retornar/enviar a pessoa encontrada ou uma mensagem: "Pessoa inexistente"
        if(pessoa == undefined){
            res.send("Pessoa inexistente");
        } else {
            res.send(pessoa);
        }
    
    }
}

module.exports = pessoasController