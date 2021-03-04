const {slowAdder} = require('./calculate');

describe("#slowAdder",()=>{
    describe("Given 2 and 2", ()=>{ 
        it("Then it should return 4",()=>{
            //Place the expect in the .then
            return slowAdder(2,2).then((r)=>{
                expect(r).toBe(4);
            }) 
        })
    })
    describe("Given 2 and a string character", ()=>{
        it("should return a number error",()=>{
            //Place the expect in the .catch
            return slowAdder(2,"b").catch((err)=>{
                expect(err).toStrictEqual(new Error("\"b\" is not a number"))
            }) 
        })
    })
})