/*

Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product.
Round the result to two decimal places.

Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long.
Rounding can help keep numbers manageable.
*/
function decimalNumber(val1, val2) {
    return Math.round((val1 * val2) * 100) / 100;
}
console.log(decimalNumber(0.1, 0.2));
//more example
function roundOfNumber(a, b) {
    return Math.round((a * b) * 100) / 100;
}
console.log(roundOfNumber(1.2, 2.3));
