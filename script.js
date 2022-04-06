const listCart = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.remove();
  const clean = '';
  localStorage.setItem('cartItems', clean);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const generatingElementsProducts = async () => {
  const { results } = await fetchProducts('computador');
    results.forEach(({ id: sku, title: name, thumbnail: image }) => {
      const sectionProducts = createProductItemElement({ sku, name, image });
      const items = document.querySelector('.items');
      items.appendChild(sectionProducts);
    });
};

const generatingCartItem = async (idElement) => {
  const { id: sku, title: name, price: salePrice } = await fetchItem(idElement);
  const addedItem = createCartItemElement({ sku, name, salePrice });
  addedItem.addEventListener('click', cartItemClickListener);
  listCart.appendChild(addedItem);
  saveCartItems(listCart.innerHTML);
};

const addCartButton = () => {
  const buttons = document.querySelectorAll('.item__add');
  buttons.forEach((button) => { 
    button.addEventListener('click', (event) => {
      const idElement = getSkuFromProductItem(event.target.parentNode);
      generatingCartItem(idElement);
    });
  });
};

const deleteWholeCart = () => {
  listCart.innerHTML = '';
};

const deleteButtonlistener = () => {
  const button = document.querySelector('.empty-cart');
  button.addEventListener('click', deleteWholeCart);
};

const addListenerToLoadedCartIts = () => {
  const returnedList = document.querySelectorAll('.cart__item');
  returnedList.forEach((node) => node.addEventListener('click', cartItemClickListener));
};

const loadSavedCartItems = () => {
  listCart.innerHTML = getSavedCartItems();
  addListenerToLoadedCartIts();
};

window.onload = async () => {
  await generatingElementsProducts();
  await addCartButton();
  deleteButtonlistener();
  loadSavedCartItems();
};
