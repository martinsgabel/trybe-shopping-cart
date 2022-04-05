const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    const htmlLine = '<ol><li>Item</li></ol>';
    saveCartItems(htmlLine);

    expect(localStorage.setItem).toHaveBeenCalled();
  })

  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro cartItems e o segundo sendo o valor passado como argumento para saveCartItems.', () => {
    const htmlLine = '<ol><li>Item</li></ol>';
    saveCartItems(htmlLine);
    const params = 'cartItems'
    const params1 = savedItems.innerHTML;

    expect(localStorage.setItem).toHaveBeenCalledWith(params, params1)
  })
});
