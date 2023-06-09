require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })
  
  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    await fetchProducts('computador');

    expect(fetch).toHaveBeenCalled();
  })

  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint determinado', async () => {      
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

    await fetchProducts('computador');

    expect(fetch).toHaveBeenCalledWith(endpoint);
  })

  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const response = await fetchProducts('computador');

    expect(response).toEqual(computadorSearch);
  })

  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url. Dica: Lembre-se de usar o new Error(mensagem esperada aqui) para comparar com o objeto retornado da API.', async () => {
    const response = await fetchProducts();

    expect(response).toEqual(new Error('You must provide an url'))
  })
});
