const mongoose = require("mongoose");

const reportsSchema = mongoose.Schema({
  category: String,
  subcategory: String,
  author: String,
  year: String,
  imgsrc: String,
});

module.exports = mongoose.model("reports", reportsSchema);
