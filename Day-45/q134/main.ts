/*
Question 134: Take a JSON string and parse it into a JavaScript object.

Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. 
This is particularly useful when dealing with data received as JSON from a web server or API.
*/

const jsonString1 = '{"name":"Arslan","age":30,"city":"Lahore"}';

// Parses the JSON string back into a JavaScript object
const person1 = JSON.parse(jsonString1);

console.log(person1); // Outputs the original object
// This snippet shows how to take a JSON string and convert it back into a JavaScript object.