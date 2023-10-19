const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: String,
  contactNumber: String,
  selectedCheckboxes: [String],
  email: String,
  requirement: String,
});

module.exports = mongoose.model("Data", dataSchema);
