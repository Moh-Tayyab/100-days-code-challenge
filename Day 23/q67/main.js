"use strict";
/*
Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string
that represents a number (e.g., "5"). Return their sum as a number.

Explain & TIP: JavaScript allows arithmetic operations between mixed types. When you add a number to a string
that looks like a number, JavaScript converts the string to a number for the operation.
*/
function addNumberToString(num1, numberString) {
    // adding number to string
    return num1 + Number(numberString);
}
console.log(addNumberToString(10, "5")); // output 15
//more example
function numberToString(a, b) {
    return a + Number(b);
}
console.log(numberToString(12, "5")); // output 17
//more example
