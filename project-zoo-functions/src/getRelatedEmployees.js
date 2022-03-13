const data = require('../data/zoo_data');

function isManager(id) {
  const employee = data.employees.find((obj) => id.includes(obj.id));
  return data.employees.some((obj) => obj.managers.includes(employee.id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const employees = data.employees.filter((obj) => obj.managers.includes(managerId));
  return employees.map((obj) => `${obj.firstName} ${obj.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
