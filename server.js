require('dotenv').config();
const app = require('./app');
const connectDB = require('./app/config/db');

connectDB();

// This implementation fulfills the requirements by:

// - **Integrating with a public geospatial API** (OpenWeatherMap).
// - **Connecting to MongoDB** and defining a schema.
// - **Implementing RESTful routes** with separate endpoints for fetching external data, storing data, retrieving all stored data, and retrieving a specific record.
// - **Including error handling** for both external API calls and database operations.
// - **Providing comprehensive documentation** in the README.

// You can adapt the schema and endpoints as needed based on the specific data structure of the API you choose or any additional business logic.



// (Optional Bonus) Rate limiting middleware example:
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
 windowMs: 15 * 60 * 1000, // 15 minutes
max: 100 // limit each IP to 100 requests per window
 });
app.use(limiter);


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
