"use strict";
/*Question 124: Create a function inside an object that returns the object's own name property using the this keyword.

Explain & TIP: The this keyword in an object's method refers to the object itself, making it straightforward to access
its properties from within its methods.
*/
const nameProperty = {
    name: "Zain",
    age: 22,
    getName: function usingKey() {
        return `Name: ${this.name} \n Age: ${this.age}`; // Uses 'this' to refer to the object itself and return its 'name' property
    },
};
console.log(nameProperty.getName());
