// resolve and reject example

const favColor = (color) => {
    return new Promise((resolve, reject) => {
        let getColor;
        setTimeout(() => {
            getColor = color;
            if (getColor === "red") {
                resolve(console.log(`My favorite color is ${color}.`))
            } else {
                reject(`${color} is NOT my favorite color.`);
            }
        },3000);
    })
};

async function runner(){
    try{
        await Promise.all([favColor("red"), favColor("blue"), favColor("purple")])
    } catch(err){
        console.log(err);
    }
}
runner();