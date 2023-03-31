const { router } = require("../routes/index");
const express = require("express");
const cors = require("cors");
const server = express();
const PORT = process.env.PORT || 3001;
server.use(cors({
  origin: 'https://mresnicoff.github.io'
}));
server.use(express.json());
server.use("/", router);


server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});

module.exports = { server };
