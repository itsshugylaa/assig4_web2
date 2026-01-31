const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip"
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: "confirmed"
  }
})

module.exports = mongoose.model("Booking", bookingSchema)