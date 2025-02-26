# 🛒 FlexDealCartEngine  
🔗 **Hosted URL**: [FlexDealCartEngine](https://flip-deal-snowy.vercel.app/)  

## 🚀 Introduction  

**FlexDealCartEngine** is a rising eCommerce platform specializing in **fitness products**. They currently offer:  

- 👟 **Shoes**  
- 🎒 **Bag**  
- 🧥 **Jacket**  

To enhance customer experience, they've introduced a **Prime Membership** program offering **exclusive discounts**! While the frontend is ready, they need a **backend developer** (you!) to build the API for various cart operations.  

---

## 🎯 Objective  

Your mission: **Develop APIs** to handle cart actions for the **Cart Page**.  

---

## ⚡ API Endpoints  

### 🏷️ **1. Calculate the Total Price of Items in the Cart**  
📌 **Endpoint:** `/cart-total`  
🔹 **Query Params:** `newItemPrice`, `cartTotal`  
🔹 **Description:** Returns the updated cart total after adding a new item.  

💻 **Example API Call:**  
```
GET http://localhost:3000/cart-total?newItemPrice=1200&cartTotal=0
```
✅ **Expected Output:**  
```json
1200
```

---

### 🎟️ **2. Apply Discount Based on Membership Status**  
📌 **Endpoint:** `/membership-discount`  
🔹 **Query Params:** `cartTotal`, `isMember`  
🔹 **Description:** Applies a discount if the user is a **Prime Member**.  

💻 **Example API Call:**  
```
GET http://localhost:3000/membership-discount?cartTotal=3600&isMember=true
```
✅ **Expected Output:**  
```json
3240
```

---

### 🧾 **3. Calculate Tax on the Cart Total**  
📌 **Endpoint:** `/calculate-tax`  
🔹 **Query Params:** `cartTotal`  
🔹 **Description:** Returns the tax applied on the cart total.  

💻 **Example API Call:**  
```
GET http://localhost:3000/calculate-tax?cartTotal=3600
```
✅ **Expected Output:**  
```json
180
```

---

### 🚚 **4. Estimate Delivery Time Based on Shipping Method**  
📌 **Endpoint:** `/estimate-delivery`  
🔹 **Query Params:** `shippingMethod`, `distance`  
🔹 **Description:** Returns the estimated delivery time based on the shipping method.  

💻 **Example API Call:**  
```
GET http://localhost:3000/estimate-delivery?shippingMethod=express&distance=600
```
✅ **Expected Output:**  
```json
6
```

---

### 📦 **5. Calculate Shipping Cost Based on Weight & Distance**  
📌 **Endpoint:** `/shipping-cost`  
🔹 **Query Params:** `weight`, `distance`  
🔹 **Description:** Calculates shipping cost using the formula:  
   `weight * distance * 0.1`  

💻 **Example API Call:**  
```
GET http://localhost:3000/shipping-cost?weight=2&distance=600
```
✅ **Expected Output:**  
```json
120
```

---

### ⭐ **6. Calculate Loyalty Points Earned from a Purchase**  
📌 **Endpoint:** `/loyalty-points`  
🔹 **Query Params:** `purchaseAmount`  
🔹 **Description:** Returns loyalty points based on the purchase amount.  

💻 **Example API Call:**  
```
GET http://localhost:3000/loyalty-points?purchaseAmount=3600
```
✅ **Expected Output:**  
```json
7200
```

---

## 💡 **Tech Stack**  
🟢 **Backend:** Node.js, Express.js  
📦 **Database:** MongoDB (if needed)  
🔗 **Hosting:** Vercel  

---

## 📬 **Connect with Me**  

💼 **LinkedIn:** [Soubhagya Shetty](https://www.linkedin.com/in/soubhagyasethy)  
👨‍💻 **GitHub:** [soubhagyasethy](https://github.com/soubhagyasethy)  
🐦 **Twitter/X:** [@soubhagyasethy3](https://x.com/soubhagyasethy3)  

🚀 Let's build something amazing together! 💡  
