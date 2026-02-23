// Function to display recently added products
function displayRecentlyAddedProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productContainer = document.getElementById('productContainer');

    // Clear the product container
    productContainer.innerHTML = '';

    // Check if there are any products to display
    if (products.length === 0) {
        productContainer.innerHTML = "<p>No recently added products.</p>"; // Message if no products
    } else {
        // Loop through the products and create HTML elements
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <p>${product.description}</p>
            `;
            productContainer.appendChild(productDiv);
        });
    }
}

// Call the function to display recently added products when the page loads
document.addEventListener('DOMContentLoaded', displayRecentlyAddedProducts);