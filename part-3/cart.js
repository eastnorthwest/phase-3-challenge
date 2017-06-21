class Cart {

  constructor() {
    this.items = [];
    this.total = 0;
  }

  addToCart(el) {
    var name = el.target.parentElement.getElementsByClassName(
        "item-name")[0].textContent;
    var price = el.target.parentElement.getElementsByClassName(
        "item-price")[0].textContent;

    this.items.push({
      'name': name,
      'price': price.substr(1)
    });
    this.updateCart();
  }

  updateCart() {
    this.total = 0;
    this.items.forEach((item) => {
      this.total += (parseInt(item.price * 100));
    });
    this.total = this.formatAmount(this.total / 100);
    document.getElementById("cart-item-count").innerText = '('
        + this.items.length + ')';
  }

  openModal() {
    document.getElementById("modal").style.display = 'block';
    this.populateCart();
  }

  closeModal() {
    document.getElementById("modal").style.display = 'none';
  }

  populateCart() {
    var html = '';
    if (this.items.length) {
      this.items.forEach((item) => {
        html +=
            '<div class="flex cart-line-item">' +
            '<div class="flex-column cart-line-item-title">' + item.name
            + '</div>' +
            '<div class="flex-column cart-line-item-price">' + this.formatAmount(
                item.price) + '</div>' +
            '</div>'
      })
      document.getElementById('cartDisplayTotal').innerText = this.formatAmount(
          this.total);
      document.getElementById('total').style.display = 'flex';
    } else {
      html = '<p>No items in cart.</p>';
      document.getElementById('total').style.display = 'none';
    }
    document.getElementById('line-items').innerHTML = html;
  }

  clearCart() {
    this.closeModal();
    this.items = [];
    this.updateCart();
  }

  formatAmount(amount) {
    if (typeof amount == 'string') {
      amount = amount.replace(/\$/g, '');
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

}
