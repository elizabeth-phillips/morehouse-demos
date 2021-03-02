async function greeting(name){
    if (typeof(name) === String) return `Howdy ${name}`;
    else throw new TypeError('Please give a string')
}

greeting('Morehouse');