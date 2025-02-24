const express = require('express');
const morgan = require('morgan');
const app = express();
const routerHandler = require('./routes');

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

app.use('/api', routerHandler);

// Example route definitions
app.post('/api/register', (req, res) => {
  // Handle user registration
});

// app.post('/api/login', (req, res) => {
//   // Handle user login
// });

// app.get('/api/users/:id', (req, res) => {
//   // Get user profile by ID
// });

// app.put('/api/users/:id', (req, res) => {
//   // Update user profile by ID
// });

// app.delete('/api/users/:id', (req, res) => {
//   // Delete user profile by ID
// });

// app.get('/api/data', (req, res) => {
//   // Get all data entries
// });

// app.post('/api/data', (req, res) => {
//   // Create a new data entry
// });

// app.get('/api/data/:id', (req, res) => {
//   // Get a specific data entry by ID
// });

// app.put('/api/data/:id', (req, res) => {
//   // Update a specific data entry by ID
// });

// app.delete('/api/data/:id', (req, res) => {
//   // Delete a specific data entry by ID
// });

module.exports = app;