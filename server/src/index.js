const server = require("./app");
const PORT = 3001;
const { conn } = require('./DB_connection');

//* Conexión a la base de datos Sequelize a la base de datos:

conn.sync({ force: false })// esto retorna una promesa que se resuelve cuando termina la sincronización
   .then(() => {          // reinicia toda la base de datos y la sincroniza de nuevo si esta en TRUE
      server.listen(PORT, () => {
         console.log('Server raised in port: ' + PORT);
      });
   })
   .catch((error) => console.log(error.message));
