"use strict";
/*
Question 135: Explain how you can format a JSON string with proper indentation for readability.

Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string.
Adding an indent level as the third argument beautifies the output, making it more readable.
*/
// Reusing the person object from Question 133
const person2 = {
    name: "Arslan",
    age: 30,
    city: "Lahore",
};
// Converts the object into a JSON string with indentation
const jsonString2 = JSON.stringify(person2, null, 2); // The '2' specifies the number of spaces to use as white space
console.log(jsonString2);
/* Outputs:
{
  "name": "Arslan",
  "age": 30,
  "city": "Lahore"
}
*/
// Shows how adding indentation to the JSON string makes it easier to read.
