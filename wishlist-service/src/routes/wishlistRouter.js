// wishlistRoutes.js
const express = require('express');
const wishlistController = require('../controllers/wishlistController');

const router = express.Router();

router.post('/add', wishlistController.addToWishlist);
router.get('/', wishlistController.getWishlist);
router.delete('/:id', wishlistController.removeFromWishlist);

module.exports = router;
