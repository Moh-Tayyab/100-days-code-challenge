"use strict";
/*
Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for
make, model, and year. Then, show how you can access the model property of the car.

Explain & TIP: Objects are collections of properties, kind of like a box for storing related information.
You can create an object to group related data and access its properties using either dot notation or bracket notation.
*/
// This sets up an object for a car with specific details
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
// Accessing and showing the car's model
console.log(car.model); // Outputs: Corolla
// We use dot notation (car.model) to get the model of the car from our object.
//more example
let wheel = {
    make: "Honda",
    model: "Civic",
    year: 2023
};
console.log(wheel.make);
console.log(wheel["model"]);
console.log(wheel.year);
