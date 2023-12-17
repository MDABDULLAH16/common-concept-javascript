let a;
// console.log(a);

// 2. if  no return from function
function two(a, b) {
  const total = a + b;
  //   console.log(a, b);
}

const result = two(2, 3);
// console.log(result);

// 3. if no return anything inside functions
function third(a, b) {
  if (a > 2 || b > 3) total = a + b;
  return;
}
const thirdResult = third(3, 5);
// console.log(thirdResult);

// 4 +5 = try to access properties which is doesn't existing arry & objects same same hare

const forth = { job: "marketing", ages: 22, work: "8hr", city: "newYork" };
const salary = forth.salary;
// console.log(salary);
// console.log(forth);
//  6. delete from array by delete method. its make a holl on array, don't do it.
const array = ["januay", "feb", "march", "september", "april", "may"];
delete array[1];
// console.log(array);

const seven = undefined;
// console.log(seven);
// variable assing korci but chaytesina undefined thakuk or error asuk. tay null is best solutions
const eight = null;
console.log(eight);
