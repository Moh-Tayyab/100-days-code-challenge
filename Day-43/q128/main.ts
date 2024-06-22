/*Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.

Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters, 
you enclose them in parentheses.
*/

const multipleParameter = (...numbers: number[]) =>
    numbers.reduce((total, sum) => total * sum, 1);

console.log(multipleParameter(2, 3, 5)); //output 30
