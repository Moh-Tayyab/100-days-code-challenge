/*
Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both
the quotient and the remainder. Use an object to return both values.

Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both
in an object is a neat way to keep them together.
*/
function divideAndRemainder(dividend, dividsor) {
    var quotient = Math.floor(dividend / dividsor);
    var remainder = dividend % dividsor;
    return { quotient: quotient, remainder: remainder };
}
console.log(divideAndRemainder(5, 2));
///more example
function divAndRemainder(div, dividsor) {
    var quoti = Math.floor(div / dividsor);
    var remainder = div % dividsor;
    return { quoti: quoti, remainder: remainder };
}
console.log(divAndRemainder(67, 7));
