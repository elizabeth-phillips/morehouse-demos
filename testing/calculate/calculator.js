function add(a, b){
    if (isNaN(a)) {
        throw new Error(`${a} is not a number`);
    }
    if (isNaN(b)) {
        throw new Error(`"${b}" is not a number`);
    }
    return a + b;
}

function subtract(a, b){
    if (isNaN(a)) {
        throw new Error(`${a} is not a number`);
    }
    if (isNaN(b)) {
        throw new Error(`"${b}" is not a number`);
    }
    return a - b;
}

function multiply(a, b){
    if (isNaN(a)) {
        throw new Error(`${a} is not a number`);
    }
    if (isNaN(b)) {
        throw new Error(`"${b}" is not a number`);
    }
    return a * b;
}

function divide(a, b){
    if (isNaN(a)) {
        throw new Error(`${a} is not a number`);
    }
    if (isNaN(b)) {
        throw new Error(`"${b}" is not a number`);
    }
    if (b == 0){
        throw new Error(`Cannot divide by 0`);
    }
    return a / b;
}

module.exports = {add, subtract, multiply, divide};