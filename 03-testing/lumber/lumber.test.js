const {Lumber} = require('./lumber');
const assert = require('assert');

describe("#Lumber", function() {
	describe("With (W, H, L) = (5, 2, 60)", function() {
		let myLumber;
		beforeEach(() => {
			myLumber = new Lumber('oak', 12.75, 5, 2, 60);
		})
		it("should be have area of 600", function() {
			let result = myLumber.lumberArea();
			let expected = 600;
			expect(result).toBe(expected);
		})

		it("should be $0.02125 per square inch", function() {
			let result = myLumber.pricePerSqInch();
			let expected = 0.02125;
			expect(result).toBe(expected)
;		})

		it("should shorten the lumber 2 inches", function() {
		})

		it("should throw an error", function() {
		})
	})
})