const Trip = require("../models/Trip")

exports.getTrips = async (req, res) => {
  const trips = await Trip.find()
  res.json(trips)
}

exports.createTrip = async (req, res) => {
  const trip = await Trip.create(req.body)
  res.json(trip)
}

exports.updateTrip = async (req, res) => {
  const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(trip)
}

exports.deleteTrip = async (req, res) => {
  await Trip.findByIdAndDelete(req.params.id)
  res.json({ message: "Trip deleted" })
}