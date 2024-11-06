const express = require("express");
const router = express.Router();
const authorizeUser = require("../middleware/authorizeUser");
const {
  getUserBookings,
  getBookingDetails,
} = require("../controllers/dashboardController");

router.get("/bookings", authorizeUser, getUserBookings);
router.get("/bookings/:bookingId", authorizeUser, getBookingDetails);

module.exports = router;
