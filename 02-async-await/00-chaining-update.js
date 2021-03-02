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
