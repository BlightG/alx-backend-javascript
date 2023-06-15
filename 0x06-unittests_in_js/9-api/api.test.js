const assert = require('assert');
const request = require('request');

describe('tests an express instance', () => {
  it('tests the GET /', (done) => {
    request('http://127.0.0.1:7865/', (error, response, body) => {
      assert.equal(response.statusCode, 200);
      assert.equal(body, 'Welcome to the payment system');
      done();
    });
  });

  it('tests the GET /cart', (done) => {
    request('http://127.0.0.1:7865/cart/12', (error, response, body) => {
      assert.equal(response.statusCode, 200);
      assert.equal(body, 'Payment methods for cart :12')
      done();
    });
  });

  it('tests the error for GET /cart', (done) => {
    request('http://127.0.0.1:7865/cart/hello', (error, response, body) => {
      assert.equal(response.statusCode, 404);
      done();
    });
  });
});
