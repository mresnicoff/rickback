const favorites = require("../utils/favs");

const getFavorites = (req, res) => {
  res.status(200).json(favorites);
};

module.exports = getFavorites;
