const makeAdder = (a) => {
  return (b) => {
    return a + b;
  };
};

const addToFive = makeAdder(5);
const addToTen = addToFive(10);
console.log(addToTen);

const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
