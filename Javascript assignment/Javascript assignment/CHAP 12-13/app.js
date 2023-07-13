//               CHAPTER#12,13

//QUESTION#1
let input = prompt("Enter a Character");
let asciiCode = input.charCodeAt(0);
if (asciiCode <= 48 && asciiCode >= 57) {
    document.write("The input is a number");
}
else if (asciiCode >= 65 && asciiCode <= 90){
    document.write("The input is an uppercase Letter")
}
else if (asciiCode >= 97 && asciiCode <= 122){
    document.write("The input is an  lowercase Letter")
}
 else {
    document.write("The input is not a number or letter")
}



//QUESTION#2
// let integer1 = +prompt("Enter first integer");
// let integer2 = +prompt("Enter second integer");
// if (integer1 > integer2) {
//     alert(integer2 + " The larger number is " + integer1);
// }
// else if(integer1 < integer2){
//     alert(integer1 + " The larger number is " + integer2);
// }
// else{
//     alert("Both numbers are equal")
// }

// //QUESTION#3
// let num = +prompt("Enter number to check whether it is positive,negative or zero");
// if (num > 0) {
//     alert(num + " is positive");
// }
// else if(num <
//      0){
//     alert(num + " is negative");
// }
//  else {
//     alert(num + " is zero");
// }

//QUESTION#4
// let vowel = prompt("Enter character to check whether it is vowel or not");
// if(vowel === "a" || vowel === "e" || vowel ===  "i" || vowel ===  "o" || vowel ===  "u"){
//     alert("True");
// }
// else{
//     alert("False");
// }

//QUESTION#5
// let jsPassword = "data123";
// let userPassword = prompt("Enter a password");
// if (userPassword === "") {
//     alert(" Please enter your password");
// } 
// else if(userPassword === jsPassword){
//     alert("“Correct! The password you entered matches the original password");
// }
// else {
//     alert("Incorrect!");
 
// }

//QUESTION#6
// let greeting;
// let hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else{
// greeting = "Good evening";
// }
// document.write(greeting);

//QUESTION#7
// let time = +prompt("Enter time");
// if (time >= 000 && time < 1200) {
//     alert("Good Morning!");
// } 
// else if(time >= 1200 && time < 1700){
//     alert("Good Afternoon!");
// }
// else if(time >= 1700 && time < 2100){
//     alert("Good Evening!");
// }
// else {
//     alert("Good Night!");
// }

