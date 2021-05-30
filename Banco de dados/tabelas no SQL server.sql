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


SELECT (SELECT COUNT(genero) FROM favoritos WHERE genero = 1) samba,
              (SELECT COUNT(genero) FROM favoritos WHERE genero = 2) funk,
              (SELECT COUNT(genero) FROM favoritos WHERE genero = 3) trap,
              (SELECT COUNT(genero) FROM favoritos WHERE genero = 4) rap,
              (SELECT COUNT(genero) FROM favoritos WHERE genero = 5) pagode,
              (SELECT COUNT(genero) FROM favoritos WHERE genero = 6) romantica,
              (SELECT COUNT(genero) FROM favoritos WHERE genero = 7) rock,
              (SELECT COUNT(genero) FROM favoritos WHERE genero = 8) rap_geek,
              (SELECT COUNT(genero) FROM favoritos WHERE genero = 9) sertanejo;





SELECT * FROM usuario;
SELECT * FROM favoritos;




-- DROP TABLE usuario;
-- DROP TABLE favoritos;










