// ASSIGNMENT 1 //
var studentname;
var studentage;
var studentgrade;
var attendance;

studentname = "Quinn"
studentage = 16
studentgrade = 100
attendance = 45

console.log(studentname, studentage, studentgrade, attendance)

// ASSIGNMENT 2 //

// TASK 3
let age;
age = attendance + studentage
console.log("Sum:", age, "\nThat's old.")

age = studentgrade - studentage
console.log("Difference:", age, "\nThat's not so old anymore.")

age = attendance * studentage
console.log("Product:", age, "\nWow! That's old!")

age = studentgrade / studentage
console.log("Quotient:", age, "\nThat's questionably old.")

// Using these numbers throughout the assignment
let num1 = 2
let num2 = 3
//

num1 = 5
num2 = 7

// TASK 4
console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

// TASK 5
if (num1 == num2){
    res = "yes"
}
else{
    res = "no"
}
console.log("Is num1 equal to num2?", res );

if (num1 > num2){
    res = "yes"
}
else{
    res = "no"
}
console.log("Is num1 greater than num2?", res);

if (num1 != num2){
    res = "yes"
}
else{
    res = "no"
}
console.log("Is num1 not equal to num2?", res);

// TASK 6
let isPositive = false;
let isEven = false;

if(num1>0 && num2>0){
    isPositive = true
}

console.log("Are both numbers positive?", isPositive);

let num1m = num1 % 2
let num2m = num2 % 2
if(num1m == 0 || num2m == 0){
    isEven = true
}
console.log("Is at least one number even?", isEven);