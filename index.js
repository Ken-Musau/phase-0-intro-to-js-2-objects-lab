// Write your solution in this file!
const employee = { name: "Kennedy", streetAdress: "Kitengela" };

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmpl = { ...employee };
  newEmpl[key] = value;
  return newEmpl;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmpl = { ...employee };
  delete newEmpl[key];
  return newEmpl;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
