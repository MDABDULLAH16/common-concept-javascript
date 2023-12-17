// we call anything sent for perameter. like: string, number,object,array & also functions;
//perameter thakbe function, and ja mon chay tay likhe access niye call kore dibe with second perameter;
function greeting(callbackFunc, name) {
  callbackFunc(name);
}
function greetingHandler(name) {
  console.log("good morning", name);
}
function goodEvining(name) {
  console.log("good Evening", name);
}
function GoodNight(massage) {
  console.log("mama", massage);
}
greeting(greetingHandler, "tom hanks");
greeting(greetingHandler, "tom hanry");
greeting(goodEvining, "sulaiman kaka");
greeting(GoodNight, "good Night");

//real example
document.getElementById("search-btn").addEventListener("click", function () {
  //here function is call back functions
});
