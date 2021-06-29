const httpMocks = require('node-mocks-http');
const Sample = require('../../../src/sample/sample.model');
const fetchFakeExample = require('../../../src/middlewares/fetchFakeSample');
const FakeSample = require('../../../FakeSample.json');
const setupTestDB = require('../utils/setupTestDB');

setupTestDB();

describe('fetchFakeExample Middleware', () =>{
  it('saves FakeSample.json if is not saved in the database', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const next = jest.fn();

    await expect(fetchFakeExample(req, res, next)).resolves.toBeUndefined();

    const FakeSampleDB = await Sample.find({ SampleNumber: FakeSample.SampleNumber }).exec();
    
    expect(FakeSampleDB).toBeDefined();
    expect(FakeSampleDB).toHaveLength(1);
    expect(FakeSampleDB[0].toJSON()).toMatchObject(FakeSample);
  });

  it('does nothing if FakeSample is already in the database', async () => {
    await Sample.insertMany([FakeSample]);
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const next = jest.fn();

    await expect(fetchFakeExample(req, res, next)).resolves.toBeUndefined();
    
    const FakeSampleDB = await Sample.find({ SampleNumber: FakeSample.SampleNumber }).exec();

    expect(FakeSampleDB).toBeDefined();
    expect(FakeSampleDB).toHaveLength(1);
    expect(FakeSampleDB[0].toJSON()).toMatchObject(FakeSample);
  });
});
