// Define the rate chart as an array of objects
const rateChart = [
    { range: "0 - 10", rate: 10 },
    { range: "10 - 30", rate: 9 },
    { range: "30 - 50", rate: 8},
    { range: "50 and above", rate: 7}
];

// Populate the rate chart table dynamically
const rateChartTable = document.querySelector("#rateChart tbody");
rateChart.forEach((slab) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${slab.range}</td>
        <td>₹${slab.rate.toFixed(2)}</td>
    `;
    rateChartTable.appendChild(row);
});

// Calculate cost based on slabs
document.getElementById("calculateButton").addEventListener("click", function () {
    const units = parseFloat(document.getElementById("units").value);
    if (isNaN(units) || units < 0) {
        document.getElementById("result").textContent = "Please enter a valid positive number for units.";
        return;
    }

    let totalCost = 0;
    if (units < 10) {
        totalCost = units * 10;
    } else if (units <30) {
        totalCost = units*9;
    } else if (units <= 50) {
        totalCost = units*8;
    } else {
        totalCost = units*7;
    }

    document.getElementById("result").textContent = `Total Cost: ₹${totalCost.toFixed(2)}`;
});
document.getElementById('paymentMode').addEventListener('change', function () {
    const paymentDetails = document.querySelectorAll('.paymentDetails');
    paymentDetails.forEach(detail => detail.style.display = 'none'); // Hide all sections

    const selectedPayment = this.value;
    if (selectedPayment) {
        document.getElementById(`${selectedPayment}Section`).style.display = 'block'; // Show the selected section
    }
});
