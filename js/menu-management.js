// ==========================================
// ROYAL SPOON
// MENU MANAGEMENT
// ==========================================

let menu = JSON.parse(localStorage.getItem("menu")) || [];

const table = document.getElementById("menuTable");

// ==========================================
// DISPLAY MENU
// ==========================================

function displayMenu(){

table.innerHTML="";

if(menu.length===0){

table.innerHTML=`

<tr>

<td colspan="6" class="text-center">

No Food Items Added

</td>

</tr>

`;

return;

}

menu.forEach((food,index)=>{

let badge=
food.status==="Available"
?
"bg-success"
:
"bg-danger";

table.innerHTML+=`

<tr>

<td>

<img

src="${food.image}"

class="food-img">

</td>

<td>

${food.name}

</td>

<td>

${food.category}

</td>

<td>

₹${food.price}

</td>

<td>

<span class="badge ${badge}">

${food.status}

</span>

</td>

<td>

<button

class="btn btn-primary btn-sm"

onclick="editFood(${index})">

Edit

</button>

<button

class="btn btn-danger btn-sm"

onclick="deleteFood(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

// ==========================================
// ADD FOOD
// ==========================================

document.getElementById("addFood").addEventListener("click",function(){

const name=
document.getElementById("foodName").value.trim();

const price=
document.getElementById("foodPrice").value;

const category=
document.getElementById("foodCategory").value;

const image=
document.getElementById("foodImage").value.trim();

const description=
document.getElementById("foodDescription").value.trim();

const status=
document.getElementById("foodStatus").value;

if(

name===""

||

price===""

||

image===""

){

alert("Please fill all required fields.");

return;

}

menu.push({

name,

price,

category,

image,

description,

status

});

localStorage.setItem(

"menu",

JSON.stringify(menu)

);

displayMenu();

clearForm();

});

// ==========================================
// DELETE
// ==========================================

function deleteFood(index){

if(confirm("Delete this food item?")){

menu.splice(index,1);

localStorage.setItem(

"menu",

JSON.stringify(menu)

);

displayMenu();

}

}

// ==========================================
// EDIT
// ==========================================

function editFood(index){

const item=menu[index];

document.getElementById("foodName").value=item.name;

document.getElementById("foodPrice").value=item.price;

document.getElementById("foodCategory").value=item.category;

document.getElementById("foodImage").value=item.image;

document.getElementById("foodDescription").value=item.description;

document.getElementById("foodStatus").value=item.status;

menu.splice(index,1);

localStorage.setItem(

"menu",

JSON.stringify(menu)

);

displayMenu();

}

// ==========================================
// CLEAR FORM
// ==========================================

function clearForm(){

document.getElementById("foodName").value="";

document.getElementById("foodPrice").value="";

document.getElementById("foodImage").value="";

document.getElementById("foodDescription").value="";

document.getElementById("foodCategory").selectedIndex=0;

document.getElementById("foodStatus").selectedIndex=0;

}

// ==========================================
// INITIAL LOAD
// ==========================================

displayMenu();