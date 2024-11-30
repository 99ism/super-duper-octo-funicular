// Function to calculate and update the result
function updateResult() {
    // Get input values
    const yard = parseFloat(document.getElementById("yard").value) || 0;
    const inch = parseFloat(document.getElementById("inch").value) || 0;

    // Convert inches to yards (1 yard = 36 inches)
    const totalYards = yard + (inch / 36);

    // Display the result
    document.getElementById("result").textContent = `Total in Yards: ${totalYards.toFixed(2)}`;
}

// Add event listeners to input fields
document.getElementById("yard").addEventListener("input", updateResult);
document.getElementById("inch").addEventListener("input", updateResult);
