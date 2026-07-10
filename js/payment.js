// ==========================================
// ROYAL SPOON
// PAYMENT.JS
// ==========================================

// Load Customer & Cart

const customer =
JSON.parse(localStorage.getItem("customer")) || {};

const cart =
JSON.parse(localStorage.getItem("cart")) || [];

// ==========================================
// DISPLAY TOTAL
// ==========================================

document.getElementById("amount").innerHTML =
"₹" + (customer.total || 0).toFixed(2);

// ==========================================
// SHOW / HIDE PAYMENT SECTIONS
// ==========================================

const methods =
document.querySelectorAll("input[name='payment']");

const cardSection =
document.getElementById("cardSection");

const upiSection =
document.getElementById("upiSection");

methods.forEach(method=>{

method.addEventListener("change",function(){

if(this.value==="Card"){

cardSection.style.display="block";

upiSection.style.display="none";

}

else if(this.value==="UPI"){

cardSection.style.display="none";

upiSection.style.display="block";

}

else{

cardSection.style.display="none";

upiSection.style.display="none";

}

});

});

// ==========================================
// PAY NOW
// ==========================================

document
.getElementById("payNow")
.addEventListener("click",function(){

const paymentMethod =
document.querySelector(
"input[name='payment']:checked"
).value;

// -------------------------------
// CARD VALIDATION
// -------------------------------

if(paymentMethod==="Card"){

const number =
document.getElementById("cardNumber")
.value.trim();

const holder =
document.getElementById("cardHolder")
.value.trim();

const expiry =
document.getElementById("expiry")
.value.trim();

const cvv =
document.getElementById("cvv")
.value.trim();

if(number.length!=16 || isNaN(number)){

alert("Enter valid 16-digit card number.");

return;

}

if(holder.length<3){

alert("Enter Card Holder Name.");

return;

}

if(expiry.length!=5){

alert("Enter expiry like MM/YY");

return;

}

if(cvv.length!=3 || isNaN(cvv)){

alert("Invalid CVV.");

return;

}

}

// -------------------------------
// UPI VALIDATION
// -------------------------------

if(paymentMethod==="UPI"){

const upi =
document.getElementById("upi")
.value.trim();

if(upi==="" || !upi.includes("@")){

alert("Enter valid UPI ID.");

return;

}

}

// ==========================================
// ORDER ID
// ==========================================

const orderId =
"RS" +
new Date().getFullYear() +
Math.floor(Math.random()*90000+10000);

// ==========================================
// ORDER OBJECT
// ==========================================

const order={

orderId:orderId,

customer:customer,

items:cart,

paymentMethod:paymentMethod,

amount:customer.total,

status:"Preparing",

date:new Date().toLocaleString()

};

// ==========================================
// SAVE ORDERS
// ==========================================

let orders =
JSON.parse(localStorage.getItem("orders")) || [];

orders.push(order);

localStorage.setItem(

"orders",

JSON.stringify(orders)

);

// ==========================================
// SAVE CURRENT ORDER
// ==========================================

localStorage.setItem(

"currentOrder",

JSON.stringify(order)

);

// ==========================================
// EMPTY CART
// ==========================================

localStorage.removeItem("cart");

// ==========================================
// SUCCESS
// ==========================================

alert(

"Payment Successful!\n\nOrder ID : "
+ orderId

);

// ==========================================
// REDIRECT
// ==========================================

window.location.href="tracking.html";

});