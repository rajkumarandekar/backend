const express = require("express");
const router = express.Router();
const multer = require("multer");
const Data = require("../models/data");
const Data1 = require("../models/data1");

// Configure multer storage for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the directory where uploaded PDFs will be stored
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Define the file name for the uploaded PDF
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Route for submitting the first form contact us
router.post("/submit", async (req, res) => {
  const formData = req.body;
  const newData = new Data({
    name: formData.name,
    contactNumber: formData.contactNumber,
    selectedCheckboxes: formData.selectedCheckboxes,
    email: formData.email,
    requirement: formData.requirement,
  });

  try {
    const savedData = await newData.save();
    res.status(200).send("Data saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving data");
  }
});

// Route for submitting the second form with file upload carrer
router.post("/submitresume", upload.single("pdf1"), async (req, res) => {
  const formData1 = req.body;
  const newData1 = new Data1({
    name1: formData1.name1,
    email1: formData1.email1,
    requirement1: formData1.requirement1,
    role1: formData1.role1,
    pdf1: req.file.path, // Store the file path from req.file
  });

  try {
    const savedData = await newData1.save();
    res.status(200).send("Data saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving data");
  }
});

module.exports = router;
