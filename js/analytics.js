document.addEventListener("DOMContentLoaded", function () {

    // Monthly Revenue
    const salesChart = document.getElementById("salesChart");

    if (salesChart) {

        new Chart(salesChart, {

            type: "line",

            data: {

                labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],

                datasets: [{

                    label: "Revenue",

                    data: [12000,18000,22000,26000,30000,35000,40000,43000,48000,52000,57000,62000],

                    borderColor: "#FFC107",

                    backgroundColor: "rgba(255,193,7,.2)",

                    fill: true,

                    tension: .4

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false

            }

        });

    }

    // Food Categories

    const foodChart = document.getElementById("foodChart");

    if (foodChart) {

        new Chart(foodChart, {

            type: "doughnut",

            data: {

                labels: [

                    "Pizza",

                    "Burger",

                    "Pasta",

                    "Dessert",

                    "Drinks"

                ],

                datasets: [{

                    data: [

                        35,

                        20,

                        15,

                        10,

                        20

                    ],

                    backgroundColor: [

                        "#FFC107",

                        "#28a745",

                        "#17a2b8",

                        "#dc3545",

                        "#6f42c1"

                    ]

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false

            }

        });

    }

    // Weekly Orders

    const ordersChart = document.getElementById("ordersChart");

    if (ordersChart) {

        new Chart(ordersChart, {

            type: "bar",

            data: {

                labels: [

                    "Mon",

                    "Tue",

                    "Wed",

                    "Thu",

                    "Fri",

                    "Sat",

                    "Sun"

                ],

                datasets: [{

                    label: "Orders",

                    data: [

                        25,

                        30,

                        35,

                        45,

                        55,

                        75,

                        65

                    ],

                    backgroundColor: "#FFC107"

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false

            }

        });

    }

    // Customer Growth

    const customerChart = document.getElementById("customerChart");

    if (customerChart) {

        new Chart(customerChart, {

            type: "line",

            data: {

                labels: [

                    "Week 1",

                    "Week 2",

                    "Week 3",

                    "Week 4"

                ],

                datasets: [{

                    label: "Customers",

                    data: [

                        120,

                        180,

                        240,

                        320

                    ],

                    borderColor: "#17a2b8",

                    backgroundColor: "rgba(23,162,184,.2)",

                    fill: true,

                    tension: .4

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false

            }

        });

    }

});