// ==========================================
// ROYAL SPOON
// ADMIN DASHBOARD
// ==========================================

// Get Orders
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// Get Registered Customers
let customers = JSON.parse(localStorage.getItem("royalUsers")) || [];

// ==========================================
// TOTAL ORDERS
// ==========================================

document.getElementById("totalOrders").innerHTML =
orders.length;

// ==========================================
// TOTAL CUSTOMERS
// ==========================================

document.getElementById("totalCustomers").innerHTML =
customers.length;

// ==========================================
// TOTAL REVENUE
// ==========================================

let revenue = 0;

orders.forEach(order => {

    revenue += Number(order.amount);

});

document.getElementById("totalRevenue").innerHTML =
"₹" + revenue.toFixed(2);

// ==========================================
// PENDING ORDERS
// ==========================================

let pending = orders.filter(order =>

order.status !== "Delivered"

);

document.getElementById("pendingOrders").innerHTML =
pending.length;

// ==========================================
// RECENT ORDERS TABLE
// ==========================================

const table =
document.getElementById("orderTable");

table.innerHTML = "";

if (orders.length === 0) {

table.innerHTML =

`
<tr>

<td colspan="6" class="text-center">

No Orders Found

</td>

</tr>

`;

}

else{

orders.slice().reverse().forEach(order=>{

table.innerHTML +=

`
<tr>

<td>${order.orderId}</td>

<td>${order.customer.name}</td>

<td>₹${Number(order.amount).toFixed(2)}</td>

<td>${order.paymentMethod}</td>

<td>

<span class="badge bg-warning text-dark">

${order.status}

</span>

</td>

<td>${order.date}</td>

</tr>

`;

});

}

// ==========================================
// AUTO REFRESH EVERY 5 SECONDS
// ==========================================

setInterval(()=>{

location.reload();

},5000);