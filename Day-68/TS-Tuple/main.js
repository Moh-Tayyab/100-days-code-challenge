"use strict";
/*********
 * TUPLE *
 *********/
// Defining a tuple type
let article = ["Title One", 11, true];
// Assigning a new tuple value to the `article` variable
article = ["Title Two", 12, false];
// Trying to push a new element into a tuple (will result in an error)
// article.push(100);
console.log(article);
// Destructuring the tuple into individual variables
const [title, id, published] = article;
console.log(id);
//more example
/*
let comp: [number, string, boolean] = [3.5, "tayyab", false]


comp = [3, "zaini", true]

console.log(comp);

const [rollNo, name7, isActive] = comp

console.log(rollNo);

console.log(isActive);

*/
