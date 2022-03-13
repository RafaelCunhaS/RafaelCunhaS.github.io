const data = require('../data/zoo_data');

const oldest = (param) => param.residents.reduce((acc, ages) => (acc.age > ages.age ? acc : ages));

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((obj) => obj.id === id).responsibleFor[0];
  const specie = data.species.find((obj) => obj.id === employee);
  return Object.values(oldest(specie));
}

module.exports = getOldestFromFirstSpecies;
