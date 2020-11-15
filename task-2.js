const countProps = function(obj) {
  const keys = Object.keys(obj).length;
  return keys
};
console.log(countProps({}));

console.log(countProps({a:1, b:1}));

console.log(countProps({a:1, b:1, c:1, d:1, e:1}));