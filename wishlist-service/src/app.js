// app.js
const express = require('express');
const mongoose = require('mongoose');
const wishlistRoutes = require('./routes/wishlistRouter');

const app = express();
const PORT = process.env.PORT || 8000;
require('dotenv').config();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// Routes
app.use('/wishlist', wishlistRoutes);

// Server
app.listen(PORT, () => console.log(`Wishlist service running on port ${PORT}`));

module.exports = app;
