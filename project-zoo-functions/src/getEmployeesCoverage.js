const data = require('../data/zoo_data');

const animals = (param) => data.species.filter((animal) => param.includes(animal.id));

const checkError = (check) => {
  if (check) throw new Error('Informações inválidas');
};

function getEmployeesCoverage(params) {
  if (!params) return data.employees.map(getEmployeesCoverage);
  const { name, id } = params;
  const employee = data.employees.find((obj) => obj.firstName === name || obj.lastName === name);
  const employeeId = data.employees.find((obj) => obj.id === id);
  checkError(!employee && !employeeId);
  const { firstName, lastName, responsibleFor } = employeeId || employee;
  return {
    id: employee ? employee.id : employeeId.id,
    fullName: `${firstName} ${lastName}`,
    species: animals(responsibleFor).map((obj) => obj.name),
    locations: animals(responsibleFor).map((obj) => obj.location),
  };
}

module.exports = getEmployeesCoverage;
