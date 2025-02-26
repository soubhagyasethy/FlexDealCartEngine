# 🌐 FlexDealCartEngine

### Hosted URL: [FlexDealCartEngine](https://flip-deal-snowy.vercel.app/)

---

## 📌 Introduction

**FlexDealCartEngine** is an emerging eCommerce company specializing in fitness products. Currently, their cart system features **3 items**:

- 🥿 Shoes
- 🎒 Bag
- 🧥 Jacket

They offer a **Prime Membership** program, granting exclusive discounts to members.

This project aims to build the **backend APIs** required for various cart functionalities that will integrate seamlessly with their existing frontend application.

---

## 🎯 Objective

Develop APIs to handle cart operations with the following functionalities:

---

### 🔑 Endpoint 1: Calculate Total Price

**URL:** `/cart-total`

**Method:** `GET`

**Query Parameters:**
- `newItemPrice` (float)
- `cartTotal` (float)

✅ This API calculates the total cart value by adding the `newItemPrice` to the `cartTotal`.

**Example API Call:**
```url
http://localhost:3000/cart-total?newItemPrice=1200&cartTotal=0
```
**Expected Output:**
```json
1200
```
---

### 🎯 Endpoint 2: Apply Membership Discount

**URL:** `/membership-discount`

**Method:** `GET`

**Query Parameters:**
- `cartTotal` (float)
- `isMember` (boolean)

✅ This API applies a **10% discount** if the user is a Prime Member.

**Example API Call:**
```url
http://localhost:3000/membership-discount?cartTotal=3600&isMember=true
```
**Expected Output:**
```json
3240
```
---

### 🧾 Endpoint 3: Calculate Tax

**URL:** `/calculate-tax`

**Method:** `GET`

**Query Parameters:**
- `cartTotal` (float)

✅ This API applies a **5% tax** on the cart total.

**Example API Call:**
```url
http://localhost:3000/calculate-tax?cartTotal=3600
```
**Expected Output:**
```json
180
```
---

### 🚚 Endpoint 4: Estimate Delivery Time

**URL:** `/estimate-delivery`

**Method:** `GET`

**Query Parameters:**
- `shippingMethod` (string: `Standard` or `Express`)
- `distance` (float)

✅ This API estimates delivery time:
- **Standard:** 1 day per 50 kms
- **Express:** 1 day per 100 kms

**Example API Call:**
```url
http://localhost:3000/estimate-delivery?shippingMethod=express&distance=600
```
**Expected Output:**
```json
6
```
---

### 💰 Endpoint 5: Shipping Cost Calculation

**URL:** `/shipping-cost`

**Method:** `GET`

**Query Parameters:**
- `weight` (float)
- `distance` (float)

✅ This API calculates shipping cost using the formula:
```
shippingCost = weight * distance * 0.1
```

**Example API Call:**
```url
http://localhost:3000/shipping-cost?weight=2&distance=600
```
**Expected Output:**
```json
120
```
---

### ⭐ Endpoint 6: Loyalty Points Calculation

**URL:** `/loyalty-points`

**Method:** `GET`

**Query Parameters:**
- `purchaseAmount` (float)

✅ This API calculates **2x loyalty points** for every purchase.

**Example API Call:**
```url
http://localhost:3000/loyalty-points?purchaseAmount=3600
```
**Expected Output:**
```json
7200
```
---

## ⚙️ Tech Stack
- Node.js
- Express.js
- JavaScript (ES6)

---

## 📄 Project Setup

1. Clone the repository.
2. Install dependencies:
```bash
npm install
```
3. Run the server:
```bash
node index.js
```

---

## 💪 Conclusion

FlexDealCartEngine is paving the way for a more streamlined fitness shopping experience with robust backend APIs supporting cart management, membership benefits, and seamless delivery logistics.

🚀 Happy Coding!

