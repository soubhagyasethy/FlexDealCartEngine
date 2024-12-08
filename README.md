# FlipDeal

## Introduction

FlipDeal is an eCommerce company that has recently started dealing with multiple fitness products. Currently, they are starting small with 3 items in their cart:

- Shoes
- Bag
- Jacket

They have also launched a “Prime Membership” program where if you are the member at their platform, you get good discounts on the products.

Now, they already have built the frontend of the application showing the cart page with product details, images, and other options. But now they want a backend developer who can create the APIs for various cart actions and work with frontend.

## Objective

FlipDeal has given you the project to create the APIs on the backend for their “Cart Page”.

### Endpoint 1: Calculate the total price of items in the cart

Create an endpoint that takes a newItemPrice and cartTotal as a query parameter and returns total cart value.

Write an Express code snippet.

Declare an endpoint cart-total using the get keyword.

Declare two variables newItemPrice and cartTotalto take the input.

Parse the input as a float to calculate the total cart price.

Return the result as a string.

API Call: <http://localhost:3000/cart-total?newItemPrice=1200&cartTotal=0>

Expected Output: 1200

### Endpoint 2 : Apply a discount based on membership status

Create an endpoint that takes a cartTotal and isMember as a query parameter and returns final price after applying the discount.

Write an Express code snippet.

Declare an endpoint /membership-discount using the get keyword.

Declare two variables cartTotal and isMember to take the input.

Parse the cartTotal as a float to calculate the total cart value.

Return the result as a string.

If the Membership status = true, then the discount percentage is applied

If the Membership status = false, no discount is applied

API Call: <http://localhost:3000/membership-discount?cartTotal=3600&isMember=true>

Expected Output: 3240