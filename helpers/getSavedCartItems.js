const getSavedCartItems = () => {
  const savedItems = localStorage.getItem('cartItems');
  return savedItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
