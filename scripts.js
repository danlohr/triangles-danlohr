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
