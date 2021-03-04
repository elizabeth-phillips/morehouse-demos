function Lumber(woodType='pine', price=0, width=4, height=2, length=8) {
	this.woodType = woodType;
	this.price = price;
	this.width = width; 
	this.height = height;
	this.length = length;
	//LumberArea calculates the area of the lumber in inches
	this.lumberArea = () => {
		return this.width * this.height * this.length;
	}

	//PricePerSqInch finds the price per square inch of lumber
	this.pricePerSqInch = () => {
		return this.price / this.lumberArea();
	}

	//Cut removes x number of inches. Returns an error if x > lumber length.
	this.cutUp = (x) => {
		if(x < this.length){
			this.length -= x
		} else {
			throw new Error(`${x} is too long`);
		}
	}
}


module.exports = {Lumber};