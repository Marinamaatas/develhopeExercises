/*Define a class called `AreaCalculator`. 
Inside it, create a static method that let you calculate the area of the geometric figure passed as parameter. 
The method will let you calculate the square, the rectangle and the circle area.
*/

class Square {
    constructor(side) {
      this.side = side;
    }
  }
  
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  }
  
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  }
  
  class AreaCalculator {
    constructor(figure) {
      this.figure = figure;
    }
  
    calculate() {
      if (this.figure instanceof Square) 
        return this.figure.side * this.figure.side;
      else if (this.figure instanceof Circle)
      {
        const piValue = Math.PI;
        return 2 * piValue * this.figure.radius;
      }
      else if (this.figure instanceof Rectangle)
        return this.figure.width * this.figure.height;
    else
        return "It is not an available figure";
    }
  }
  
  
  const square = new Square(4);
  const rectangle = new Rectangle(4, 2);
  const circle = new Circle(5);
  
  const calculatorSquare = new AreaCalculator(square);
  const calculatorRectangle = new AreaCalculator(rectangle);
  const calculatorCircle = new AreaCalculator(circle);
  
  console.log(calculatorSquare.calculate());  
  console.log(calculatorRectangle.calculate()); 
  console.log(calculatorCircle.calculate());