const {Favorite} = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const {id, name, origin, status, image, species, gender} = req.body;
        if(id && name && origin && status && image && species && gender){
            await Favorite.findOrCreate({
                where: {id, name, origin, status, image, species, gender} //busca si ya existe el personaje
            }); // tambien puede ser el where: req.body para usar menos codigo.
            const allFavs = await Favorite.findAll();
            return res.status(200).json(allFavs);
        }
        return res.status(401).send('Faltan datos');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};


module.exports = postFav;