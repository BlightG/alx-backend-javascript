const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai')

describe('test the calculatenumber function', () => {
  it('should test the SUM type', () => {
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    expect(calculateNumber('SUM', 1.4, 2.4)).to.equal(3);
    expect(calculateNumber('SUM', 0.8, 1.8)).to.equal(3);
    expect(calculateNumber('SUM', 0.5, 1.5)).to.equal(3);
  });

  it('should test the SUM type', () => {
    expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 1.4, 2.4)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 0.8, 1.8)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 0.5, 1.5)).to.equal(-1);
  });

  it('should test the DIVIDE type', () => {
    expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 1.4, 2.4)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 0.8, 1.8)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 0.5, 1.5)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 2, 0.4)).to.equal('Error');
  });
});
