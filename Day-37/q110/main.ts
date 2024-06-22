/*
Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

Explain & TIP: A common grading system assigns letter grades based on score ranges. 
You can use an if-else-if chain to determine the grade.
*/
function assignGrades(score: number): string {
  if (score >= 90) {
        return "A";
  }else if(score >= 70) {
    return "B";
  }else if(score >= 60) {
    return "C";
  }else if(score >= 50) {
    return "D";
  }else{
    return "F";
  }
} 
console.log(assignGrades(90));//output "A"
console.log(assignGrades(70));//output "B"
console.log(assignGrades(60));//output "C"
console.log(assignGrades(50));//output "D"
console.log(assignGrades(40))//output "C"
