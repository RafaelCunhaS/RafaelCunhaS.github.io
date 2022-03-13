/* eslint-disable max-len */

const orders = [];
const addOrder = (string) => orders.push(string);

const createMenu = (obj) => ({
  fetchMenu: () => obj, 
  consumption: orders, 
  order: addOrder,
  pay: () => {
    let total = 0;
    for (let i = 0; i < orders.length; i += 1) {
      if ((Object.keys(obj.food)).includes(orders[i])) {
        total += obj.food[orders[i]];
      }
      if (Object.keys(obj.drink).includes(orders[i])) {
        total += obj.drink[orders[i]];
      }
    }
    return total + (total * 0.1);
  },
});

module.exports = createMenu;
