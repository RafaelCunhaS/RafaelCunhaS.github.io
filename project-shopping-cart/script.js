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

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Add to cart!'));
  return section;
}

function cartItemClickListener(event) {
  event.target.remove();
}

function addOrSub(fetched, add) {
  const totalPrice = document.querySelector('.total-price');
  let total = Number(totalPrice.innerText.replace(/[^0-9.-]+/g,""));
  if (add) total += Number(fetched.price);
  else total -= Number(fetched.price);
  totalPrice.innerText = `Total: $${Number(total.toFixed(2))}`;
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  li.addEventListener('click', async () => {
    addOrSub(await fetchItem(sku), false);
  });
  return li;
}

function createTotalPrice() {
  const prices = document.createElement('span');
  prices.className = 'total-price';
  document.querySelector('.cart').appendChild(prices);
}

const cart = document.querySelector('.cart__items');

const addListener = () => {
  document.querySelectorAll('.item__add').forEach((e) => {
    e.addEventListener('click', async ({ target }) => {
      const id = target.parentNode.firstChild.innerText;
      const fetched = await fetchItem(id);
      const item = createCartItemElement(fetched);
      cart.appendChild(item);
      saveCartItems(cart.innerHTML);
      addOrSub(fetched, true);
    });
  });
};

document.querySelector('.empty-cart').addEventListener('click', () => {
  while (cart.firstChild) cart.firstChild.remove();
  document.querySelector('.total-price').innerText = '';
});

function showLoading() {
  const loader = document.createElement('div');
  loader.innerText = 'Loading...';
  loader.className = 'loading';
  document.querySelector('.items').appendChild(loader);
}

function hideLoading() {
  document.querySelector('.loading').remove();
}

window.onload = async () => {
  showLoading();
  const section = document.querySelector('.items');
  const data = await fetchProducts('computador');
  data.results.forEach((obj) => {
    section.appendChild(createProductItemElement(obj));
  });
  hideLoading();
  addListener();
  const items = getSavedCartItems();
  cart.innerHTML = items;
  document.querySelectorAll('.cart__item').forEach((e) => {
    e.addEventListener('click', cartItemClickListener);
  });
  createTotalPrice();
};
