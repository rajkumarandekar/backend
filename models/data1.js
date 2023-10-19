const mongoose = require("mongoose");

const dataSchema1 = new mongoose.Schema({
  name1: String,
  email1: String,
  requirement1: String,
  role1: String,
  pdf1: String, // You can store the file path or a reference to the uploaded PDF here.
});

module.exports = mongoose.model("Data1", dataSchema1);
