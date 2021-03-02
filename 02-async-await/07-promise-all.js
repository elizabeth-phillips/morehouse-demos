// resolve and reject example

const favColor = (color) => {
    return new Promise((resolve, reject) => {
        let getColor;
        setTimeout(() => {
            getColor = color;
            if (getColor === "red") {
                resolve(console.log(`My favorite color is ${color}.`))
            } else {
                reject(console.log(`${color} is NOT my favorite color.`));
            }
        },3000);
    })
};

async function runner(){
    try{
        let fulfilled = await Promise.all([favColor("red"), favColor("blue"), favColor("purple")])
        console.log(fulfilled())
    } catch(err){
        err()
    }
    // .then(fulfilled => fulfilled)
    // .catch(rejected  => rejected)
}
runner()