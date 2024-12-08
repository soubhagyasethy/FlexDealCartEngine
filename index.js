const express = require('express');
const { resolve } = require('path');
const cors = require("cors");

const app = express();
app.use(cors());

const port = 3000;

app.use(express.static('static'));

//Server-side values
let taxRate = 5; // 5%
let discountPercentage = 10; // 10%
let loayltyRate = 2; // 2 points per $1

// Endpoint 1: Calculating the total price of items in the cart
app.get("/cart-total", (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  let result = newItemPrice + cartTotal;

  res.send(result.toString());
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
