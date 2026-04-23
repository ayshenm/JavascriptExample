//Declare a function fullName and it print out your full name.
// function fullName() {
//   console.log("Ayshen Mirzeyeva");
// }

// fullName();

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
// function fullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }
// let res = fullName("Ayshen", "Mirzeyeva");

// console.log(res);

//Declare a function addNumbers and it takes two two parameters and it returns sum.

// function addNumbers(a,b){
//     return(a+b);
// }

// let sum= addNumbers(5,7);
// console.log(sum);

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

// function areaOfRectangle(length,width){
//     return(length * width);
// }
// console.log(areaOfRectangle(2,3));

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

// function perimeterOfRectangle(length, width) {
//   return 2 * (length + width);
// }
// console.log(perimeterOfRectangle(4, 2));

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

// function volumeOfRectPrism(length,width,height){
//     return(length * width * height)

// }
// console.log(volumeOfRectPrism(1,2,3));

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

// function convertCelsiusToFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }
// console.log(convertCelsiusToFahrenheit(5));

//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// function solveLinEquation(a, b, c, x, y){
//     return(a*x + b*y + c)
// }
// console.log(solveLinEquation(1,5,7,52,3))

//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// function solveQuadEquation(a, b, c) {
//     //diskriminatin dusturu
//   let D = b * b - 4 * a * c;

//   if (D > 0) {
//     let x1 = (-b + Math.sqrt(D)) / (2 * a);
//     let x2 = (-b - Math.sqrt(D)) / (2 * a);
//     return [x1, x2];
//   } else if (D === 0) {
//     let x = -b / (2 * a);
//     return [x];
//   } else {
//     return "Real kök yoxdur";
//   }
// }

// console.log(solveQuadEquation(1, 4, 2));

//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// function printArray(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// printArray(["1", "5", "8"]);

//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// function showDateTime() {
//   let d = new Date();

//   let day = String(d.getDate()).padStart(2, "0");
//   let month = String(d.getMonth() + 1).padStart(2, "0");
//   let year = d.getFullYear();

//   let h = String(d.getHours()).padStart(2, "0");
//   let m = String(d.getMinutes()).padStart(2, "0");

//   let formatTime = `${day}.${month}.${year} ${h}:${m}`;
//   console.log(formatTime);
// }

// showDateTime();

//Declare a function name swapValues. This function swaps value of x to y.

function swapValue(x,y){
let temp = x;
x=y;
y=temp;
return[x,y]
}

console.log((5,10));