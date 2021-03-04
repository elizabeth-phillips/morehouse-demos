const {Lumber} = require('./lumber');
const assert = require('assert');

describe("#Lumber", function() {
	let myLumber;
	beforeEach(() => {
		myLumber = new Lumber('oak', 12.75, 5, 2, 60);
	})
	describe("With (W, H, L) = (5, 2, 60)", function() {
		it("should be have area of 600", function() {
			// let myLumber = new Lumber('oak', 12.75, 5, 2, 60);
			expect(myLumber.lumberArea()).toBe(600)
		})

		it("should be $0.02125 per square inch", function() {
			// let myLumber = new Lumber('oak', 12.75, 5, 2, 60);
			let actual = myLumber.pricePerSqInch()
			expect(actual).toBe(0.02125)
		})

		it("should shorten the lumber 2 inches", function() {
			// let myLumber = new Lumber('oak', 12.75, 5, 2, 60);
			myLumber.cutUp(2)
			assert(myLumber.length == 58)
			// expect(myLumber.length).toBe(58)
		})

		it("should throw an error", function() {
			let myLumber = new Lumber('oak', 12.75, 5, 2, 60);
			let actual = () => myLumber.cutUp(62);
			expect(actual).toThrowError(new Error('62 is too long'));
		})
	})
})