function getAnswer() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(42), 2000);
  });
}

const getAnswerToEverything = async () => {
  console.log("getting the answer..."); //1
  const answer = await getAnswer();
  console.log(`The answer is ${answer}.`); //2
};

getAnswerToEverything();
console.log("We are done.");  //3