const express = require('express');
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/cart', shopController.getCart);

// Other routes...

module.exports = router;
