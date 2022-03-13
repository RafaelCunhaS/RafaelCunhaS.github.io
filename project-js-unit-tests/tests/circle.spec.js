/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    expect(circle('string')).not.toBeDefined();
    expect(typeof circle(3)).toBe('object');
    expect(Object.entries(circle(3)).length).toBe(3);
    expect(circle()).not.toBeDefined();
    expect(circle(2).circumference).toBeCloseTo(12.56);
    expect(circle(3).area).toBeCloseTo(28.26);
    const result = circle(3);
    result.area = Number(circle(3).area.toFixed(2));
    expect(result).toEqual({radius: 3, area: 28.26, circumference: 18.84});
  });
});
