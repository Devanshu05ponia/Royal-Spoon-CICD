// ==========================================
// ROYAL SPOON REPORTS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // Animated Counters
    // ==============================

    const counters = document.querySelectorAll(".report-card h2");

    counters.forEach(counter => {

        const text = counter.innerText;

        const target = parseInt(text.replace(/[^\d]/g, ""));

        if (isNaN(target)) return;

        let current = 0;

        const speed = Math.max(1, Math.ceil(target / 80));

        function updateCounter() {

            current += speed;

            if (current >= target) {

                current = target;

            }

            if (text.includes("₹")) {

                counter.innerText = "₹" + current.toLocaleString();

            }

            else {

                counter.innerText = current.toLocaleString();

            }

            if (current < target) {

                requestAnimationFrame(updateCounter);

            }

        }

        updateCounter();

    });

    // ==============================
    // Print Report
    // ==============================

    const printBtn = document.querySelector(".btn-primary");

    if (printBtn) {

        printBtn.addEventListener("click", () => {

            window.print();

        });

    }

    // ==============================
    // Export CSV
    // ==============================

    const excelBtn = document.querySelector(".btn-success");

    if (excelBtn) {

        excelBtn.addEventListener("click", () => {

            const csv =

`Month,Orders,Revenue,Growth
January,580,210000,+8%
February,640,245000,+12%
March,710,288000,+18%
April,760,315000,+10%
May,840,372000,+15%`;

            const blob = new Blob([csv], {

                type: "text/csv"

            });

            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");

            a.href = url;

            a.download = "RoyalSpoon_Report.csv";

            a.click();

            URL.revokeObjectURL(url);

        });

    }

    // ==============================
    // PDF Button
    // ==============================

    const pdfBtn = document.querySelector(".btn-warning");

    if (pdfBtn) {

        pdfBtn.addEventListener("click", () => {

            alert("PDF Export will be connected in Phase 2.");

        });

    }

});