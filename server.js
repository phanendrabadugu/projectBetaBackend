// server.js

const express = require('express');
const cors = require('cors')
require('dotenv').config();
const connectDB = require('./config/db');
const restaurantRoute = require('./routes/restaurantRoutes');
const jobSearchRoutes = require('./routes/jobSearchRoutes');

const app = express();

app.use(cors())
app.use(express.json());


app.use('/api/restaurants', restaurantRoute);
app.use('/api/jobSearch', jobSearchRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

connectDB();






