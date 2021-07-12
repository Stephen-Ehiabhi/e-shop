const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const config = require("./config");

const server = express();

//server port
dotenv.config();
const PORT = 8888;
const URI = config.URI;

//loading route files to the server
const Products = require("./routes/Products");
const Users = require("./routes/Users");

//route middleware
server.use("/api", Products);
server.use("/api", Users);

server.get("/", (req, res) => {
  console.log("Welcome to e-shop");
});

//connecting the app to a db and running the server simultaneously
mongoose.connect(
  URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) console.log(`Error connecting to db = ${err}`);
    else
      server.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
      });
  }
);
