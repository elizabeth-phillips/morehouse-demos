const {add, subtract, multiply, divide} = require('./calculator');
const assert = require('assert');

describe("#add",()=>{
    describe("Given 2 and 2", ()=>{ 
        const result = add(2,2)
        it("Then it should return 4",()=>{ 
            const expected = 4;
            assert(expected === result);
        })
    })
    describe("Given 2 and a string character", ()=>{
        // Negative testing
        // Call the function
        it("should return a number error",()=>{
            // Assert the results
            // const result = () => add(2,"b");
            // const expected = {message: "\"b\" is not a number"};
            // assert(expected.message === result.message);
            const result = () => add(2,"b");
            expect(result).toThrowError(new Error("\"b\" is not a number"));
        })
    })
})