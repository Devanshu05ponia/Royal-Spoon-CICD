// ============================================
// ROYAL SPOON - CART.JS
// ============================================

// Load Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let discount = 0;

// ============================================
// DISPLAY CART
// ============================================

function displayCart() {

    const cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `

        <div class="empty-cart">

            <i class="fas fa-shopping-cart"></i>

            <h2>Your Cart is Empty</h2>

            <p>Add delicious food from our menu.</p>

            <a href="menu.html" class="btn btn-warning mt-3">

                Go To Menu

            </a>

        </div>

        `;

        updateSummary();

        return;

    }

    cart.forEach((item, index) => {

        cartItems.innerHTML += `

        <div class="cart-card">

            <div class="row align-items-center">

                <div class="col-md-3">

                    <img src="${item.image}"

                    class="cart-image img-fluid">

                </div>

                <div class="col-md-5">

                    <h3 class="food-title">

                        ${item.name}

                    </h3>

                    <p>

                        ${item.category}

                    </p>

                    <h4 class="food-price">

                        ₹${item.price}

                    </h4>

                </div>

                <div class="col-md-2 text-center">

                    <button

                    class="qty-btn"

                    onclick="decreaseQty(${index})">

                    -

                    </button>

                    <span class="qty">

                        ${item.qty}

                    </span>

                    <button

                    class="qty-btn"

                    onclick="increaseQty(${index})">

                    +

                    </button>

                </div>

                <div class="col-md-2 text-center">

                    <button

                    class="btn btn-danger remove-btn"

                    onclick="removeItem(${index})">

                        Remove

                    </button>

                </div>

            </div>

        </div>

        `;

    });

    updateSummary();

}

// ============================================
// INCREASE QTY
// ============================================

function increaseQty(index){

    cart[index].qty++;

    saveCart();

}

// ============================================
// DECREASE QTY
// ============================================

function decreaseQty(index){

    if(cart[index].qty>1){

        cart[index].qty--;

    }

    else{

        cart.splice(index,1);

    }

    saveCart();

}

// ============================================
// REMOVE ITEM
// ============================================

function removeItem(index){

    if(confirm("Remove this item from cart?")){

        cart.splice(index,1);

        saveCart();

    }

}

// ============================================
// SAVE CART
// ============================================

function saveCart(){

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    displayCart();

}

// ============================================
// ORDER SUMMARY
// ============================================

function updateSummary(){

    let subtotal=0;

    cart.forEach(item=>{

        subtotal += item.price * item.qty;

    });

    let gst=subtotal*0.05;

    let delivery=subtotal===0 ? 0 : 80;

    let discountAmount=(subtotal*discount)/100;

    let total=subtotal+gst+delivery-discountAmount;

    document.getElementById("subtotal").innerHTML="₹"+subtotal.toFixed(2);

    document.getElementById("gst").innerHTML="₹"+gst.toFixed(2);

    document.getElementById("delivery").innerHTML="₹"+delivery.toFixed(2);

    document.getElementById("grandTotal").innerHTML="₹"+total.toFixed(2);

}

// ============================================
// APPLY COUPON
// ============================================

document
.getElementById("applyCoupon")
.addEventListener("click",function(){

    const code=document
    .getElementById("coupon")
    .value
    .trim()
    .toUpperCase();

    if(code==="WELCOME10"){

        discount=10;

        alert("10% Discount Applied");

    }

    else if(code==="ROYAL20"){

        discount=20;

        alert("20% Discount Applied");

    }

    else if(code==="FREEDINE"){

        discount=15;

        alert("15% Discount Applied");

    }

    else{

        discount=0;

        alert("Invalid Coupon");

    }

    updateSummary();

});

// ============================================
// START
// ============================================

displayCart();