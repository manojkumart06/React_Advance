const express = require("express");
const cors = require("cors");
const todoRoutes = require("./todoRoutes");

const server = express();

// Enable CORS for all routes
server.use(cors());

// Define routes
server.use("/api/todos/", todoRoutes.router);

server.get("/", (req, res) => {
  res.send("Welcome to Utility api");
});

const PORT = 4100;
server.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
