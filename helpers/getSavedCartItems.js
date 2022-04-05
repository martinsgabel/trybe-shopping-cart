const getSavedCartItems = () => {
  const savedItems = localStorage.getItem('cartItems');
  const cartList = document.querySelector('.cart__items');
  cartList.innerHTML = savedItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
