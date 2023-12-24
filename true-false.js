//cheek truthy falsy value is js

/*
// true
1. '0' is true
2. " "

// false
1. 0 is false like boolian type
2. "" is false
*/
// common method to cheek booth
let x = "";
if (x) {
  //   console.log("value is truty");
} else {
  //   console.log("value is false");
}

// optional to cheek true false value
// to cheek false
let y = {};
if (!y) {
  console.log(y, "is false");
}
//to cheek true
if (!!y) {
  console.log(y, "is truee");
}
