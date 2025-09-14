async function loadProducts() {
  const response = await fetch("assets/data/products.json");
  const products = await response.json();
  const container = document.getElementById("products-container");

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p class="price">${product.price}</p>
      <button onclick="window.open('${product.payment}', '_blank')" class="btn-buy">
        💳 Buy Now
      </button>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadProducts);
