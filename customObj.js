const customObj = {
  name: "Abdullah",
  age: 20,
  job: "Student",
  msg: function () {
    console.log("My name is " + this.name);
  },
};
// customObj.msg();
const customObj2 = {
  name: "Abdullah",
  age: 20,
  job: "Student",
  msg: {
    name: "Nishu ",
    age: 19,
    value() {
      console.log(this.name + "is my Janu!!");
    },
  },
};
customObj2.msg.value.call(customObj2);
