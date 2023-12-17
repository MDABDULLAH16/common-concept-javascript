function closureDemo() {
  //   console.log(massage);
  let house = "grandpaHouse";
  function parants(car) {
    // let car = "tesla";
    console.log(car);
    function Children() {
      let bike = "palsure";
      console.log("i hava a ", house, car, bike);
    }
    return Children;
  }
  return parants;
}
closureDemo("Hello, closure!")("Tesla")("palsure");

const Childrens = closureDemo("hello closure demo");
const parants = closureDemo("tesla");

const chilFunc = closureDemo();

// console.log(parants());

function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const w = stopWatch();

// console.log(w());
