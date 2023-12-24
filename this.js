// function helloThis() {
//   console.log(this);
// }

// var a = 10;
// helloThis();

let name = "abdullah";
function myName() {
  var welcome = "hello ";
  second();
  console.log(welcome + name);
}
function second() {
  let welcome2 = "Hi ";

  console.log(welcome2 + name);
}
myName();
