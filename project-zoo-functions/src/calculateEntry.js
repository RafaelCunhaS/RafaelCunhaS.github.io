const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((accObj, entrant) => {
    const obj = accObj;
    if (entrant.age < 18) {
      obj.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      obj.adult += 1;
    } else {
      obj.senior += 1;
    }
    return obj;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  return (child * data.prices.child) + (adult * data.prices.adult) + (senior * data.prices.senior);
}

module.exports = { calculateEntry, countEntrants };
