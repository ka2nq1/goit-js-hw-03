const findBestEmployee = function (employees) {
  const values = Object.values(employees)
  const valuesMax = Math.max(...values)
  for (const key in employees) {
  if (employees[key] === valuesMax) {
  return key
        }
    }
  return "";
};

const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}; 
console.log(findBestEmployee(developers)); 

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
}; 
console.log(findBestEmployee(supports));

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
}
console.log(findBestEmployee(sellers));