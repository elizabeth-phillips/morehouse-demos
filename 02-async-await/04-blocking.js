function getAnswer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(42), 2000);
  });
}

const getAnswerToEverything = async () => {
  console.log("getting the answer...");
  const answer = await getAnswer();
  console.log(`The answer is ${answer}.`);
};

getAnswerToEverything();
console.log("We are done."); 