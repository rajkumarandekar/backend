const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const submitRoutes = require("./routes/submitRoutes");
require("dotenv").config();
const cors = require("cors");

const app = express();

const port = process.env.PORT; // Use port 4000 as a default
const mongodbUri = process.env.MONGO_URI;

mongoose
  .connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors("http://localhost:3004"));

// Mount the routes
app.use("/", submitRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
