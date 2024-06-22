"use strict";
/*
Question 92: Write a function to remove the last element from an array and return the removed element.

Explain & TIP: The .pop() method removes the last element from an array and returns that element.
This can be useful when you need to work with the removed item.
*/
function removeTheLastElement(arr) {
    // Removes and returns the last element of the array
    return arr.pop();
}
let fruits = ["Apple", "Orange", "Cherry"];
console.log(removeTheLastElement(fruits)); //output 'cherry'
console.log(fruits); //output 'Apple', 'Orange'
//more example
// This function removes the last element from an array and returns it
function removeLastElement(arr) {
    return arr.pop(); // Removes and returns the last element of the array
}
// Example: Removing the last fruit from the array
const fruit = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruit)); // Outputs: 'Cherry'
console.log(fruit); // Outputs: ['Apple', 'Banana']
// Here, we take out the last fruit and show the updated list.
