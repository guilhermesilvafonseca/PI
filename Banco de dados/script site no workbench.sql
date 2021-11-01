create table usuario (
idUsuario int primary key auto_increment
,nome varchar (100)
,login varchar(20)
,email varchar(100)
,senha varchar(20)
);

create table favoritos (
idFavoritos int primary key auto_increment
,genero varchar (20)
,artista varchar (20)
,musica varchar (20)
);

alter table favoritos add column fkUsuario int;
alter table favoritos add foreign key (fkUsuario) references usuario (idUsuario);

 SELECT sum(genero = '1') samba,
            sum(genero = '2') funk, 
                sum(genero = '3') trap,
                    sum(genero = '4') rap,
						sum(genero = '5') pagode,
							sum(genero = '6') romantica,
								sum(genero = '7') rock,
									sum(genero = '8') rap_geek,
										sum(genero = '9') sertanejo
														FROM favoritos;


select * from favoritos;
select * from usuario;

