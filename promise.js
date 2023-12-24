const getData = new Promise((resolve, reject) => {
  const sum = Math.random() * 10;
  console.log(sum);
  if (sum < 5) {
    resolve(45555);
  } else {
    reject("No data available");
  }
});
getData.then((data) => console.log(data)).catch((err) => console.log(err));
