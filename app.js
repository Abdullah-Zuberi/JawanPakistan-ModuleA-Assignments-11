var subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
var subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
var subject3 = parseFloat(prompt("Enter marks for Subject 3:"));
var subject4 = parseFloat(prompt("Enter marks for Subject 4:"));
var subject5 = parseFloat(prompt("Enter marks for Subject 5:"));

var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

var percentage = (totalMarks / 500) * 100;

alert(
  "Total Marks: " + totalMarks + "\nPercentage: " + percentage.toFixed(2) + "%"
);
