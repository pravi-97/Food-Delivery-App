const express = require('express');
const { getPrice } = require('../controllers/controller')
const router = express.Router();

router.route('/').get(getPrice);

module.exports = router;