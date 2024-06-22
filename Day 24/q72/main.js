"use strict";
/*
Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const.
Show how variables declared inside the block are not accessible outside of it.

Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, enhancing code
organization and preventing accidental access from outside the block.
*/
// Demonstrating block scope
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); // Works fine here
    console.log(blockConst); // Also works fine here
}
try {
    console.log(blockLet); // This will fail
}
catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    console.log(blockConst); // This will also fail
}
catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
// This shows that `let` and `const` keep variables safe inside the block where they're defined.
// example
let mesageLet = "Hey, How are you?";
const mesageConst = "Fine. What about you?";
console.log(mesageLet);
console.log(mesageConst);
try {
    console.log(mesageLet); // This will fail
}
catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    console.log(mesageConst); // This will fail
}
catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}
