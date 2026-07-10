// ===========================================
// ROYAL SPOON
// CHECKOUT.JS
// ===========================================

// Load Cart

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===========================================
// CALCULATE TOTALS
// ===========================================

let subtotal = 0;

cart.forEach(item => {

    subtotal += item.price * item.qty;

});

let gst = subtotal * 0.05;

let delivery = subtotal > 0 ? 80 : 0;

let total = subtotal + gst + delivery;

// ===========================================
// DISPLAY SUMMARY
// ===========================================

document.getElementById("subtotal").innerHTML =
"₹" + subtotal.toFixed(2);

document.getElementById("gst").innerHTML =
"₹" + gst.toFixed(2);

document.getElementById("delivery").innerHTML =
"₹" + delivery.toFixed(2);

document.getElementById("grandTotal").innerHTML =
"₹" + total.toFixed(2);

// ===========================================
// CHECKOUT FORM
// ===========================================

document
.getElementById("checkoutForm")
.addEventListener("submit", function(e){

e.preventDefault();

// Get Values

const name =
document.getElementById("name").value.trim();

const phone =
document.getElementById("phone").value.trim();

const email =
document.getElementById("email").value.trim();

const city =
document.getElementById("city").value.trim();

const address =
document.getElementById("address").value.trim();

const pin =
document.getElementById("pin").value.trim();

const deliveryType =
document.getElementById("deliveryType").value;

const notes =
document.getElementById("notes").value.trim();

// =========================
// VALIDATION
// =========================

if(name.length < 3){

alert("Please enter a valid name.");

return;

}

if(phone.length != 10 || isNaN(phone)){

alert("Enter valid phone number.");

return;

}

const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Invalid Email.");

return;

}

if(address.length < 10){

alert("Please enter complete address.");

return;

}

if(pin.length != 6 || isNaN(pin)){

alert("Invalid PIN Code.");

return;

}

// =========================
// SAVE CUSTOMER
// =========================

const customer = {

name,

phone,

email,

city,

address,

pin,

deliveryType,

notes,

subtotal,

gst,

delivery,

total

};

localStorage.setItem(

"customer",

JSON.stringify(customer)

);

// =========================
// SUCCESS
// =========================

alert("Delivery details saved successfully.");

window.location.href="payment.html";

});