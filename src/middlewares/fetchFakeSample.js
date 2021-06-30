const catchAsync = require('../utils/catchAsync');
const sampleService = require('../sample/sample.service');
const FakeSampleJSON = require('../../FakeSample.json');

const fetchFakeSample = async (req, res, next) => {
  if(await sampleService.putSample(FakeSampleJSON)) {
    console.log('FakeSample saved in the database!');
  }
  next();
}

module.exports = fetchFakeSample;
