function slowAdder(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a)) {
            reject(new Error(`${a} is not a number`));
        }
        if (isNaN(b)) {
            reject(new Error(`"${b}" is not a number`));
        }
        setTimeout(() => resolve(a + b), 1000);
    });
}

module.exports = {slowAdder}