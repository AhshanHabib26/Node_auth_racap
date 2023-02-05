const express = require("express");
const colors = require("colors");
const cors = require("cors");
const mongoose = require("mongoose");
const userHandler = require("./routers/userRouter");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// MongoDB MiddleWare
app.use(express.json());
app.use(cors());

// DB Connect
mongoose
  .set("strictQuery", false)
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB Connect Successfully".green.inverse);
  })
  .catch((err) => {
    console.log(`${err}`.red.inverse);
  });
  

// App API
app.use("/api/v1/user", userHandler);



// App Main Error Handler
app.use(errorHandler);

// Server Run
app.listen(port, () => {
  console.log("Server on Running".yellow.inverse);
});
