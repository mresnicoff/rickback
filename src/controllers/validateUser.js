const fs = require("fs");
var usersObject;

const validateMyUser = (req, res) => {
  const myUser = req.body;
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
    const filteredUser = usersObject.find(
      (user) => user.username === myUser.username
    );
    if (filteredUser) {
      if (filteredUser.password === myUser.password) {
        return res.status(200).json(filteredUser);
      } else {
        myUser.username = "";
        return res.status(200).json(myUser);
      }
    } else {
      myUser.username = "";
      return res.status(200).json(myUser);
    }
  });
};

const signupUsers = (req, res) => {
  const myUser = req.body;
  console.log(myUser);
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
    const newUser = {
      username: myUser.username,
      password: myUser.password,
      favorites: [],
    };
    usersObject.push(newUser);
    const newUserString = JSON.stringify(usersObject);
    fs.writeFile("./src/db.json", newUserString, function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
    return res.status(200).json({ usename: "" });
  });
};

exports.validateMyUser = validateMyUser;
exports.signupUsers = signupUsers;
