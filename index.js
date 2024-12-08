const express = require('express');
const { resolve, parse } = require('path');
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

// Endpoint 2 : Apply a discount based on membership status

function membershipDiscount(cartTotal, isMember){
  if(isMember === "true"){
    let finalPrice = cartTotal - (cartTotal * (discountPercentage / 100));
    return finalPrice;
  } else {
    return cartTotal;
  }
}

app.get("/membership-discount", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember;
  res.send(membershipDiscount(cartTotal, isMember).toString());
})

// Endpoint 3 : Calculate tax on the cart total

function calculateTax(cartTotal) {
  let result = (cartTotal * taxRate) / 100;
  console.log(result);
  return result;
}

app.get("/calculate-tax", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  res.send(calculateTax(cartTotal).toString());
})

// Endpoint 4 : Estimate delivery time based on shipping method

function estimatedDelivery(shippingMethod, distance) {
  let deliveryTime;

  if(shippingMethod === "standard") {
    deliveryTime = distance / 50;
    return deliveryTime;
  } else {
    deliveryTime = distance / 100;
    return deliveryTime;
  }
}

app.get("/estimate-delivery", (req, res) => {
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);
  res.send(estimatedDelivery(shippingMethod, distance).toString());
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
