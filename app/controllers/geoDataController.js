const fetch = require("node-fetch");
const GeoData = require("../models/GeoData");

const API_KEY = process.env.API_KEY;
const API_URL = "https://previous-runs-api.open-meteo.com/v1/forecast?";

const getGeoDataFromAPI = async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) {
      return res.status(400).json({ error: "Latitude and Longitude are required" });
    }

    const response = await fetch(`${API_URL}?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&apikey=${API_KEY}`);
    const data = await response.json();

    return res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch geospatial data" });
  }
};

const saveGeoData = async (req, res) => {
  try {
    const { lat, lon, data } = req.body;
    if (!lat || !lon || !data) {
      return res.status(400).json({ error: "Latitude, Longitude, and Data are required" });
    }

    const newGeoData = new GeoData({
      location: { type: "Point", coordinates: [lon, lat] },
      data,
    });

    const savedData = await newGeoData.save();
    res.status(201).json({ message: "Data saved successfully", id: savedData._id });
  } catch (error) {
    res.status(500).json({ error: "Error saving data to MongoDB" });
  }
};

const getAllGeoData = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    let filter = {};

    if (startDate && endDate) {
      filter.createdAt = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }

    const data = await GeoData.find(filter);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stored geospatial data" });
  }
};

const getGeoDataById = async (req, res) => {
  try {
    const geoData = await GeoData.findById(req.params.id);
    if (!geoData) return res.status(404).json({ error: "Data not found" });

    res.json(geoData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching geospatial data" });
  }
};

module.exports = {
  getGeoDataFromAPI,
  saveGeoData,
  getAllGeoData,
  getGeoDataById,
}