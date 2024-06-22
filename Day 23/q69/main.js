"use strict";
/*
Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both
the quotient and the remainder. Use an object to return both values.

Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both
in an object is a neat way to keep them together.
*/
function divideAndRemainder(dividend, dividsor) {
    let quotient = Math.floor(dividend / dividsor);
    let remainder = dividend % dividsor;
    return { quotient, remainder };
}
console.log(divideAndRemainder(5, 2));
///more example
function divAndRemainder(div, dividsor) {
    let quoti = Math.floor(div / dividsor);
    let remainder = div % dividsor;
    return { quoti, remainder };
}
console.log(divAndRemainder(67, 7));
