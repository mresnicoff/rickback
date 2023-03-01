const { router } = require("../routes/index");
const express = require("express");
const cors = require("cors");
const server = express();
const PORT = process.env.PORT || 3001;
server.use(cors());
server.use(express.json());
server.use("/", router);
var a = 1;
a = a + 1;

server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});

module.exports = { server };
