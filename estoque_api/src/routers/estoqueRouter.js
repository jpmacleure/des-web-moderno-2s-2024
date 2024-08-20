const express = require('express');
const router = express.Router();

const estoqueController = require('../controllers/estoqueController');

/** Associa uma rota a uma função da controller */
router.get('/api/produtos', estoqueController.getProdutos);
router.post('/api/produto/cadastrar', estoqueController.postCadastrarProduto);

module.exports = router;