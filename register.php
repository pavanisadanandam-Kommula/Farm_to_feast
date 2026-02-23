<?php
// register.php

// Database connection parameters
$servername = "localhost"; // Change if necessary
$username = "root"; // Change if necessary
$password = ""; // Change if necessary
$dbname = "organic_connect";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $full_name = $_POST['full_name'];
    $phone_number = $_POST['phone_number'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password
    $user_type = $_POST['user_type'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO users (full_name, phone_number, email, password, user_type) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $full_name, $phone_number, $email, $password, $user_type);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Registration successful!";
        // Redirect to a success page or login page
        header("Location: success.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
}

// Close the connection
$conn->close();
?>