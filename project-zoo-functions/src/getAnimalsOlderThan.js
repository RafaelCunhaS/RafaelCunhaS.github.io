const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((obj) => obj.name === animal);
  return specie.residents.every((animals) => animals.age >= age);
}

module.exports = getAnimalsOlderThan;
