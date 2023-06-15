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
      assert.equal(body, 'Payment methods for cart 12')
      done();
    });
  });

  it('tests the error for GET /cart', (done) => {
    request('http://127.0.0.1:7865/cart/hello', (error, response, body) => {
      assert.equal(response.statusCode, 404);
      done();
    });
  });

  it('tests the for GET /available_payments', (done) => {
    request('http://127.0.0.1:7865/available_payments', (error, response, body) => {
      assert.equal(response.statusCode, 200);
      const myObj = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      assert.equal(body, JSON.stringify(myObj));
      done();
    });
  });

  it('tests the error for POST /login', (done) => {
    request.post({
      url: 'http://127.0.0.1:7865/login',
      json: { "userName": "Betty" }
    }, (error, response, body) => {
      if (error) return done(error);
      assert.equal(response.statusCode, 200);
      assert.equal(body, 'Welcome Betty');
      done();
    });
  });
});
