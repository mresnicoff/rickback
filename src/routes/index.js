const { Router } = require("express");
// Controllers
const getCharById = require("../controllers/getCharById.js");
const getCharDetail = require("../controllers/getCharDetail.js");
const { getFavorites } = require("../controllers/deleteFavorite.js");
const { postFavorites } = require("../controllers/deleteFavorite.js");
const { deleteFavorite } = require("../controllers/deleteFavorite.js");
const { validateMyUser } = require("../controllers/validateUser.js");
const { signupUsers } = require("../controllers/validateUser.js");
const { saludo } = require("../controllers/validateUser.js");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.post("/fav/", postFavorites);
router.get("/fav", getFavorites);
router.post("/users", validateMyUser);
router.post("/newusers", signupUsers);
router.delete("/fav", deleteFavorite);
router.get("/", saludo);

module.exports = { router };
