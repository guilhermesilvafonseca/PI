var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;
var Favorito = require('../models').Favorito;
var env = process.env.NODE_ENV || 'development';

let sessoes = [];

/* Recuperar usuário por login e senha */
router.post('/autenticar', function (req, res, next) {
	console.log('Recuperando usuário por login e senha');

	var login = req.body.login; // depois de .body, use o nome (name) do campo em seu formulário de login
	var senha = req.body.senha; // depois de .body, use o nome (name) do campo em seu formulário de login	

	let instrucaoSql = `select * from usuario where login ='${login}' and senha = '${senha}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);

		if (resultado.length == 1) {
			sessoes.push(resultado[0].dataValues.login);
			console.log('sessoes: ', sessoes);
			res.json(resultado[0]);
		} else if (resultado.length == 0) {
			res.status(403).send('login e/ou senha inválido(s)');
		} else {
			res.status(403).send('Mais de um usuário com o mesmo login e senha!');
		}

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

/* Cadastrar usuário */
router.post('/cadastrar', function (req, res, next) {
	console.log('Criando um usuário');

	Usuario.create({
		nome: req.body.nome,
		login: req.body.login,
		senha: req.body.senha,
		email: req.body.email
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
		res.send(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});


/* Verificação de usuário */
router.get('/sessao/:login', function (req, res, next) {
	let login = req.params.login;
	console.log(`Verificando se o usuário ${login} tem sessão`);

	let tem_sessao = false;
	for (let u = 0; u < sessoes.length; u++) {
		if (sessoes[u] == login) {
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${login} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
	}

});


/* Logoff de usuário */
router.get('/sair/:login', function (req, res, next) {
	let login = req.params.login;
	console.log(`Finalizando a sessão do usuário ${login}`);
	let nova_sessoes = []
	for (let u = 0; u < sessoes.length; u++) {
		if (sessoes[u] != login) {
			nova_sessoes.push(sessoes[u]);
		}
	}
	sessoes = nova_sessoes;
	res.send(`Sessão do usuário ${login} finalizada com sucesso!`);
});


/* Recuperar todos os usuários */
router.get('/', function (req, res, next) {
	console.log('Recuperando todos os usuários');
	Usuario.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});


router.post('/favoritar/:idUsuario', function (req, res, next) {

	let idUsuario = req.params.idUsuario;

	console.log("Iniciando Publicação..." + idUsuario)

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



router.get("/sendData", (request, response) => {

	var instrucaoSql = "";

	if (env == "production") {

		instrucaoSql = ``;
	}

	sequelize.query(instrucaoSql, {

	}).then(resultado => {
		console.log(`\n\nRegistro inserido com sucesso!\nO comando executado foi como abaixo:\n`);
		console.log(instrucaoSql)
		console.log(`\nFim do comando SQL executado.`);
		response.status(200).send("Dado inserido com sucesso.");
	}).catch(erro => {
		console.error(erro);
		response.status(500).send(erro.message);
	});
});

router.get('/estatistica', function (req, res, next) {

	console.log('\n')
	console.log('oi, to em estatistica');
	console.log('\n')

	let instrucaoSql = "";

	if (env == 'production') {

		console.log('\n')
		console.log('oi, entrei no dev');
		console.log('\n')

		instrucaoSql = ` SELECT (SELECT COUNT(genero) FROM favoritos WHERE genero = 1) samba,
		(SELECT COUNT(genero) FROM favoritos WHERE genero = 2) funk,
		(SELECT COUNT(genero) FROM favoritos WHERE genero = 3) trap,
		(SELECT COUNT(genero) FROM favoritos WHERE genero = 4) rap,
		(SELECT COUNT(genero) FROM favoritos WHERE genero = 5) pagode,
		(SELECT COUNT(genero) FROM favoritos WHERE genero = 6) romantica,
		(SELECT COUNT(genero) FROM favoritos WHERE genero = 7) rock,
		(SELECT COUNT(genero) FROM favoritos WHERE genero = 8) rap_geek,
		(SELECT COUNT(genero) FROM favoritos WHERE genero = 9) sertanejo;`;

// 		instrucaoSql = ` SELECT genero, sum(genero) samba,
//  sum(genero) funk, 
// 	 sum(genero) trap,
// 		 sum(genero) rap,
// 			 sum(genero) pagode,
// 				 sum(genero) romantica,
// 					 sum(genero) rock,
// 						 sum(genero) rap_geek,
// 							 sum(genero) sertanejo FROM favoritos GROUP BY genero;`;
		console.log('\n')

		console.log(instrucaoSql);
	}

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});

});

module.exports = router;
