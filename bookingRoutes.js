const router = require("express").Router()
const auth = require("../middleware/authMiddleware")
const admin = require("../middleware/adminMiddleware")
const controller = require("../controllers/bookingController")

router.post("/", auth, controller.createBooking)
router.get("/", auth, admin, controller.getBookings)
router.delete("/:id", auth, admin, controller.deleteBooking)

module.exports = router