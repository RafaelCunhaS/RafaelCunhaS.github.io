const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const checkSex = (a, b) => a.residents.filter((obj) => b.sex === obj.sex).map(({ name }) => name);

const map = (opt) => species.reduce((acc, animal) => {
  if (!acc[animal.location]) acc[animal.location] = [];
  const obj = {
    [animal.name]: opt.sex ? checkSex(animal, opt) : animal.residents.map(({ name }) => name),
  };
  if (opt.sorted) obj[animal.name].sort();
  acc[animal.location].push(obj);
  return acc;
}, {});

function getAnimalMap(options = {}) {
  if (options.includeNames) return map(options);
  return species.reduce((acc, animal) => {
    if (!acc[animal.location]) {
      const specie = species.filter(({ location }) => location === animal.location);
      acc[animal.location] = (specie.map((param) => param.name));
    }
    return acc;
  }, {});
}

module.exports = getAnimalMap;
