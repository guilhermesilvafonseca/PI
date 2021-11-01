var express = require('express');
var router = express.Router();
// var sequelize = require('../models').sequelize;
var Favorito = require('../models').Favorito;

/* ROTA QUE RECUPERA CRIA UMA PUBLICAÇÃO */
router.post('/favoritar/:idUsuario', function(req, res, next) {
    console.log("Iniciando Publicação...")
    
	let idUsuario = req.params.idUsuario;

    Favorito.create({
        genero: req.body.genero,
        artista: req.body.artista,
        musica: req.body.musica,
        fkUsuario: idUsuario
    }).then(resultado => {
        console.log("Cadastrado favoritos!!");
        res.send(resultado);
    }).catch(erro => {
        console.log('DEU UM ERRINHO')
        console.error(erro);
        res.status(500).send(erro.message);
    })
});

// /* ROTA QUE RECUPERA TODAS AS PUBLICAÇÕES */
// router.get('/favoritar', function(req, res, next) {
// 	console.log('Recuperando todas as publicações');
	
//     let instrucaoSql = `SELECT 
//     usuario.nome,
//     descricao
//     FROM publicacao
//     INNER JOIN usuario
//     ON Publicacao.fkUsuario = Usuario.id
//     ORDER BY publicacao.id DESC`;

// 	sequelize.query(instrucaoSql, {
// 		model: Favorito,
// 		mapToModel: true 
// 	})
// 	.then(resultado => {
// 		console.log(`Encontrados: ${resultado.length}`);
// 		res.json(resultado);
// 	}).catch(erro => {
// 		console.error(erro);
// 		res.status(500).send(erro.message);
// 	});
// });


/* ROTA QUE RECUPERA AS PUBLICAÇÕES DE UM USUÁRIO PELO ID */
// router.get('/favoritar:idUsuario', function(req, res, next) {
// 	console.log('Recuperando todas as publicações');
	
// 	var idUsuario = req.params.idUsuario;

//     let instrucaoSql = `SELECT 
//     usuario.nome,
//     descricao
//     FROM publicacao
//     INNER JOIN usuario
//     ON Publicacao.fkUsuario = Usuario.id
//     WHERE fkUsuario = ${idUsuario}
//     ORDER BY publicacao.id DESC`;

// 	sequelize.query(instrucaoSql, {
// 		model: Favorito,
// 		mapToModel: true 
// 	})
// 	.then(resultado => {
// 		console.log(`Encontrados: ${resultado.length}`);
// 		res.json(resultado);
// 	}).catch(erro => {
// 		console.error(erro);
// 		res.status(500).send(erro.message);
// 	});
// });

module.exports = router;
