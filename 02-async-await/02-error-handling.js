async function hello(name) {
  if(typeof(name) == 'string') {
    return `hello ${name}`; // Promise.resolve(`hello ${name}`)
    /*
    new Promise((resolve) => resolve(`hello ${name}`))
    */
  } else {
    return new TypeError("Bad"); // Promise.reject("Bad")
    /*
    new Promise((resolve, reject) => reject(`hello ${name}`))
    */
  }
};

hello(123)
  .then(val => console.log(val))
  .catch(err => console.log(err.message))