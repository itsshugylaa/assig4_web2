const mongoose = require("mongoose")

const tripSchema = new mongoose.Schema({
  title: String,
  destination: String,
  price: Number,
  duration: Number,
  description: String
})

module.exports = mongoose.model("Trip", tripSchema)