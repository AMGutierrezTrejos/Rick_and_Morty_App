const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
         validate:{
            isEmail: true, // Validar que sea un correo con @
         }
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, { timestamps: false });
};
