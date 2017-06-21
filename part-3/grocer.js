// set globals

var cart = new Cart();

// setup listeners

// add to cart
var addToCartButtons = document.getElementsByClassName("add2cart");
Array.from(addToCartButtons).forEach((el) => {
  el.addEventListener("click", (button) => {
    cart.addToCart(button);
  })
})

// open modal
document.getElementById("cart-button").addEventListener("click", () => {
  cart.openModal();
})

// open modal
document.getElementById("clearButton").addEventListener("click", () => {
  cart.clearCart();
})

window.addEventListener("click", (el) => {
  if (el.target == document.getElementById("modalClose") ) {
    cart.closeModal();
  }
})
