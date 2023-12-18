require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/User');


// Aqui va la configuracion de la base de datos de sequelize.
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/rickandmorty`,
    { logging: false, native: false }
    //* el logging es para que no se muestren las consultas en la consola.
    //* el native es para que sequelize no cree tablas automaticamente.
);

//! En esta parte se crean los ejecutables de las funciones de tablas de la base de datos.
//! Ahora sequelize es un objeto que tiene a models, que es un objeto que tiene a cada una de las tablas.
//! sequelize = { models: { Favorite: Favorite, User: User } }
FavoriteModel(sequelize);
UserModel(sequelize);

//!Aqui se hace la relacion entre tablas(modelos).
const { User, Favorite } = sequelize.models;
//esto es lo mismo que "const Favorite = sequelize.models.Favorite;" pero se un modo simple de hacerlo.

// User N:N Favorite
User.belongsToMany(Favorite, { through: "user_favorite" });
// Favorite N:N User
Favorite.belongsToMany(User, { through: "user_favorite" });



module.exports = {
    User,
    Favorite,
    conn: sequelize,
}