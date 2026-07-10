// ================================
// MENU ITEMS
// ================================

const menuItems = [

{
id:1,
name:"Margherita Pizza",
category:"Pizza",
price:499,
rating:4.8,
type:"Veg",
badge:"Best Seller",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700"
},

{
id:2,
name:"Pepperoni Pizza",
category:"Pizza",
price:599,
rating:4.9,
type:"Non Veg",
badge:"Chef Special",
image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700"
},

{
id:3,
name:"Chicken Burger",
category:"Burger",
price:349,
rating:4.7,
type:"Non Veg",
badge:"Popular",
image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700"
},

{
id:4,
name:"Veg Burger",
category:"Burger",
price:299,
rating:4.6,
type:"Veg",
badge:"Healthy",
image:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=700"
},

{
id:5,
name:"Butter Chicken",
category:"Indian",
price:549,
rating:4.9,
type:"Non Veg",
badge:"Best Seller",
image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700"
},

{
id:6,
name:"Chicken Biryani",
category:"Indian",
price:449,
rating:4.8,
type:"Non Veg",
badge:"Hot",
image:"https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=700"
},

{
id:7,
name:"Dal Makhani",
category:"Indian",
price:299,
rating:4.6,
type:"Veg",
badge:"Classic",
image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700"
},

{
id:8,
name:"White Sauce Pasta",
category:"Pasta",
price:399,
rating:4.7,
type:"Veg",
badge:"Creamy",
image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700"
},

{
id:9,
name:"Red Sauce Pasta",
category:"Pasta",
price:379,
rating:4.6,
type:"Veg",
badge:"Italian",
image:"https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=700"
},

{
id:10,
name:"Hakka Noodles",
category:"Chinese",
price:349,
rating:4.7,
type:"Veg",
badge:"Popular",
image:"https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=700"
},

{
id:11,
name:"Manchurian",
category:"Chinese",
price:329,
rating:4.6,
type:"Veg",
badge:"Chef Choice",
image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=700"
},

{
id:12,
name:"Spring Rolls",
category:"Chinese",
price:249,
rating:4.5,
type:"Veg",
badge:"Starter",
image:"https://images.unsplash.com/photo-1544025162-d76694265947?w=700"
}

];

// =====================================
// DISPLAY MENU ITEMS
// =====================================

const menuContainer = document.getElementById("menuContainer");

function displayMenu(items){

    menuContainer.innerHTML="";

    items.forEach(item=>{

        const card=`

        <div class="col-lg-4 col-md-6">

            <div class="card h-100 shadow food-card">

                <img src="${item.image}"
                     class="card-img-top food-img"
                     alt="${item.name}">

                <div class="card-body d-flex flex-column">

                    <div class="d-flex justify-content-between">

                        <span class="badge bg-success">

                            ${item.type}

                        </span>

                        <span class="badge bg-danger">

                            ${item.badge}

                        </span>

                    </div>

                    <h4 class="mt-3">

                        ${item.name}

                    </h4>

                    <p>

                        Category :
                        ${item.category}

                    </p>

                    <p>

                        ⭐ ${item.rating}

                    </p>

                    <h5 class="text-warning">

                        ₹${item.price}

                    </h5>

                    <button
                        class="btn btn-warning mt-auto"
                        onclick="addToCart(${item.id})">

                        <i class="fas fa-cart-plus"></i>

                        Add To Cart

                    </button>

                </div>

            </div>

        </div>

        `;

        menuContainer.innerHTML+=card;

    });

}

displayMenu(menuItems);


// =====================================
// SEARCH
// =====================================

document
.getElementById("searchInput")
.addEventListener("keyup",function(){

    const value=this.value.toLowerCase();

    const filtered=menuItems.filter(item=>

        item.name.toLowerCase().includes(value)

    );

    displayMenu(filtered);

});


// =====================================
// CATEGORY FILTER
// =====================================

document
.getElementById("categoryFilter")
.addEventListener("change",function(){

    if(this.value==="All"){

        displayMenu(menuItems);

        return;

    }

    const filtered=menuItems.filter(item=>

        item.category===this.value

    );

    displayMenu(filtered);

});


// =====================================
// PRICE SORT
// =====================================

document
.getElementById("sortPrice")
.addEventListener("change",function(){

    let items=[...menuItems];

    if(this.value==="low"){

        items.sort((a,b)=>a.price-b.price);

    }

    else if(this.value==="high"){

        items.sort((a,b)=>b.price-a.price);

    }

    displayMenu(items);

});


// =====================================
// ADD TO CART
// =====================================

function addToCart(id){

    let cart=JSON.parse(localStorage.getItem("cart")) || [];

    const item=menuItems.find(food=>food.id===id);

    const existing=cart.find(food=>food.id===id);

    if(existing){

        existing.qty++;

    }

    else{

        cart.push({

            ...item,

            qty:1

        });

    }

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    updateCartCount();

    alert(item.name+" added to cart!");

}


// =====================================
// CART COUNT
// =====================================

function updateCartCount(){

    let cart=JSON.parse(localStorage.getItem("cart")) || [];

    let total=0;

    cart.forEach(item=>{

        total+=item.qty;

    });

    document.getElementById("cartCount").innerHTML=total;

}

updateCartCount();


// =====================================
// CATEGORY BUTTONS
// =====================================

const buttons=document.querySelectorAll(".category-btn");

buttons.forEach(button=>{

button.addEventListener("click",function(){

buttons.forEach(btn=>{

btn.classList.remove("active");

btn.classList.remove("btn-warning");

btn.classList.add("btn-outline-warning");

});

this.classList.remove("btn-outline-warning");

this.classList.add("btn-warning");

const category=this.dataset.category;

if(category==="All"){

displayMenu(menuItems);

}

else{

displayMenu(

menuItems.filter(item=>item.category===category)

);

}

});

});