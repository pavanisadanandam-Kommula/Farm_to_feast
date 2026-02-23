document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const userType = document.getElementById('userType').value;

    if (userType === 'farmer') {
        // Navigate to the upload product page
        window.location.href = 'upload-product.html';
    } else if (userType === 'customer') {
        // Handle customer registration (you can add your logic here)
        alert('Customer registration is not implemented yet.');
    }
});
// Add an event listener to the logout button
document.getElementById("logoutButton").addEventListener("click", function() {
    // Show a confirmation dialog
    var userChoice = confirm("Do you want to logout?");
    
    // Check the user's choice
    if (userChoice) {
        // If the user clicks "Yes", redirect to the logout URL
        window.location.href = "logout_url"; // Replace with your actual logout URL
    } else {
        // If the user clicks "No", log a message or perform another action
        console.log("User  chose to stay.");
    }
});