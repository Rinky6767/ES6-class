import {Shape} from "./circle.js"
class Circle extends Shape{
  
  calculateArea(radius){
   return (2* Math.PI* radius).toFixed(2);
  }
}
let rectangle= new Circle("green");
console.log(rectangle.calculateArea(12));
console.log("color: "+rectangle.drawShape())
