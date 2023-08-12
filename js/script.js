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

const tagsInString =
  "shirt shirts pant pants watch watches tshirt tshirts t-shirt t-shirts";

const tagsArray = tagsInString.split(" ");
console.log(tagsArray);

const section_title = "men's apparel";

const toCapitalize = (title) => {
  const splitedTitle = title.split(" ");

  return `${title.slice(0, 1).toUpperCase()}${splitedTitle[0]
    .slice(1)
    .toLowerCase()} ${splitedTitle[1]
    .slice(0, 1)
    .toUpperCase()}${splitedTitle[1].slice(1).toLowerCase()}`;
};

console.log(toCapitalize(section_title));

const h1 = document.querySelector(".title");
h1.innerHTML = "Node.js V20.5";
