/*
Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input
and returns the number rounded to the nearest integer.

Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number.
It looks at the decimal part and decides whether to round up or down.
*/
function rounding(num1) {
    return Math.round(num1);
}
var result = rounding(0.5);
console.log(result);
result = rounding(3.4);
console.log(result);
