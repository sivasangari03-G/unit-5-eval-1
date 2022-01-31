class Rectangle {
	constructor(length, breadth) {
		this.length = length;
		this.breadth = breadth;
	}
	area() {
		return this.length * this.breadth;
	}
	getPerimeter() {
		return this.length * 4;
	}
}
class Square extends Rectangle {
	constructor(side, side2) {
        super(side, side2);
	}
}

var rec = new Square(2, 5);
console.log(rec.area());

var sq = new Square(5);
console.log(sq.getPerimeter());