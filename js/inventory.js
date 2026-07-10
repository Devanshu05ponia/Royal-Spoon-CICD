// ==========================================
// ROYAL SPOON
// INVENTORY MANAGEMENT
// ==========================================

let inventory =
JSON.parse(localStorage.getItem("inventory")) || [];

const table =
document.getElementById("inventoryTable");

// ==========================================
// DISPLAY
// ==========================================

function displayInventory(){

table.innerHTML="";

if(inventory.length===0){

table.innerHTML=`

<tr>

<td colspan="6" class="text-center">

No Inventory Items

</td>

</tr>

`;

return;

}

inventory.forEach((item,index)=>{

let badge="bg-success";
let status="In Stock";

if(item.quantity<=10){

badge="bg-warning text-dark";
status="Low Stock";

}

if(item.quantity==0){

badge="bg-danger";
status="Out Of Stock";

}

table.innerHTML+=`

<tr>

<td>${item.name}</td>

<td>${item.quantity}</td>

<td>${item.supplier}</td>

<td>₹${item.cost}</td>

<td>

<span class="badge ${badge}">

${status}

</span>

</td>

<td>

<button
class="btn btn-primary btn-sm"
onclick="editItem(${index})">

Edit

</button>

<button
class="btn btn-danger btn-sm"
onclick="deleteItem(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

// ==========================================
// ADD
// ==========================================

document.getElementById("addInventory")

.addEventListener("click",function(){

const name=
document.getElementById("itemName").value.trim();

const quantity=
Number(document.getElementById("itemQuantity").value);

const supplier=
document.getElementById("supplier").value.trim();

const cost=
document.getElementById("cost").value;

if(name==="" || supplier===""){

alert("Fill all fields.");

return;

}

inventory.push({

name,

quantity,

supplier,

cost

});

localStorage.setItem(

"inventory",

JSON.stringify(inventory)

);

displayInventory();

clearForm();

});

// ==========================================
// DELETE
// ==========================================

function deleteItem(index){

if(confirm("Delete Item?")){

inventory.splice(index,1);

localStorage.setItem(

"inventory",

JSON.stringify(inventory)

);

displayInventory();

}

}

// ==========================================
// EDIT
// ==========================================

function editItem(index){

const item=inventory[index];

document.getElementById("itemName").value=item.name;

document.getElementById("itemQuantity").value=item.quantity;

document.getElementById("supplier").value=item.supplier;

document.getElementById("cost").value=item.cost;

inventory.splice(index,1);

localStorage.setItem(

"inventory",

JSON.stringify(inventory)

);

displayInventory();

}

// ==========================================
// CLEAR FORM
// ==========================================

function clearForm(){

document.getElementById("itemName").value="";

document.getElementById("itemQuantity").value="";

document.getElementById("supplier").value="";

document.getElementById("cost").value="";

}

// ==========================================

displayInventory();