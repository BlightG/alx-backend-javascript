const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('testing of a promise', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        assert.deepEqual(result, { data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  })
});
