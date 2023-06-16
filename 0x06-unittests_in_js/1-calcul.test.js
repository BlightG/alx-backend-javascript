const assert = require('assert');
const calculateNumber = require('./1-calcul')

describe('test the calculatenumber function', () => {
  it('should test the SUM type', () => {
    assert.equal(calculateNumber('SUM', 1, 2), 3);
    assert.equal(calculateNumber('SUM', 1.4, 2.4), 3);
    assert.equal(calculateNumber('SUM', 0.8, 1.8), 3);
    assert.equal(calculateNumber('SUM', 0.5, 1.5), 3);
  });

  it('should test the SUBTRACT type', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 2), -1);
    assert.equal(calculateNumber('SUBTRACT', 1.4, 2.4), -1);
    assert.equal(calculateNumber('SUBTRACT', 0.8, 1.8), -1);
    assert.equal(calculateNumber('SUBTRACT', 0.5, 1.5), -1);
  });

  it('should test the DIVIDE type', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 2), 0.5);
    assert.equal(calculateNumber('DIVIDE', 1.4, 2.4), 0.5);
    assert.equal(calculateNumber('DIVIDE', 0.8, 1.8), 0.5);
    assert.equal(calculateNumber('DIVIDE', 0.5, 1.5), 0.5);
    assert.equal(calculateNumber('DIVIDE', 2, 0.4), 'Error');
  });
});
