const httpStatus = require('http-status');
const request = require('supertest');
const Sample = require('../../../src/sample/sample.model');
const app = require('../../../src/app');
const FakeSample = require('../../../FakeSample');
const setupTestDB = require('../utils/setupTestDB');

setupTestDB();

describe('Samples Routes', () => {
  describe('GET "/"', () => {
    it('return a list with FakeSample only', async () => {
      const res = await request(app)
        .get('/')
        .set({
          'Accept': 'application/json',
        })
        .send()
        .expect(httpStatus.OK);

      const body = res.body;
      expect(body).toBeInstanceOf(Array);
      expect(body).toHaveLength(1);
      expect(body[0]).toMatchObject(FakeSample);

      // should be created in the database
      const sampleDb = await Sample.find({ SampleNumber: FakeSample.SampleNumber });
      expect(sampleDb).toBeInstanceOf(Array);
      expect(sampleDb).toHaveLength(1);
      expect(sampleDb[0].toJSON()).toMatchObject(FakeSample);
    });
  })
})
