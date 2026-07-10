// ==========================================
// ROYAL SPOON
// CUSTOMERS.JS
// ==========================================

// Load Registered Users

let customers = JSON.parse(localStorage.getItem("royalUsers")) || [];

const table = document.getElementById("customerTable");
const search = document.getElementById("searchCustomer");

// ==========================================
// DASHBOARD CARDS
// ==========================================

document.getElementById("totalCustomers").innerHTML =
customers.length;

document.getElementById("registeredUsers").innerHTML =
customers.length;

document.getElementById("activeCustomers").innerHTML =
customers.length;

// ==========================================
// DISPLAY CUSTOMERS
// ==========================================

function displayCustomers(data){

table.innerHTML="";

if(data.length===0){

table.innerHTML=`

<tr>

<td colspan="5" class="text-center">

No Customers Found

</td>

</tr>

`;

return;

}

data.forEach((customer,index)=>{

table.innerHTML += `

<tr>

<td>

<img

src="https://ui-avatars.com/api/?name=${encodeURIComponent(customer.name)}&background=ffc107&color=111"

class="customer-img">

</td>

<td>${customer.name}</td>

<td>${customer.email}</td>

<td>${customer.phone}</td>

<td>

<button

class="btn btn-danger btn-sm"

onclick="deleteCustomer(${index})">

<i class="fas fa-trash"></i>

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

const filtered=customers.filter(customer=>

customer.name.toLowerCase().includes(value)

||

customer.email.toLowerCase().includes(value)

||

customer.phone.includes(value)

);

displayCustomers(filtered);

});

// ==========================================
// DELETE CUSTOMER
// ==========================================

function deleteCustomer(index){

if(confirm("Delete this customer?")){

customers.splice(index,1);

localStorage.setItem(

"royalUsers",

JSON.stringify(customers)

);

document.getElementById("totalCustomers").innerHTML =
customers.length;

document.getElementById("registeredUsers").innerHTML =
customers.length;

document.getElementById("activeCustomers").innerHTML =
customers.length;

displayCustomers(customers);

}

}

// ==========================================
// INITIAL LOAD
// ==========================================

displayCustomers(customers);