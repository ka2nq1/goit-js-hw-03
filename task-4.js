const countTotalSalary = function(employees) {
    const values = Object.values(employees)
    let total = 0;
    for (const value of values) {
        total += value
    }
    return total;
};

const developers = {
    mango: 300,
    poly: 250,
    alfred: 450,
};
console.log(countTotalSalary(developers));

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
}
console.log(countTotalSalary(supports));
