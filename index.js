const express = require("express");
const colors = require("colors");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// MongoDB MiddleWare
app.use(express.json());
app.use(cors());

// DB Connect
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB Connect Successfully".green.inverse);
  })
  .catch((err) => {
    console.log(`${err}`.red.inverse);
  });




// Server Run
app.listen(port, () => {
  console.log("Server on Running".yellow.inverse);
});
