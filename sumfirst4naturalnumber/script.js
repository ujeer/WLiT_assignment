// Using Callback
function sumFirstFourCallback(callback) {
  let sum = 0;
  for (let i = 1; i <= 4; i++) {
      sum += i;
  }
  callback(sum);
}

sumFirstFourCallback(function(result) {
  document.getElementById('callback-result').innerHTML = "Callback:<br> The sum of first four natural number is: " + result;
  console.log(result);
});

// Using Promises
function sumFirstFourPromise() {
  return new Promise((resolve, reject) => {
      let sum = 0;
      for (let i = 1; i <= 4; i++) {
          sum += i;
      }
      resolve(sum); 
  });
}

sumFirstFourPromise()
  .then(result => {
      document.getElementById('promise-result').innerHTML = "Promise: <br> The sum of first four natural number is: " + result;
      console.log("Promise: The sum is:", result);
  })
  .catch(error => {
      console.log("Error:", error);
  });

// Using Async/Await
async function sumFirstFourAsync() {
  const sum = await sumFirstFourPromise(); // Reusing the promise function
  document.getElementById('async-await-result').innerHTML = "Async/Await:<br> The sum of first four natural number is: " + sum;
  console.log( sum);
}

sumFirstFourAsync();
