// Promise.all

function slowAdder(a, b) {
    console.log('a+b', a, b)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(a + b), 1000);
    });
}

async function runner(){
    const promises = [slowAdder(1, 2), slowAdder(3, 4), slowAdder(5, 6)];
    const data = await Promise.all(promises)
    console.log('data:', data)
    const sum = data.reduce((a, b) => a + b, 0);
    console.log('sum here', sum); 
}
runner();