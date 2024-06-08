"use strict";
/*
Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific
number to any other number you give them later.

Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it.
This program makes that magic box for you!
*/
function makeAdder(addTask) {
    return function (number) {
        return number + addTask;
    };
}
// Making a magic box that adds 5
let addFive = makeAdder(5);
console.log(addFive(7)); // it give us 12
// We made a function (magic box) that adds 5 to any number.
