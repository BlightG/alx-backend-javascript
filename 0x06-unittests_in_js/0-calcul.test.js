const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('calculate number', () => {
  it('should test the calculateNUmber function', () => {
    assert.equal(calculateNumber(1, 2), 3);
    assert.equal(calculateNumber(1.4, 2.4), 3);
    assert.equal(calculateNumber(0.8, 1.8), 3);
    assert.equal(calculateNumber(0.5, 1.5), 3);
  });
});
