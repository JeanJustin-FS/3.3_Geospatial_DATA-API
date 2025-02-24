const mongoose = require('mongoose');

const GeoDataSchema = new mongoose.Schema({
  name: String,
  coordinates: {
    type: [Number],
    index: '2dsphere'
  },
  weather: Object 
}, { timestamps: true });

module.exports = mongoose.model('geoData', GeoDataSchema);


