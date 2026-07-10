// ==========================================
// ROYAL SPOON
// RESERVATIONS.JS
// ==========================================

let reservations =
JSON.parse(localStorage.getItem("reservations")) || [];

const table =
document.getElementById("reservationTable");

const search =
document.getElementById("searchReservation");

const filter =
document.getElementById("reservationFilter");

// ==========================================
// DISPLAY RESERVATIONS
// ==========================================

function displayReservations(data){

table.innerHTML="";

if(data.length===0){

table.innerHTML=`

<tr>

<td colspan="7" class="text-center">

No Reservations Found

</td>

</tr>

`;

return;

}

data.forEach((reservation,index)=>{

let badge="bg-warning text-dark";

if(reservation.status==="Approved"){

badge="bg-success";

}

if(reservation.status==="Rejected"){

badge="bg-danger";

}

table.innerHTML+=`

<tr>

<td>${reservation.name}</td>

<td>${reservation.phone}</td>

<td>${reservation.date}</td>

<td>${reservation.time}</td>

<td>${reservation.guests}</td>

<td>

<span class="badge ${badge}">

${reservation.status}

</span>

</td>

<td>

<button

class="btn btn-success btn-sm"

onclick="approveReservation(${index})">

Approve

</button>

<button

class="btn btn-danger btn-sm"

onclick="rejectReservation(${index})">

Reject

</button>

<button

class="btn btn-dark btn-sm"

onclick="deleteReservation(${index})">

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

const filtered=reservations.filter(item=>

item.name.toLowerCase().includes(value)

||

item.phone.includes(value)

);

displayReservations(filtered);

});

// ==========================================
// FILTER
// ==========================================

filter.addEventListener("change",function(){

if(this.value==="All"){

displayReservations(reservations);

return;

}

const filtered=reservations.filter(item=>

item.status===this.value

);

displayReservations(filtered);

});

// ==========================================
// APPROVE
// ==========================================

function approveReservation(index){

reservations[index].status="Approved";

localStorage.setItem(

"reservations",

JSON.stringify(reservations)

);

displayReservations(reservations);

}

// ==========================================
// REJECT
// ==========================================

function rejectReservation(index){

reservations[index].status="Rejected";

localStorage.setItem(

"reservations",

JSON.stringify(reservations)

);

displayReservations(reservations);

}

// ==========================================
// DELETE
// ==========================================

function deleteReservation(index){

if(confirm("Delete this reservation?")){

reservations.splice(index,1);

localStorage.setItem(

"reservations",

JSON.stringify(reservations)

);

displayReservations(reservations);

}

}

// ==========================================
// INITIAL LOAD
// ==========================================

displayReservations(reservations);