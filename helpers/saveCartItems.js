const saveCartItems = () => {
  const savedItems = document.querySelector('.cart__items');
  localStorage.setItem('cartItems', savedItems.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
