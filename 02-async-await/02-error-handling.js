function hello(name) {
  if(typeof(name) === String) {
    return Promise.resolve(`hello ${name}`) 
  } else {
    return Promise.reject("Bad")
  }
};

hello('hi')
  .then(val => console.log(val))
  .catch(err => console.log(err))