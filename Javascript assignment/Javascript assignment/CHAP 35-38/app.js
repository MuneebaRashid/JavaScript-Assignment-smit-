//                   CHAPTER#35-38

//QUESTION#1
// function time() {
//     let currentTime = new Date();
//     document.write(currentTime);
// }
// time();

//QUESTION#2
// function greet() {
//     let userFirstName = prompt("Enter your First Name");
//     let userLastName = prompt("Enter your Last Name");
//     alert(" Welcome " + userFirstName + " " + userLastName )
// }
// greet();

//QUESTION#3
// function add() {
//     let num1 = +prompt("Enter the first Number");
//     let num2 = +prompt("Enter the first Number");
//     let sumOfNum= num1 + num2;
//     return sumOfNum
// }
// let result = add();
// alert("The sum of the two number is: " + result);

//QUESTION#4
// function calc(num1,oper,num2) {
//     if (oper === "+") {
//         return num1 + num2;
//     }
//     else if(oper === "-"){
//     return num1 - num2;
//     }
//     else if(oper === "*"){
//     return num1 * num2;
//     }
//     else if(oper === "/"){
//         return num1 / num2;
//         }
//     else if(oper === "%"){
//         return num1 % num2;
//             }
//     else {
//       return "Incorrect operator"  
//     } 
// }
// let result = calc(10,"+",5);
// alert(result);

// let result1 = calc(10,"-",5);
// alert(result1);

// let result2 = calc(10,"*",5);
// alert(result2);

// let result3 = calc(10,"/",5);
// alert(result3);

// let result4 = calc(10,"%",5);
// alert(result4);

// let result5 = calc(10,"$",5);
// alert(result5);

//QUESTION#5
//  *******solution1********
// function square1(num) {
//     return num ** 2;
// }
// let numOfSuare= square1(5);
// alert(numOfSuare);

//  *********solution2********
// function square() {
//     let userInput = +prompt("Enter the number");
//     let squareOfNum = userInput ** 2
//     return squareOfNum ;
// }
// let numSquare = square();
// alert(numSquare);

//QUESTION#6
// function factorial(){
//     let num = + prompt("Enter a number");
//     let fac = 1;
//     for (num; num > 1; num--) {
//         fac = fac * num;    
//     }
//     document.write(fac)
// }
// factorial();

//QUESTION#7
// function counting(start,end){
//     for (let i = start; i < end ; i++) {
//         console.log(i);    
//     }
// }
// counting(1,10);

//QUESTION#8
// function calHypotenues(base,perpendicular) {
//     function calSquare(num){
//        return num * num;
//     }
// let basedSquare = calSquare(base);
// let perpendicularSquare = calSquare(perpendicular);
// let hypotenuesSquare = basedSquare + perpendicularSquare;
// let hypotenues = Math.sqrt(hypotenuesSquare);
// console.log(hypotenues);
// }
// calHypotenues(5,6);

//QUESTION#9
// ******VALUE*****
// function value(width,height) {
//     return width * height;
// }
// let calculateVal =value(2,8);
// console.log(calculateVal);

// // ******VARIABLE*****
// let width = 2;
// let height = 8;
// let claculateArea = width * height;
// console.log(claculateArea);

//QUESTION#10
// function palindrome()
//  let word ="it is a geniun madam"
//  check = "";
// for (let i = word.length-1; i>=0; i--) {
//     check = word[i];  
//     // document.write(check)
//     // console.log(word,check); 
// }
// if (check === word){
//     document.write(word + " is palindrom word");
// }
// palindrome();
//QUESTION#11
// function capitalize() {
//     let cap = prompt("Enter a letter");
//     let remove = cap.charAt(0).toUpperCase() + cap.slice(1);
//     return remove
// }
// let capital = capitalize();
// alert(capital);

//QUESTION#12
// function findLongestWord(string){
// let word = string.split(" ")
// let longestWord = "";
// for (let i = 0; i < word.length; i++) {
//     let word2= word[i];
//     if (word2.length > longestWord.length) {
//         longestWord = word2;
//     } 
// }
// return longestWord ; 

// }
// let userInput ="Web Development Tutorial";
// let longestWord = findLongestWord(userInput);
// console.log(longestWord);

//QUESTION#13
// function letterOccurances(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//         count++;
//         } 
//       }
//     return count;
// }
// let inputOccurace = 'JSResourceS.com';
// let letterToCount = 'S';
// let occurances = letterOccurances(inputOccurace, letterToCount);
// console.log(occurances);

//QUESTION#14
// function calCircumference(radius) {
//     let circumference = 2 * Math.PI * radius;
//     console.log("The circumference is " + circumference);
// }
// function calArea(radius) {
//     let area =  Math.PI * radius * radius;
//     console.log("The area is " + area);
// }
// let radius = 5;
// calCircumference(radius);
// calArea(radius);

