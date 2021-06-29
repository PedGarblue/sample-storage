const Sample = require('./sample.model');

const getList = async () => {
  const samples = await Sample.find({});
  return samples;
}

const putSample = async sample => {
  if(!await Sample.exists({ SampleNumber: sample.SampleNumber })) {
    const newSample = await Sample.create(sample);
    return newSample;
  }
  return false;
}

module.exports = {
  getList,
  putSample,
};
