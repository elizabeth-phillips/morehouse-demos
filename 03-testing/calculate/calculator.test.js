const {add, subtract, multiply, divide} = require('./calculator');
const assert = require('assert');

describe("#add",()=>{
    describe("Given 2 and 2", ()=>{
        const result = add(2, 2);
        it("Then it should return 4", ()=>{
            const expected = 4;
            expect(result).toBe(expected);
        })
    })
    describe("Given 2 and a string character", ()=>{
        it("Should return a number error", ()=> {
            const result = function(){
                add(2, "b");
            }
            expect(result).toThrowError(new Error("\"b\" is not a number"))
        })
    })
})

describe("#subtract", ()=>{
    //Given 2 and 2
    describe("Given 2 and 2", ()=> {
        //Then it should return 0
        const result = subtract(2, 2);
        it("Then it should return 0", ()=>{
            const expected = 0;
            expect(result).toBe(expected);
        })
    })
})