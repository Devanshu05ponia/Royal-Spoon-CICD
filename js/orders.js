// ==========================================
// ROYAL SPOON
// ORDERS MANAGEMENT
// ==========================================

let orders = JSON.parse(localStorage.getItem("orders")) || [];

const table = document.getElementById("ordersTable");
const search = document.getElementById("searchOrder");
const filter = document.getElementById("statusFilter");

// ==========================================
// DISPLAY ORDERS
// ==========================================

function displayOrders(data){

table.innerHTML="";

if(data.length===0){

table.innerHTML=`

<tr>

<td colspan="7" class="text-center">

No Orders Found

</td>

</tr>

`;

return;

}

data.forEach((order,index)=>{

let badge="bg-warning text-dark";

if(order.status==="Cooking"){

badge="bg-info";

}

if(order.status==="Out For Delivery"){

badge="bg-primary";

}

if(order.status==="Delivered"){

badge="bg-success";

}

table.innerHTML+=`

<tr>

<td>${order.orderId}</td>

<td>${order.customer.name}</td>

<td>${order.customer.phone}</td>

<td>₹${Number(order.amount).toFixed(2)}</td>

<td>${order.paymentMethod}</td>

<td>

<span class="badge ${badge}">

${order.status}

</span>

</td>

<td>

<button

class="btn btn-success btn-sm"

onclick="nextStatus(${index})">

Next

</button>

<button

class="btn btn-danger btn-sm"

onclick="deleteOrder(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

// ==========================================
// SEARCH
// ==========================================

search.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const result=orders.filter(order=>

order.orderId.toLowerCase().includes(value)

||

order.customer.name.toLowerCase().includes(value)

);

displayOrders(result);

});

// ==========================================
// FILTER
// ==========================================

filter.addEventListener("change",function(){

if(this.value==="All"){

displayOrders(orders);

return;

}

const result=orders.filter(order=>

order.status===this.value

);

displayOrders(result);

});

// ==========================================
// UPDATE STATUS
// ==========================================

function nextStatus(index){

const status=[

"Preparing",

"Cooking",

"Out For Delivery",

"Delivered"

];

let current=status.indexOf(

orders[index].status

);

if(current<status.length-1){

orders[index].status=

status[current+1];

}

localStorage.setItem(

"orders",

JSON.stringify(orders)

);

displayOrders(orders);

}

// ==========================================
// DELETE
// ==========================================

function deleteOrder(index){

if(confirm("Delete this order?")){

orders.splice(index,1);

localStorage.setItem(

"orders",

JSON.stringify(orders)

);

displayOrders(orders);

}

}

// ==========================================
// START
// ==========================================

displayOrders(orders);