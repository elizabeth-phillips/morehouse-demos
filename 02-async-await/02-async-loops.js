const clock = { seconds: 0, minutes: 0 };

const timer = (milliseconds) => {
  // declare a `timer` utility which returns a 'pending' promise.
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

let move = async (clock) => {
  // declare our `async` function.
  for (let i = 1; i <= 10; i++) {
    clock.seconds = i;
    console.log("Seconds: ", clock.seconds);
    await timer(1000); // calls `timer` and `await`s for the Promise to resolve.
  }
  console.log("This line is blocked until the for loop completes");
};

move(clock);