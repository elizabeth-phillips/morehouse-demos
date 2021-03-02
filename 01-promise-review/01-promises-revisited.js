let isZero = async function(x){
  if (x == 0 && typeof(x) === Number) {
      // if the value is 0 and a number, resolve with the message of "OK"
    return "OK";
  } else {
    // if the value is not 0 or a number, reject with the message of "Error"
    throw new Error("Error");
  }
}

isZero(0)
    .then((value) => console.log(value))
    .catch((error) => console.log(error.message))