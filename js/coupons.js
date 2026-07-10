// ==========================================
// ROYAL SPOON COUPON MANAGEMENT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const couponName = document.getElementById("couponName");
    const discount = document.getElementById("discount");
    const expiry = document.getElementById("expiry");
    const addCoupon = document.getElementById("addCoupon");
    const couponTable = document.getElementById("couponTable");

    let coupons = JSON.parse(localStorage.getItem("royalCoupons")) || [];

    function saveCoupons() {
        localStorage.setItem("royalCoupons", JSON.stringify(coupons));
    }

    function getStatus(expiryDate) {

        const today = new Date();

        today.setHours(0,0,0,0);

        const exp = new Date(expiryDate);

        return exp >= today ? "Active" : "Expired";
    }

    function loadCoupons() {

        couponTable.innerHTML = "";

        coupons.forEach((coupon,index)=>{

            const status = getStatus(coupon.expiry);

            couponTable.innerHTML += `

            <tr>

                <td>${coupon.name}</td>

                <td>${coupon.discount}%</td>

                <td>${coupon.expiry}</td>

                <td>

                    <span class="${
                        status==="Active"
                        ? "active-status"
                        : "expired-status"
                    }">

                    ${status}

                    </span>

                </td>

                <td>

                    <button
                    class="btn btn-sm btn-danger delete-btn"
                    data-index="${index}">

                    Delete

                    </button>

                </td>

            </tr>

            `;

        });

        document.querySelectorAll(".delete-btn").forEach(button=>{

            button.addEventListener("click",()=>{

                const index = button.dataset.index;

                coupons.splice(index,1);

                saveCoupons();

                loadCoupons();

            });

        });

    }

    addCoupon.addEventListener("click",()=>{

        if(

            couponName.value.trim()==="" ||

            discount.value.trim()==="" ||

            expiry.value===""

        ){

            alert("Please fill all fields.");

            return;

        }

        coupons.push({

            name:couponName.value,

            discount:discount.value,

            expiry:expiry.value

        });

        saveCoupons();

        loadCoupons();

        couponName.value="";
        discount.value="";
        expiry.value="";

        alert("Coupon Added Successfully!");

    });

    loadCoupons();

});