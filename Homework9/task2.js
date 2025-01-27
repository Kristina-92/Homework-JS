class Rectangle {
  #width;
  #height;

  constructor(color, width, height) {
    this.color = color;
    this.#width = width;
    this.#height = height;
  }

  static getShapeType() {
    return "Rectangle";
  }

  get getWidth() {
    return this.#width;
  }

  set setWidth(newWidth) {
    if (newWidth > 0) {
      this.#width = newWidth;
    } else {
      console.log("Enter positive number for width");
    }
  }

  get getHeight() {
    return this.#height;
  }

  set setHeight(newHeight) {
    if (newHeight > 0) {
      this.#height = newHeight;
    } else {
      console.log("Enter positive number for height");
    }
  }

  getArea() {
    return this.#height * this.#width;
  }

  describe() {
    console.log(`Rectangle color: ${this.color}`);
    console.log(`Rectangle width: ${this.#width}`);
    console.log(`Rectangle height: ${this.#height}`);
  }
}

const rectangleOne = new Rectangle("blue", 50, 20);
const rectangleTwo = new Rectangle("yellow", 80, 30);

rectangleOne.describe();
rectangleTwo.describe();

console.log(rectangleOne.getArea());
console.log(rectangleTwo.getArea());

rectangleOne.setWidth = 100;
rectangleOne.setHeight = 40;

rectangleTwo.setWidth = 150;
rectangleTwo.setHeight = 70;

rectangleOne.describe();
rectangleTwo.describe();

console.log(rectangleOne.getArea());
console.log(rectangleTwo.getArea());

console.log(Rectangle.getShapeType());
