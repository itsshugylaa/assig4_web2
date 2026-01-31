const router = require("express").Router()
const auth = require("../middleware/authMiddleware")
const admin = require("../middleware/adminMiddleware")
const controller = require("../controllers/tripController")

router.get("/", controller.getTrips)
router.post("/", auth, admin, controller.createTrip)
router.put("/:id", auth, admin, controller.updateTrip)
router.delete("/:id", auth, admin, controller.deleteTrip)

module.exports = router