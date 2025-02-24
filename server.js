require('dotenv').config();
const express = require('express');
const connectDB = require('./app/config/db');
const geoDataRoutes = require('./app/routes/geoData');

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

// (Optional Bonus) Rate limiting middleware example:
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
 windowMs: 15 * 60 * 1000, // 15 minutes
max: 100 // limit each IP to 100 requests per window
 });
pp.use(limiter);

// Use the geo-data routes
app.use('/api/geo-data', geoDataRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
