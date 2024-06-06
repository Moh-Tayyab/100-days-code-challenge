/*
Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor 
it into an arrow function.

Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your 
code cleaner and more readable.
*/

// Original function for calculating the area of a rectangle
function calculateArea(width: number, height: number): number {
    return width * height
}

calculateArea(4, 6)
// Arrow function for calculating the area of a rectangle
// Refactored into an arrow function
let calculateAreaArrrow = (width: number, height: number) => width * height

//Arrow function
console.log(calculateAreaArrrow(5, 7));// logs
