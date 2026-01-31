require("dotenv").config()
const express = require("express")
const path = require("path")
const connectDB = require("./config/db")

const app = express()

connectDB()

app.use(express.json())

app.use(express.static(path.join(__dirname, "frontend")))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "auth.html"))
})

app.use("/auth", require("./routes/authRoutes"))
app.use("/trips", require("./routes/tripRoutes"))
app.use("/bookings", require("./routes/bookingRoutes"))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})