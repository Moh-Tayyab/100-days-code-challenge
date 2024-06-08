"use strict";
/*

Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.

*/
let mixItems = [1, "zain", true, "Bakar", 2, false];
let findStrings = mixItems.filter(items => typeof items === "string");
let findNumber = mixItems.filter(items => typeof items === "number");
let findBoolean = mixItems.filter(items => typeof items === "boolean");
console.log(findStrings);
console.log(findNumber);
console.log(findBoolean);
