const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const employee = data.employees;
  return employee.find((obj) => obj.firstName === employeeName || obj.lastName === employeeName);
}

module.exports = getEmployeeByName;
