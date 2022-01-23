const express = require("express");
const router = express.Router();
const {
  getRoomsData,
} = require("../controller/hotelController");

router.get("/rooms", getRoomsData);
// router.get("/cart/:id", getUserCart);

module.exports = router;
