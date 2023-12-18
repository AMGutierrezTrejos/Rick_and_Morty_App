const {User} = require('../DB_connection');

const login = async (req, res) => {
  try{
    const {email, password} = req.body;
    if(email && password){
      const actualUser = await User.findOne({
        where: {email: email}
      });
      if(actualUser){
        if(actualUser.password === password){
          return res.status(200).json({
            access: true,
            actualUser: actualUser.id
          })
        }
        return res.status(403).send('Contraseña incorrecta');
      }
      return res.status(404).send('Usuario no encontrado');
    }
    return res.status(400).send('Faltan datos');
  } catch (error){
    return res.status(500).send({error: error.message})
  }
}

module.exports = login;

















// const users = require("../utils/users.js");

// module.exports = (req, res) => {
//   //* req.query = { email: "mail@.com", password:"1234" }
//   const { email, password } = req.query;
//   let access = false;

//   users.forEach((user) => {
//     if(user.email === email && user.password === password) access = true;
//     // console.log(typeof user.email)
//   });
//   // console.log(access);
//   //* users.some(callback);
//   return res.json({ access });
// };

/*
Este codigo es por si no quiero usar el forEach y usar el some
users.some(user => {
    if (user.email === email && user.password === password) {
        access = true;
        return true; // Termina el bucle al encontrar una coincidencia
    }
    return false; // Continúa buscando si no hay coincidencia
});
*/