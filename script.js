// CART
let cart = [];

// CATEGORY SWITCH
function showCategory(category) {
  let categories = document.querySelectorAll('.category');

  categories.forEach(cat => {
    cat.style.display = "none";
  });

  let selected = document.getElementById(category);
  if (selected) {
    selected.style.display = "grid";
  }
}
function addToCart(name, price, image) {
  cart.push({ name, price, image });

  document.getElementById("popup-text").innerText =
    name + " added to cart 🛒";

  document.getElementById("cart-popup").style.display = "flex";
}


// CLOSE POPUP
function closePopup() {
  document.getElementById("cart-popup").style.display = "none";
}

function viewCart() {
  document.getElementById("cart-popup").style.display = "none";

  let cartDiv = document.getElementById("cart");
  let total = 0;

  cartDiv.innerHTML = "<h2>Your Cart</h2>";

  cart.forEach((item, index) => {
  cartDiv.innerHTML += `
    <div class="cart-item">
      <img src="${item.image}">
      <p>${item.name}</p>
      <p>₹${item.price}</p>

      <button onclick="removeItem(${index})" class="remove-btn">
        Remove ❌
      </button>
    </div>
  `;
  total += item.price;
});

  cartDiv.innerHTML += `
  <h3>Total: ₹${total}</h3>
  <button onclick="confirmOrder()" class="confirm-btn">
    Confirm Order
  </button>
`;
  // ✅ ADD THIS LINE (SCROLL FIX)
  cartDiv.scrollIntoView({ behavior: "smooth" });
}

// BUY NOW → WHATSAPP
function buyNow(name, price) {
  let message = `Hi, I want to buy:\n${name} - ₹${price}`;
  
  let phone = "919948136191"; // your number

  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
  window.open(url, "_blank");
}
function confirmOrder() {
  let message = "Hi, I want to order:\n\n";
  let total = 0;

  cart.forEach(item => {
    message += `${item.name} - ₹${item.price}\n`;
    total += item.price;
  });

  message += `\nTotal: ₹${total}`;

  let phone = "919948136191"; // your number

  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
function removeItem(index) {
  cart.splice(index, 1); // remove item

  viewCart(); // refresh cart
}
let selectedProduct = {};
let quantity = 1;

// OPEN BUY POPUP
function buyNow(name, price) {
  selectedProduct = { name, price };
  quantity = 1;

  document.getElementById("qty").innerText = quantity;
  document.getElementById("buy-name").innerText = name;

  document.getElementById("buy-popup").style.display = "flex";
}

// INCREASE
function increaseQty() {
  quantity++;
  document.getElementById("qty").innerText = quantity;
}

// DECREASE
function decreaseQty() {
  if (quantity > 1) {
    quantity--;
    document.getElementById("qty").innerText = quantity;
  }
}

// CLOSE
function closeBuyPopup() {
  document.getElementById("buy-popup").style.display = "none";
}

// CONFIRM → WHATSAPP
function confirmBuy() {
  let total = selectedProduct.price * quantity;

  let message = `Hi, I want to buy:\n\n${selectedProduct.name}\nQuantity: ${quantity}\nTotal: ₹${total}`;

  let phone = "919948136191";

  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

  closeBuyPopup();
}