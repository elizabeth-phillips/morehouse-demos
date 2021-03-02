//Example 1
// a promise that resolves after 3 seconds

const p = function(){
    return new Promise((resolve) => {                // create a promise using the Promise constructor function
        setTimeout(() => resolve('this is some data'), 3000);     // call `resolve` when the data is ready
    });
}

async function runP(){
    p().then(data => {        // `.then` is executed when the promise is resolved
        console.log(data);
    }).catch(error => {     // `.catch` is executed if the promise is rejected
        console.log(error);
    });
}
runP();


//Example 2
const add = (x, y) => {
    return new Promise((resolve, reject) => {
        const error = false   //switch error to true. What happens?
        if (!error){
            setTimeout(() => resolve(console.log("hey y'all!", x + y)), 3000);
        } else {
            reject(console.log('No way!!!!'));
        }
    })
};

function runAdd(){
    add(7, 4)
        .then(console.log("Is it done?"))
        .then(data => data)
        .catch(error => error);    // `.catch` is executed if the promise is rejected
}
// runAdd();