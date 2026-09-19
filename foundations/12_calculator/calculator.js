const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(arr) {
  return arr.length === 0? 0:
    arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function(num, exponent) {
	let acc = 1;
  for(let i = 0; i < exponent; i++){
    acc = acc * num;
  };

  return exponent === 0? 1:
    exponent === 1? num:
    acc;
};

const factorial = function(num) {
	let acc = 1;
  for(let i = 1; i <= num; i++){
    acc = acc * i;
  };

  return acc;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
