// server.js

const express = require('express');
const cors = require('cors')
require('dotenv').config();
const connectDB = require('./config/db');
const restaurantRoutes = require('./routes/restaurantRoutes');
const jobSearchRoutes = require('./routes/jobSearchRoutes');

const app = express();

app.use(cors({ origin: 'https://www.vingtheures.com' })); // Replace with your Netlify URL
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the backend API!');
});



app.use('/api/restaurants', restaurantRoutes);
app.use('/api/jobSearch', jobSearchRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

connectDB();






