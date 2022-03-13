const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  const { specie, sex } = animal;
  const animalFound = data.species.find((obj) => obj.name === specie);
  if (!sex) {
    return animalFound.residents.length;
  }
  return animalFound.residents.filter((obj) => obj.sex === sex).length;
}

module.exports = countAnimals;
