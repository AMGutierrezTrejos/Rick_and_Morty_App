const router = require("express").Router();


const getCharById = require("../controllers/getCharById");


router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);


module.exports = router;