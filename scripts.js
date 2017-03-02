/* Part 1: Area of a triangle */
var base = 30;
var height = 40;
var area = .5 * base * height;
var string = "The area of a triangle with base " + base + "and height "
+ height + "is " + area;
document.getElementById("firstDiv").innerHTML = string;

/* Part 2: Hypotenuse of a triangle */
function calcHypotenuse(b, h) {
  return Math.sqrt(b * b + h * h);
}

var hyp = console.log(calcHypotenuse);
var userMessage = "The hypotenuse is ";
document.getElementById("secondDiv").innerHTML = userMessage + hyp;

/* Part 3: Triangle Object */
var triangle = {
  base: 30,
  height: 40,
  canvasId: canvas,
  calcArea: function(base, height) {
   return (this.base * this.height * .5)
 }
 calcHypotenuse: function(this.base, this.height) {
   return Math.sqrt(this.base * this.base + this.height * this.height)
 }
 drawIt: function(drawTriangle(this.base, this.height, this.canvasId));
}

var objectAreaMsg = "The area is " + triangle.calcArea();
var objectHypMsg = "The hypotenuse is " + triangle.calcHypotenuse();

document.getElementById("thirdDiv").innerHTML = objectAreaMsg /n objectHypMsg;

triangle.drawIt();
