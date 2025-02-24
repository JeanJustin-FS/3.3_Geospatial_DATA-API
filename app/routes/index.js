const express = require('express');
const router = express.Router();
const geoDataRoutes = require('./geoDataRoutes');


router.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});  

router.use('/geodata', geoDataRoutes);

module.exports = router;