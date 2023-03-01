const fs = require("fs");

const deleteFavorite = (req, res) => {
  var usersObject;
  var thisuser;
  const { id, user } = req.query;
  console.log(id);
  var idInArray;
  fs.readFile("./src/db.json", "utf8", (err, usersString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      usersObject = JSON.parse(usersString);
      for (let i = 0; i < usersObject.length; i++) {
        if (usersObject[i].username === user) {
          thisuser = i;
        }
      }
      for (let j = 0; j < usersObject[thisuser].favorites.length; j++) {
        console.log(id, usersObject[thisuser].favorites[j].id);
        if (usersObject[thisuser].favorites[j].id == id) {
          usersObject[thisuser].favorites.splice(j, 1);
        }
      }

      const newUserString = JSON.stringify(usersObject);
      fs.writeFile("./src/db.json", newUserString, function (err) {
        if (err) throw err;
        console.log("Saved!");
      });
      res.status(200).json(usersObject[thisuser].favorites);
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
};

const postFavorites = (req, res) => {
  var usersObject;
  var thisuser;
  const character = req.body;

  fs.readFile("./src/db.json", "utf8", (err, usersString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      usersObject = JSON.parse(usersString);
      for (let i = 0; i < usersObject.length; i++) {
        if (usersObject[i].username === character.user) {
          thisuser = i;
        }
      }

      if (character) {
        console.log(usersObject[thisuser]);

        usersObject[thisuser].favorites.push(character);
        const newUserString = JSON.stringify(usersObject);
        fs.writeFile("./src/db.json", newUserString, function (err) {
          if (err) throw err;
          console.log("Saved!");
        });
      }
      res.status(200).json(usersObject[thisuser].favorites);
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
};

const getFavorites = (req, res) => {
  const { id, user } = req.query;
  console.log(id, user);
  try {
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.deleteFavorite = deleteFavorite;
exports.postFavorites = postFavorites;
exports.getFavorites = getFavorites;
