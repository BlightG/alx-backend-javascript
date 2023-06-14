const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should check the usage of the utils function', () => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);
    const spy = sinon.spy(console, 'log')
    assert.equal(Utils.calculateNumber('SUM', 10, 100), 10)
    sinon.assert.calledWith(stub, 'SUM', 10, 100);
    sendPaymentRequestToApi(10, 100)
    sinon.assert.calledWith(spy, 'The total is: 10');
    spy.restore();
    stub.restore();
  });
});
