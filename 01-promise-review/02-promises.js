function getData() {
  const data = [1, 2, 3];
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
}

function processData() {
    // get the data from getData
    // if getData resolves, output the sum of all of the numbers
    // if getData rejects, output "Error getting data:" and list the error message
  getData()
      .then(nums => console.log(nums.reduce((acc, num) => acc + num, 0)))
      .catch(err => console.log(err));
  console.log("I wait for anyone.");
}

processData();

console.log("I wait for no one.");