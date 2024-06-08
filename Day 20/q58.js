"use strict";
/*
Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

Explain & TIP: This program can handle any number of scores you give it, and it tells you the average score. Handy for
seeing how well you did overall!
*/
function averageScore(...scores) {
    // Adds all scores together and divides by the number of scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(averageScore(4, 4, 4));
console.log(averageScore(5, 5, 5));
//finding the average of four scores
console.log(averageScore(2, 4, 6, 8));
