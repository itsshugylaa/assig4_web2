const Booking = require("../models/Booking")

exports.createBooking = async (req, res) => {
  const booking = await Booking.create({
    userId: req.user.id,
    tripId: req.body.tripId
  })
  res.json(booking)
}

exports.getBookings = async (req, res) => {
  const bookings = await Booking.find().populate("userId tripId")
  res.json(bookings)
}

exports.deleteBooking = async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id)
  res.json({ message: "Booking deleted" })
}