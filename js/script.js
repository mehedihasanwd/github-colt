const makeAdder = (a) => {
  return (b) => {
    return a + b;
  };
};

const addToFive = makeAdder(5);
const addToTen = addToFive(10);
console.log(addToTen);
