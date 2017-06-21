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

// open modal
document.getElementById("clearButton").addEventListener("click", () => {
  clearCart();
})

window.addEventListener("click", (el) => {
  if (el.target == document.getElementById("modalClose") ) {
    closeModal();
  }
})

function addToCart(el) {
  var name = el.target.parentElement.getElementsByClassName("item-name")[0].textContent;
  var price = el.target.parentElement.getElementsByClassName("item-price")[0].textContent;

  cart.items.push({
    'name' : name,
    'price' : price.substr(1)
  });
  updateCart();
}

function updateCart() {
  cart.total = 0;
  cart.items.forEach((item) => {
    cart.total += (parseInt(item.price*100));
  });
  cart.total = formatAmount(cart.total/100);
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

function populateCart() {
  var html = '';
  if (cart.items.length) {
    cart.items.forEach((item) => {
      html+=
      '<div class="flex cart-line-item">' +
      '<div class="flex-column cart-line-item-title">' + item.name + '</div>' +
      '<div class="flex-column cart-line-item-price">' + formatAmount(item.price) + '</div>' +
      '</div>'
    })
    document.getElementById('cartDisplayTotal').innerText = formatAmount(cart.total);
    document.getElementById('total').style.display = 'flex';
  } else {
    html = '<p>No items in cart.</p>';
    document.getElementById('total').style.display = 'none';
  }
  document.getElementById('line-items').innerHTML = html;
}

function clearCart() {
  closeModal();
  cart.items = [];
  updateCart();
}

function formatAmount(amount) {
  if (typeof amount == 'string') {
    amount = amount.replace(/\$/g,'');
  }
  var showZero = '';
  if ((amount * 10) == parseInt(amount * 10)) {
    showZero = '0';
  }
  if ((amount) == parseInt(amount)) {
    showZero = '.00';
  }
  return '$' + amount + showZero;
}