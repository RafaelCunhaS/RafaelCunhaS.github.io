const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails())).toBe(true);
    expect(productDetails().length).toBe(2);
    const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]' ? true : false;
    /* Source : https://attacomsian.com/blog/javascript-check-variable-is-object */
    expect(isObject(productDetails()[0]) && isObject(productDetails()[1])).toBe(true);
    const products = productDetails('água', 'detergente');
    expect(products[0]).not.toEqual(products[1]);
    expect(products[0]).toHaveProperty('details.productId', 'água123');
    expect(products[1]).toHaveProperty('details.productId', 'detergente123');
  });
});
