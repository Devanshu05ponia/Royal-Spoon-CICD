// ===========================================
// ROYAL SPOON
// TRACKING.JS
// ===========================================

// Load Current Order

const order =
JSON.parse(localStorage.getItem("currentOrder"));

if(!order){

alert("No active order found.");

window.location.href="../index.html";

}

// ===========================================
// DISPLAY ORDER DETAILS
// ===========================================

document.getElementById("orderId").innerHTML =
order.orderId;

document.getElementById("customerName").innerHTML =
order.customer.name;

document.getElementById("phone").innerHTML =
order.customer.phone;

document.getElementById("payment").innerHTML =
order.paymentMethod;

document.getElementById("amount").innerHTML =
"₹" + order.amount.toFixed(2);

document.getElementById("date").innerHTML =
order.date;

// ===========================================
// ORDER STATUS
// ===========================================

const statusText =
document.getElementById("status");

const progress =
document.getElementById("progressBar");

const statusList=[

{
status:"Preparing",
width:"25%"
},

{
status:"Cooking",
width:"50%"
},

{
status:"Out For Delivery",
width:"75%"
},

{
status:"Delivered",
width:"100%"
}

];

let index=0;

function updateStatus(){

statusText.innerHTML =
statusList[index].status;

progress.style.width =
statusList[index].width;

progress.innerHTML =
statusList[index].status;

// Save Latest Status

order.status =
statusList[index].status;

let orders =
JSON.parse(localStorage.getItem("orders")) || [];

orders = orders.map(item=>{

if(item.orderId===order.orderId){

item.status =
order.status;

}

return item;

});

localStorage.setItem(

"orders",

JSON.stringify(orders)

);

localStorage.setItem(

"currentOrder",

JSON.stringify(order)

);

index++;

if(index>=statusList.length){

clearInterval(timer);

statusText.className=
"badge bg-success";

progress.classList.remove(
"progress-bar-animated"
);

alert(
"🎉 Your order has been delivered successfully!"
);

}

}

updateStatus();

const timer =
setInterval(updateStatus,3000);