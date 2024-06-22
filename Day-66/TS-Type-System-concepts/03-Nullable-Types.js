"use strict";
/******************
 * NULLABLE TYPES *
 ******************/
let userName = "zaini";
let xAge = null;
function getUser(userName) {
    if (userName == null) {
        console.log("hello, guest!");
    }
    else {
        console.log(`Hello ${userName}.`);
    }
}
getUser("zaini");
getUser(null);
