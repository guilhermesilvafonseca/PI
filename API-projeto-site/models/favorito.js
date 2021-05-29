'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Favorito = sequelize.define('Favorito',{
		idFavoritos: {
			field: 'idFavoritos',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		genero: {
			field: 'genero',
			type: DataTypes.STRING,
			allowNull: false
		},
		artista: {
			field: 'artista',
			type: DataTypes.STRING,
			allowNull: false
		},
		musica: {
			field: 'musica',
			type: DataTypes.STRING,
			allowNull: false
		},
		fkUsuario: {
			field: 'fkUsuario',
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, 
	{
		tableName: 'favoritos', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Favorito;
};
