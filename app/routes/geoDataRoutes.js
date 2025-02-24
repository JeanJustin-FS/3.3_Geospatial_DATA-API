const express = require("express");
const {
  getGeoDataFromAPI,
  saveGeoData,
  getAllGeoData,
  getGeoDataById,} = require("../controllers/geoDataController");

const router = express.Router();

router.get("/", getGeoDataFromAPI);
router.post("/", saveGeoData);
router.get("/all", getAllGeoData);
router.put("/:id", getGeoDataById);
module.exports = router;
