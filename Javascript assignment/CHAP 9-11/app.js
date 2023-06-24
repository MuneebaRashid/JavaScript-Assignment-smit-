//                     CHAPTER#9-11

//QUESTION#1
// let userCity = prompt("Enter your city name");
// if(userCity === "Karachi"){
//     console.log("Welcome to the city of lights");
// }
// else{
//     console.log("Welcome to " + userCity);
// }

//QUESTION#2
// let gender = prompt("Enter your Gender");
// if(gender === "Male"){
//     console.log("Good Morning Sir");
// }
// else{
//     console.log("Good Morning Mam");
// }

//QUESTION#3
// let signalColor = prompt("Enter traffice signal color");
// if (signalColor === "red") {
//     console.log("Must Stop");
// }
// else if(signalColor === "yellow"){
//     console.log("Ready to Move");
// }
// else if(signalColor === "green"){
//      console.log("Move Now");
//  }
// else{
//     console.log("This is'nt a traffic signal color");
// }

//QUESTION#4
// let remainingFuel = +prompt("Please enter your remaining fuel in litters");
// if(remainingFuel <= 0.25){
//     console.log("Please refill the fuel in your car");
// }
// else{
//     console.log("No need to refill");
// }

//QUESTION#5

// // ********a*********
// let a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// // ********b*********
// let b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// // ********c*********
// //Condition#1
// let c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// //Condition#2
// if (c === 13){
// alert("condition 2 is true");
// }
// //Condition#3
// if (++c < 14){
// alert("condition 3 is true");
// }
// //Condition#4
// if(c === 14){
// alert("condition 4 is true");
// }

// // ********d*********
// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// // ********e*********
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// // ********f*********
// if("car" < "cat"){
// alert("car is smaller than cat");
// }


//QUESTION#6
// let sub1 = +prompt("Enter sub1 marks");
// let sub2 = +prompt("Enter sub2 marks");
// let sub3 = +prompt("Enter sub3 marks");
// let totalMarks = +prompt("Enter total Marks") ;
// document.write("<h2>MarkSheet</h2>")
// document.write("</br> Total Marks: " + totalMarks);
// let obtaindMarks = sub1 + sub2 + sub3 ;
// document.write("</br> Obtained Marks: " + obtaindMarks) ;
// let percentage = (obtaindMarks*100)/totalMarks;
// document.write("</br> Percentage" + percentage + "%");
// if (percentage >= 80) {
//     document.write( "</br>  Grade:</h3> A-one" + "</br> Remarks: Excellent");

// }
// else if(percentage >= 70){
//     document.write( "</br>  Grade:</h3> A" + "</br> Remarks: Good");
// }
// else if(percentage >= 60){
//     document.write( "</br>  Grade:</h3> B" + "</br> Remarks: You need to improve");
// }
//  else {
//     document.write( "</br>  Fail " + "</br> Remarks: Sorry");
// }

//QUESTION#7
// let secretNumber = 5 ;
// let guessNumber = +prompt("Guess the seret number");
// if(secretNumber === guessNumber){
//     alert("Bingo! Correct answer");
// }
// else if(guessNumber  === 5 + 1){
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Wrong Answer");
// }


//QUESTION#8
// let givenNumber = +prompt("Enter the number to check if it is divisible by 3 or not");
// if (givenNumber % 3 === 0) {
//     alert(givenNumber + " is divisible by 3");
// }
//  else {
//     alert(givenNumber + " is not divisible by 3.");
// }

//QUESTION#9
// let even = +prompt("Enter number to check whether it is even or odd");
// if (even % 2 === 0) {
//     alert(even + " is even");
// }
// else {
//     alert(even + " is odd");

// }
//QUESTION#10
// let temperature = +prompt("Enter the temperature");
// if (temperature > 40) {
//     alert("It is too hot outside.");
// }
// else if (temperature > 30){
//     alert("The Weather today is Normal.");
// }
// else if (temperature > 20){
//     alert("Today’s Weather is cool.");
// } 
// else {
//     alert("OMG! Today’s weather is so Cool.");
// }

//QUESTION#11
// let num1 = +prompt("Enter your First Number");
// let operator = prompt("Enter operator");
// let num2 = +prompt("Enter your Second Number");
// if (operator === "+") {
//    console.log("The addition of " + num1 + " and " + num2 + " is " + (num1+num2) );
// }
// else if(operator === "-") {
//     console.log("The subtraction of " + num1 + " and " + num2 + " is " + (num1-num2) );
//  } 
//  else if(operator === "*") {
//     console.log("The Multiplication of " + num1 + " and " + num2 + " is " + (num1*num2) );
//  } 
//  else if(operator === "/") {
//     console.log("The Division of " + num1 + " and " + num2 + " is " + (num1/num2) );
//  } 
//  else if(operator === "%") {
//     console.log("The Modulus of " + num1 + " and " + num2 + " is " + (num1-num2) );
//  } 
//  else {
//     console.log("Error! the operator is wrong");
// }