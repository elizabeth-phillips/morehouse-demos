let isZero = function(x){
  return new Promise(function(myResolve, myReject) {
    if (x == 0 && typeof(x) === Number) {
      // if the value is 0 and a number, resolve with the message of "OK"
      myResolve("OK");
    } else {
      // if the value is not 0 or a number, reject with the message of "Error"
      myReject("Error");
    }
  });
}

isZero(0)
    .then((value) => console.log(value))
    .catch((error) => console.log(error.message))
