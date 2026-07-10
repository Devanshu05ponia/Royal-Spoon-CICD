// =========================================
// ROYAL SPOON SETTINGS
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const saveBtn = document.getElementById("saveSettings");

    const fields = {

        restaurantName: document.getElementById("restaurantName"),

        email: document.getElementById("email"),

        phone: document.getElementById("phone"),

        delivery: document.getElementById("delivery"),

        gst: document.getElementById("gst"),

        website: document.getElementById("website"),

        opening: document.getElementById("opening"),

        closing: document.getElementById("closing"),

        address: document.getElementById("address"),

        facebook: document.getElementById("facebook"),

        instagram: document.getElementById("instagram")

    };

    // ===========================
    // Load Saved Settings
    // ===========================

    const savedSettings = JSON.parse(localStorage.getItem("restaurantSettings"));

    if(savedSettings){

        Object.keys(fields).forEach(key=>{

            if(savedSettings[key]){

                fields[key].value = savedSettings[key];

            }

        });

    }

    // ===========================
    // Save Settings
    // ===========================

    saveBtn.addEventListener("click",()=>{

        const settings = {};

        Object.keys(fields).forEach(key=>{

            settings[key] = fields[key].value;

        });

        localStorage.setItem(

            "restaurantSettings",

            JSON.stringify(settings)

        );

        alert("✅ Restaurant settings saved successfully!");

    });

});