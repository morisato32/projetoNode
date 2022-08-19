// Importar o express
const express = require('express');
const pessoasController = require('../controllers/pessoasController');

// Criar o roteador
const router = express.Router();

// Definir/criar as rotas no roteador
router.get('/',pessoasController.listarPessoas)
    
router.get('/:id', pessoasController.mostrarPessoa)



   

// Exportar esse roteador
module.exports = router;

