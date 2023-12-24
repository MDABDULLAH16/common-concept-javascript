function helloThis() {
  //   "use strict"; ai mode a kaj korbe na (this.rohim variable)
  this.rohim = "rohim mia";
  console.log(rohim);
}

helloThis();

var a = 10;

let name = "abdullah";
function myName() {
  var welcome = "hello ";
  second();
  console.log(welcome + name);
}
function second() {
  let welcome2 = "Hi ";
  third();
  console.log(welcome2 + name);
}
function third() {
  let welcome3 = "Hey! ";
  console.log(welcome3 + name);
}
myName();

function argu(a, b, c) {
  const arg = arguments;
  console.log(arg);
  const sum = a + b + c;
  return sum;
}
const total = argu(2, 3, 4, 6, 7);
console.log(total);
