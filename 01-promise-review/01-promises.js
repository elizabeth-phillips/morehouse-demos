function myDisplayer(some) {
  console.log(some);
}

let isZero = function(x){
  return new Promise(function(myResolve, myReject) {
    if (x == 0 && typeof(x) === Number) {
      // if the value is 0 and a number, send a resolve with the message of "OK"
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
}

isZero(0)
    .then((value) => myDisplayer(value))
    .catch((error) => myDisplayer(error))