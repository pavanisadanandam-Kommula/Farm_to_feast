<?php
session_start();

if (isset($_GET['id'])) {
    $product_id = $_GET['id'];
    unset($_SESSION['cart'][$product_id]); // Remove item from cart
}

header("Location: cart.php"); // Redirect to cart page
exit();
?>