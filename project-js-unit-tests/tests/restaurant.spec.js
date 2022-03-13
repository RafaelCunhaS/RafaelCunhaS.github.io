const createMenu = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(typeof createMenu().fetchMenu).toBe('function');

    const menu = createMenu({ food: { coxinha: 3.9, sopa: 9.9 }, drink: { agua: 3.9, cerveja: 6.9 } });

    expect(Object.keys(menu.fetchMenu())).toEqual(['food', 'drink']);
    expect(menu.fetchMenu()).toEqual({ food: { coxinha: 3.9, sopa: 9.9 }, drink: { agua: 3.9, cerveja: 6.9 } });
    expect(Array.isArray(createMenu().consumption)).toBe(true && createMenu().consumption.length === 0);

    menu.order('coxinha');

    expect(menu.consumption).toEqual(['coxinha']);

    menu.order('coxinha');

    expect(menu.consumption).toEqual(['coxinha', 'coxinha']);
    expect(menu.pay()).toBe(8.58);

    menu.order('agua');
    menu.order('cerveja');
    menu.order('sopa');

    expect(menu.pay()).toBe(31.35);
  });
});
