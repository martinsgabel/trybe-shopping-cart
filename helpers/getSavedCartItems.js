const getSavedCartItems = () => {
  const savedItems = localStorage.getItem('cartItems');
  console.log(savedItems);
  return savedItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
