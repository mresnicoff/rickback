const { router } = require("../routes/index");
const express = require("express");
const cors = require("cors");
const server = express();
const PORT = require("../config.js");
server.use(cors());
server.use(express.json());
server.use("/rickandmorty/", router);

server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});

module.exports = { server };
