CREATE TABLE usuario (
    idUsuario INT IDENTITY
    , nome VARCHAR(100)
    , login VARCHAR (20)
    , email VARCHAR(150)
    , senha VARCHAR(20)
);

create table favoritos (
idFavoritos int IDENTITY 
,genero varchar (20)
,artista varchar (20)
,musica varchar (20)
);

SELECT * FROM usuario;
SELECT * FROM favoritos;

