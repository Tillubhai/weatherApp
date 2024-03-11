// wishlistController.js
const City = require('../models/cityModal');

exports.addToWishlist = async (req, res) => {
    try {
        const { city } = req.body;
        const newCity = await City.create({ name: city });
        res.status(201).json(newCity);
    } catch (error) {
        console.error('Error adding city to wishlist:', error);
        res.status(500).json({ error: 'Failed to add city to wishlist' });
    }
};

exports.getWishlist = async (req, res) => {
    try {
        const cities = await City.find();
        res.status(200).json(cities);
    } catch (error) {
        console.error('Error fetching wishlist:', error);
        res.status(500).json({ error: 'Failed to fetch wishlist' });
    }
};

exports.removeFromWishlist = async (req, res) => {
    try {
        const { id } = req.params;
        await City.findByIdAndDelete(id);
        res.status(200).json({ message: 'City removed from wishlist' });
    } catch (error) {
        console.error('Error removing city from wishlist:', error);
        res.status(500).json({ error: 'Failed to remove city from wishlist' });
    }
};
