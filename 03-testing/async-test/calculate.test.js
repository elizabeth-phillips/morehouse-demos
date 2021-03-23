const {slowAdder} = require('./calculate');

describe("#slowAdder",()=>{
    describe("Given 2 and 2", ()=>{ 
        it("Then it should return 4",async ()=>{
            //Place the expect in the .then
            let result = await slowAdder(2,2);
            expect(result).toBe(4);
        })
    })
    describe("Given 2 and a string character", ()=>{
        it("should return a number error",async()=>{
            //Place the expect in the .catch
            try{
                await slowAdder(2,"b")
            }
            catch(err){
                expect(err).toStrictEqual(new Error("\"b\" is not a number"))
            }
        })
    })
})