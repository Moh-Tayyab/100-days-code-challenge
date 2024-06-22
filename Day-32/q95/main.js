/*Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.
*/
function greaterThanTen(numbers) {
    return numbers.filter(function (number) { return number > 20; });
}
//Filtering an array of numbers
var numbers = [10, 2, 34, 49, 50, 63, 70, 30, 80, 78];
console.log(greaterThanTen(numbers));
