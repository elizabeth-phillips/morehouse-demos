function slowAdder(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof(a) !== 'number') {
                reject(new TypeError(`${a} is not a number.`));        // report an error
            }
            else if (typeof(b) !== 'number') {
                reject(new TypeError(`${b} is not a number.`));        // report an error
            }
            else {
                resolve(a + b);
            }
        }, 1000);
    });
}

<<<<<<< HEAD
<<<<<<< HEAD:02-async-await/00-chaining-update.js
=======
>>>>>>> c99f0de (Adds solutions)
async function runner(){
    try{
        let first = await slowAdder(3, 5);
        let second = await slowAdder(first, 'banana');   // error encountered, due to `banana` not being a number
        let third = await slowAdder(second, 20);   // this line is never executed as `banana` caused an error
        console.log(third);    // this line is never executed as well
    }
    catch(error){ 
        console.log('ERROR:', error.message)         // the error handler
    }
}

console.log("before runner");
runner();
console.log("after runner");
<<<<<<< HEAD
=======
slowAdder(3, 5)
    .then(first => slowAdder(first, 'banana'))   // error encountered, due to `banana` not being a number
    .then(second => slowAdder(second, 20))   // this line is never executed as `banana` caused an error
    .then(third => console.log(third))    // this line is never executed as well
    .catch(error => console.log('ERROR:', error));          // the error handler
>>>>>>> 2be84ed (Renames files to better fit content):02-async-await/01-chaining-update.js
=======
>>>>>>> c99f0de (Adds solutions)
