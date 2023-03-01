let favorites = require("../utils/favs");
var usersObject;
var thisuser;
const character = req.body;
const postFavorites = (req, res) => {
  fs.readFile("./src/db.json", "utf8", (err, usersString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      usersObject = JSON.parse(usersString);
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
  for (leti = 0; i < usersObject.length; i++) {
    if (usersObject[i].username === user) {
      thisuser = i;
    }
  }

  if (character) {
    favorites.push(character);
    usersObject[thisuser].favotites.push(character);
    const newUserString = JSON.stringify(usersObject);
    console.log(newUserString);
    fs.writeFile("./src/db.json", newUserString, function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  }
  res.status(200).json(favorites);
};

module.exports = postFavorites;
