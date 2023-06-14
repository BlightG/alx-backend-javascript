const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should check the usage of the utils function', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    assert.equal(spy.called, true);
    assert.equal(spy.calledWith('SUM', 100, 20), true)
    spy.restore();
  });
});
