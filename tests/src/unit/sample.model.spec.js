const Sample = require('../../../src/sample/sample.model');
const FakeSample = require('../../../FakeSample.json');

describe('Sample Model', () => {
  it('validates a valid Sample', () => {
    expect(Sample.validate(FakeSample)).resolves.toBeUndefined();
  });
})
