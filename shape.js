export class Shape{
  
  constructor(color){
    this.color= color;
  }
  drawShape(){
    return this.color;
  }
  calculateArea(l,b){
    return l* b;
   }
}
