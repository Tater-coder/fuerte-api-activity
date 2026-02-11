<<<<<<< HEAD
const apiRoutes = require('./src/routes/apiRoutes');
require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const app = express();
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

app.use(BASE_URI, apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});
=======
// server.js
require('dotenv').config();
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Load Config
const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

// Import Routes (We will create this later)
const apiRoutes = require('./src/routes/apiRoutes');
app.use(BASE_URI, apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});
>>>>>>> ce62fd17a920762a782d9b5b99cb1b56be496c09
