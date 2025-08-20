const currentYear = 2025;
const currentMonth = 12;
const currentDate = 31;

let birthYear = prompt( "enter birthyear");
let birthMonth = prompt ( "enter month");
let birthDate = prompt ( " enter date");

let age = currentYear - birthYear;
let month =  currentMonth - birthMonth;
let day = currentDate - birthDate ;

console.log( "you age is" + age +  "year" + month + "month" + day + " day");
