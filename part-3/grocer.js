// set globals

var cart = {
  items : [],
  total: 0
}

// setup listeners

// add to cart
var addToCartButtons = document.getElementsByClassName("add2cart");
Array.from(addToCartButtons).forEach((el) => {
  el.addEventListener("click", (button) => {
    addToCart(button);
  })
})

// open modal
document.getElementById("cart-button").addEventListener("click", () => {
  openModal();
})

window.addEventListener("click", (el) => {
  if (el.target == document.getElementById("modalClose") ) {
    closeModal();
  }
})

function addToCart(el) {
  var name = el.target.parentElement.getElementsByClassName("item-name")[0].textContent;
  var price = el.target.parentElement.getElementsByClassName("item-price")[0].textContent;
  cart.total = 0;

  cart.items.push({
    'name' : name,
    'price' : price.substr(1)
  });

  cart.items.forEach((item) => {
    cart.total += parseFloat(parseInt(item.price*100)/100);
  });
  document.getElementById("cart-item-count").innerText = '(' + cart.items.length + ')';
}

function openModal() {
  console.log('open')
  document.getElementById("modal").style.display = 'block';
  populateCart();
}

function closeModal() {
  console.log('close')
  document.getElementById("modal").style.display = 'none';
}
