// ==========================================
// ROYAL SPOON EMPLOYEE MANAGEMENT
// ==========================================

let employees =
JSON.parse(localStorage.getItem("employees")) || [];

const table =
document.getElementById("employeeTable");

const search =
document.getElementById("searchEmployee");

// ==========================================
// DISPLAY EMPLOYEES
// ==========================================

function displayEmployees(data = employees){

table.innerHTML = "";

if(data.length === 0){

table.innerHTML = `

<tr>

<td colspan="8" class="text-center">

No Employees Found

</td>

</tr>

`;

updateStats();

return;

}

data.forEach((emp,index)=>{

let statusClass =
emp.status==="Active"
?
"active-status"
:
"inactive-status";

table.innerHTML += `

<tr>

<td>${emp.name}</td>

<td>${emp.role}</td>

<td>₹${emp.salary}</td>

<td>${emp.phone}</td>

<td>${emp.email}</td>

<td>${emp.shift}</td>

<td class="${statusClass}">

${emp.status}

</td>

<td>

<button

class="btn btn-primary btn-sm"

onclick="editEmployee(${index})">

<i class="fas fa-edit"></i>

</button>

<button

class="btn btn-danger btn-sm"

onclick="deleteEmployee(${index})">

<i class="fas fa-trash"></i>

</button>

</td>

</tr>

`;

});

updateStats();

}

// ==========================================
// ADD EMPLOYEE
// ==========================================

document
.getElementById("addEmployee")
.addEventListener("click",()=>{

const name =
document.getElementById("empName").value.trim();

const role =
document.getElementById("empRole").value;

const salary =
document.getElementById("empSalary").value;

const phone =
document.getElementById("empPhone").value;

const email =
document.getElementById("empEmail").value;

const shift =
document.getElementById("empShift").value;

const joining =
document.getElementById("joiningDate").value;

const status =
document.getElementById("empStatus").value;

if(

name==="" ||

salary==="" ||

phone==="" ||

email===""

){

alert("Please fill all required fields.");

return;

}

employees.push({

name,

role,

salary,

phone,

email,

shift,

joining,

status

});

localStorage.setItem(

"employees",

JSON.stringify(employees)

);

clearForm();

displayEmployees();

});

// ==========================================
// DELETE
// ==========================================

function deleteEmployee(index){

if(confirm("Delete this employee?")){

employees.splice(index,1);

localStorage.setItem(

"employees",

JSON.stringify(employees)

);

displayEmployees();

}

}

// ==========================================
// EDIT
// ==========================================

function editEmployee(index){

const emp = employees[index];

document.getElementById("empName").value = emp.name;

document.getElementById("empRole").value = emp.role;

document.getElementById("empSalary").value = emp.salary;

document.getElementById("empPhone").value = emp.phone;

document.getElementById("empEmail").value = emp.email;

document.getElementById("empShift").value = emp.shift;

document.getElementById("joiningDate").value = emp.joining;

document.getElementById("empStatus").value = emp.status;

employees.splice(index,1);

localStorage.setItem(

"employees",

JSON.stringify(employees)

);

displayEmployees();

}

// ==========================================
// SEARCH
// ==========================================

search.addEventListener("keyup",()=>{

const keyword =
search.value.toLowerCase();

const filtered =
employees.filter(emp=>

emp.name.toLowerCase().includes(keyword) ||

emp.role.toLowerCase().includes(keyword)

);

displayEmployees(filtered);

});

// ==========================================
// DASHBOARD STATS
// ==========================================

function updateStats(){

document.getElementById("totalEmployees").innerHTML =
employees.length;

document.getElementById("activeEmployees").innerHTML =
employees.filter(emp=>emp.status==="Active").length;

document.getElementById("inactiveEmployees").innerHTML =
employees.filter(emp=>emp.status==="Inactive").length;

}

// ==========================================
// CLEAR FORM
// ==========================================

function clearForm(){

document.getElementById("empName").value="";

document.getElementById("empSalary").value="";

document.getElementById("empPhone").value="";

document.getElementById("empEmail").value="";

document.getElementById("joiningDate").value="";

document.getElementById("empRole").selectedIndex=0;

document.getElementById("empShift").selectedIndex=0;

document.getElementById("empStatus").selectedIndex=0;

}

// ==========================================

displayEmployees();