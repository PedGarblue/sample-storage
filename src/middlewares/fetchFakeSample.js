const catchAsync = require('../utils/catchAsync');
const sampleService = require('../sample/sample.service');
const FakeSampleJSON = require('../../FakeSample.json');
const config = require('../config');

const fetchFakeSample = async (req, res, next) => {
  if(await sampleService.putSample(FakeSampleJSON)) {
    console.log('FakeSample saved in the database!')
    console.log(`Check in http://localhost:${config.port} to visualize`);
  }
  next();
}

module.exports = fetchFakeSample;
