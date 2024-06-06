/*

Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.

*/
var mixItems = [1, "zain", true, "Bakar", 2, false];
var findStrings = mixItems.filter(function (items) { return typeof items === "string"; });
var findNumber = mixItems.filter(function (items) { return typeof items === "number"; });
var findBoolean = mixItems.filter(function (items) { return typeof items === "boolean"; });
console.log(findStrings);
console.log(findNumber);
console.log(findBoolean);
