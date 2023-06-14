const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(console, 'log')
  })

  afterEach(() => {
    spy.restore();
  })

  it('should check the consloe logs 120', () => {
    sendPaymentRequestToApi(20, 100);
    sinon.assert.calledWith(spy, 'The total is: 120');
    assert.equal(spy.calledOnce, true);
  });

  it('should check the consloe logs 20', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(spy, 'The total is: 20');
    assert.equal(spy.calledOnce, true);
  });

});
