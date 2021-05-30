CREATE TABLE usuario
(
    idUsuario INT PRIMARY KEY IDENTITY (1,1)
    ,
    nome VARCHAR(100)
    ,
    login VARCHAR (20)
    ,
    email VARCHAR(150)
    ,
    senha VARCHAR(20)
);

create table favoritos
(
    idFavoritos int PRIMARY KEY IDENTITY (1,1)
,
    genero int
,
    artista varchar (50)
,
    musica varchar (50)
,
    fkUsuario INT
,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);


SELECT genero, sum(genero) samba,
    sum(genero) funk,
    sum(genero) trap,
    sum(genero) rap,
    sum(genero) pagode,
    sum(genero) romantica,
    sum(genero) rock,
    sum(genero) rap_geek,
    sum(genero) sertanejo
FROM favoritos
GROUP BY genero;






SELECT *
FROM usuario;
SELECT *
FROM favoritos;




-- DROP TABLE usuario;
-- DROP TABLE favoritos;










