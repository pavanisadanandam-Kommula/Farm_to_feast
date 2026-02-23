// upload_product.js

document.getElementById('uploadProductForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the product details from the form
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').value;

    // Create a new product card
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    // Add product details to the card
    productCard.innerHTML = `
        <img src="${productImage}" alt="${productName}">
        <h3>${productName}</h3>
        <p>${productDescription}</p>
        <p>Price: $${productPrice}</p>
    `;

    // Append the product card to the recently added container
    document.getElementById('recentlyAddedContainer').appendChild(productCard);

    // Clear the form fields
    document.getElementById('uploadProductForm').reset();
});