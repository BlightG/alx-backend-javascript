const assert = require('assert');
const request = require('request');

describe('tests an express instance', () => {
  it('tests the status code', (done) => {
    request('http://127.0.0.1:7865/', (error, response, body) => {
      assert.equal(response.statusCode, 200);
      assert.equal(body, 'Welcome to the payment system');
      console.log(response.statusCode);
      done();
    })
  })
});
