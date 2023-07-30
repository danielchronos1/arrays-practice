console.log('1. Create a “groceries list” array. Each element of the array is an object that contains the name of a product, an amount needed and whether it is bought or not. Write a few functions for working with this array. ');

const groceriesList = [];

function addPurchase(productName, amount, bought) {
  const purchase = {
    productName: productName,
    amount: amount,
    bought: bought,
  };

  let existingPurchase = groceriesList.find((p) => p.productName === productName);

  if (existingPurchase) {
    existingPurchase.amount += amount;
  } else {
    groceriesList.push(purchase);
  }
}

function displayGroceriesList() {
  const notBoughtPurchases = groceriesList.filter((p) => !p.bought);
  const boughtPurchases = groceriesList.filter((p) => p.bought);

  console.log("Not bought:");
  notBoughtPurchases.forEach((p) => console.log(`- ${p.productName}: ${p.amount}`));

  console.log("Bought:");
  boughtPurchases.forEach((p) => console.log(`- ${p.productName}: ${p.amount} (bought)`));
}

function purchaseProduct(productName) {
  const purchase = groceriesList.find((p) => p.productName === productName);

  if (!purchase) {
    return;
  }

  purchase.bought = true;
}


addPurchase("Milk", 1, false);
addPurchase("Eggs", 12, false);
addPurchase("Bread", 1, false);


displayGroceriesList();

purchaseProduct("Milk");

displayGroceriesList();

console.log('2. Create an array that describes a shop receipt. Each element of the array consists of the name of the product, an amount bought, and price per item. Write the following functions.');

const receipt = [
  [
    "Apples",
    2 + 1,
    1.5 + 1,
  ],
  [
    "Oranges",
    3 + 1,
    2 + 1,
  ],
  [
    "Milk",
    1 + 1,
    3 + 1,
  ],
];

function printReceipt() {
  console.log("Receipt");
  receipt.forEach((item) => {
    console.log(`  ${item[0]}: ${item[1]} * ${item[2]} = ${item[1] * item[2]}`);
  });
}

function getSum() {
  let sum = 0;
  receipt.forEach((item) => {
    sum += item[1] * item[2];
  });
  return sum;
}

function getMostExpensiveItem() {
  let mostExpensiveItem = receipt[0];
  receipt.forEach((item) => {
    if (item[1] * item[2] > mostExpensiveItem[2] * mostExpensiveItem[1]) {
      mostExpensiveItem = item;
    }
  });
  return mostExpensiveItem[0];
}

function getAverageItemPrice() {
  let sum = 0;
  let count = 0;
  receipt.forEach((item) => {
    sum += item[1] * item[2];
    count += item[1];
  });
  return sum / count;
}

printReceipt();
console.log("Sum: ", getSum());
console.log("Most expensive item: ", getMostExpensiveItem());
console.log("Average item price: ", getAverageItemPrice());

console.log('3. Create an array of css-styles (color, font size, alignment, underline etc.) Each element of the array is an object consisting of two properties: style name and style value, Write a function that accepts the style array and a text and puts out this text via document.write() in the <p></p> tags, adding the style attribute with all the styles in the array to the opening tag.');

const styles = [
  "color: red",
  "font-size: 32px",
  "text-align: center",
  "text-decoration: underline",
];

function addStyles(styles, text) {
  const p = document.createElement("p");
  p.style.cssText = styles.join("; ");
  p.innerHTML = text;
  document.body.appendChild(p);
}

addStyles(styles, "This is some text with styles.");

console.log('4. Create an array of academy classrooms. A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for. Write a few functions for working with it.');

const classrooms = [
  {
    name: "Classroom 1",
    seats: 10,
    faculty: "Computer Science",
  },
  {
    name: "Classroom 2",
    seats: 15,
    faculty: "Mathematics",
  },
  {
    name: "Classroom 3",
    seats: 20,
    faculty: "Physics",
  },
];

function displayAllClassrooms() {
  console.log("All classrooms:");
  classrooms.forEach((classroom) => {
    console.log(classroom);
  });
}

function displayClassroomsForFaculty(faculty) {
  console.log(`Classrooms for faculty ${faculty}:`);
  const classroomsForFaculty = classrooms.filter((classroom) => classroom.faculty === faculty);
  classroomsForFaculty.forEach((classroom) => {
    console.log(classroom);
  });
}

function displayClassroomsThatFitGroup(group) {
  console.log(`Classrooms that fit group ${group.name}:`);
  const classroomsThatFitGroup = classrooms.filter((classroom) => classroom.seats >= group.numberOfStudents);
  classroomsThatFitGroup.forEach((classroom) => {
    console.log(classroom);
  });
}

function sortClassroomsBySeats() {
  classrooms.sort((classroomA, classroomB) => classroomA.seats - classroomB.seats);
}

function sortClassroomsByName() {
  classrooms.sort((classroomA, classroomB) => classroomA.name.localeCompare(classroomB.name));
}

displayAllClassrooms();
displayClassroomsForFaculty("Computer Science");
const group = {
  name: "Group 1",
  numberOfStudents: 15,
  faculty: "Computer Science",
};
displayClassroomsThatFitGroup(group);
sortClassroomsBySeats();
sortClassroomsByName();