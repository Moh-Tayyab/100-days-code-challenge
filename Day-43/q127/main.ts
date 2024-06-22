/*
Question 127: Convert a traditional function expression to an arrow function.

Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. 
They don't have their own bindings to this or super, and should not be used as methods.
*/

const traditionalFunction = function (a:number, b: number) {
    return a+b
}

const arrowFunction = (a:number,b: number) => a+b

console.log(traditionalFunction(5, 6));

console.log(arrowFunction(5, 6));