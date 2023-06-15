const express = require('express');
const app = express();
const port = 7865;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(404);
    res.end()
  } else {
    res.send(`Payment methods for cart ${id}`);
  }
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
})

app.post('/login', (req, res) => {
  const user = req.body;
  // console.log(`Welcome ${user.userName}`)
  res.send(`Welcome ${user.userName}`)
})

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
