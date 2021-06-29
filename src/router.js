const express = require('express');
const fetchFakeSample = require('./middlewares/fetchFakeSample');
const sampleController = require('./sample/sample.controller');

const router = express.Router();

router.get('/', fetchFakeSample, sampleController.getList);

module.exports = router;
