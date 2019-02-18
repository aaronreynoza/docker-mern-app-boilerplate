const express = require('express');
const router = express.Router();
const item = require('../controllers/example');

router.get('/', item.getFiles);

router.post('/', item.postFile);

module.exports = router;
