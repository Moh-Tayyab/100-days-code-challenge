/*Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.

Explain & TIP: You can get the current hour using the Date object and its getHours() method.
Remember, hours are in 24-hour format, so 12 PM is 12.
*/
var currentTim = new Date();
if (currentTim.getHours() < 12) {
    console.log("Good Morning"); // It's morning if before 12 PM
}
// This simple check helps us greet users appropriately based on the time of day.
/*
// Checks the current hour and logs "Good Morning" if it's before 12 PM
const currentTime = new Date();
if (currentTime.getHours() < 12) {
  console.log("Good Morning"); // It's morning if before 12 PM
}
// This simple check helps us greet users appropriately based on the time of day.
*/ 
