/*Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the 
array (from left to right) to reduce it to a single value.
*/

function calculateSum(arra: number[]) {
    return arra.reduce((accumulator, current) => accumulator + current, 0)
}

let arra: number[] = [1,2,3,4,5] //15

console.log(calculateSum(arra));  
