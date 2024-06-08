"use strict";
/*
Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums,
and show one example.

Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and
easier to understand.
*/
var VehiclesType;
(function (VehiclesType) {
    VehiclesType[VehiclesType["Car"] = 0] = "Car";
    VehiclesType[VehiclesType["Trucks"] = 1] = "Trucks";
    VehiclesType[VehiclesType["Motorcycles"] = 2] = "Motorcycles";
})(VehiclesType || (VehiclesType = {}));
// Showing one type of vehicle from the list
console.log(VehiclesType.Car); // It shows 0 because enums start counting from 0
console.log(VehiclesType.Trucks); // It shows 1 because enums start counting from 0
console.log(VehiclesType.Motorcycles); // It shows 2 because enums start counting from 0
console.log("\n ***Example***");
//more example
var FavouriteFruits;
(function (FavouriteFruits) {
    FavouriteFruits[FavouriteFruits["Apple"] = 0] = "Apple";
    FavouriteFruits[FavouriteFruits["Orange"] = 1] = "Orange";
    FavouriteFruits[FavouriteFruits["Kiwi"] = 2] = "Kiwi";
    FavouriteFruits[FavouriteFruits["Banana"] = 3] = "Banana";
    FavouriteFruits[FavouriteFruits["Mango"] = 4] = "Mango";
})(FavouriteFruits || (FavouriteFruits = {}));
console.log(FavouriteFruits.Mango); // It shows 4 
console.log(FavouriteFruits.Apple); // It shows 0
console.log(FavouriteFruits.Orange); // I t shows 1
