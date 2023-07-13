//                     CHAPTER#5

//QUESTION1
// let a = "Sum of 3 & 5 is " ;
// let b = 3 ;
// let c = 5 ;
// document.write(a + (b + c));

//QUESTION2
//**********Subtract********* 
// let d = " Subtract of 3 & 5 is " ;
// let e = 3 ;
// let f = 5 ;
// document.write(d + (e - f));

//**********Multiplication********* 
// let g = " Multiplication of 3 & 5 is " ;
// let h = 3 ;
// let i = 5 ;
// document.write(g + (h * i) );

//**********Division********* 
// let j = " Division of 3 & 5 is " ;
// let k = 3 ;
// let l = 5 ;
// document.write(j + (k / l));

//**********Division********* 
// let m = " Modulus of 3 & 5 is " ;
// let n = 3 ;
// let o = 5 ;
// document.write(m + (n % o));

//QUESTION3
// let number ;
// document.write("Value after variable declaration is:" + number);
// let value = 7 ;
// document.write("Initial value: " + value);
// let value2 = 7 ;
// let value3 = ++value2;
// document.write(" Value after increment is: " + value3);
// let value4 = 8 ;
// let value5 = 7 ;
// let value6  = value4 + value5 ;
// document.write(" Value after addition is: " + value6)
// let value7 = 15 ;
// let value8 = --value7 ;
// document.write(" Value after decrement is " + value8)
// let value9 = 14 ;
// let value10 = 3 ;
// let value11 = 14 % 3 ;
// document.write(" The reminder is: " + value11)

// //QUESTION4
// let oneMovieTicket = 600  ;
// let buyTicket = 5  ;
// let totalAmount = oneMovieTicket * buyTicket  ;
// document.write(" Total cost to buy " + buyTicket + "tickets to a movie is " + totalAmount + " PKR");

// //QUESTION5
// let num = +prompt("Enter table Number ");
// document.write(num + " x 1 = " + num *1 + "</br>");
// document.write(num + " x 2 = " + num * 2 + "</br>");
// document.write(num + " x 3 = " + num * 3 + "</br>");
// document.write(num + " x 4 = " + num * 4 + "</br>");
// document.write(num + " x 5 = " + num * 5 + "</br>");
// document.write(num + " x 6 = " + num * 6 + "</br>");
// document.write(num + " x 7 = " + num * 7 + "</br>");
// document.write(num + " x 8 = " + num * 8 + "</br>");
// document.write(num + " x 9 = " + num * 9 + "</br>");
// document.write(num + " x 10 = " + num * 10 + "</br>");

// //QUESTION6
// let celsiusTemp = +prompt("What celsius temperature you want to fareinheit ");
// let fareinheitTemp = ((celsiusTemp * 9/5) + 32 );
// document.write(celsiusTemp + "°C is " + fareinheitTemp + "F </br> " );
// let fareinheitTemp2 = +prompt("What fareinheit temperature you want to celsius ");
// let celsiusTemp2 = ((fareinheitTemp2 -32) * 5/9);
// document.write(fareinheitTemp2 + "°F is " + celsiusTemp2);

// //QUESTION7
// let item1 = 610 ;
// document.write(" Price of item1 is " + item1);
// let item2 = 200 ;
// document.write(" Price of item2 is " + item2);
// let quantity1 = 8 ; 
// document.write(" Quantity of item1 is " + quantity1);
// let quantity2 = 5 ;
// document.write(" Quantity of item2 is " + quantity2);
// let shippingCharges = 150 ;
// document.write(" Shipping Charges " + shippingCharges);
// let totalCost = item1 * quantity1 + item2 * quantity2 + shippingCharges ;
// document.write(" Total cost of your order is " + totalCost );

//QUESTION8
// let totalMarks = 980 ;
// document.write(" Total Marks: " + totalMarks);
// let obtaindMarks = 804 ;
// document.write(" Obtained Marks: " + obtaindMarks);
// let percentage = ( obtaindMarks/totalMarks) * 100 ;
// document.write(" Percentage " + percentage);

//QUESTION9
// let usDollar1 = 104.80 ;
// let usDollar10 = 104.80 * 10 ;
// document.write(" Pakistani Rupees " + usDollar1 );
// let saudiRiyal1 = 28 ;
// let saudiRiyal10 = 28 * 25 ;
// document.write(" Pakistani Rupees " + saudiRiyal1 );
// let totalCurrency = usDollar10 + saudiRiyal10 ;
// document.write(" Total Currency in PKR: " + totalCurrency);

//QUESTION10
// let num = +prompt("Enter Number");
// let num1 = num + 5 ;
// let num2 = num1 * 10 ;
// let num3 = num2 / 2 ;
// document.write("Add 5: " + num1 + "</br> Multiply by 10: " + num2 + "</br> divided by 2: " + num3);

//QUESTION11
// let currentYear = 2023 ;
// let birthYear = 2002 ;
// let age1 = currentYear - birthYear ;
// let age2 = age1 - 1 ;
// document.write("They are either " + age1 + " or " + age2 + " years old");

//QUESTION12
// let radius = 20;
// let formula = (2 * 3.142) * radius ;
// document.write( "<h2>The Geometrizer </h2>" );
// document.write("</br> The radius of a circle " + radius);
// document.write("</br> The circumference is: " + formula);
// document.write("</br> The area is: " + (3.142 * radius * radius));

//QUESTION13
// let Snack = "Choclatechip" ;
// let currentAge = 15 ;
// let maxAge = 65 ;
// let amountPerDay = 3 ;
// let remainingYears = maxAge - currentAge ;
// let snackNeeded = remainingYears * amountPerDay ;
// document.write(" <h1> The Lifetime Supply Calculator </h1> " + " Favourite Snack: " +
// Snack + "</br> currentage: " + currentAge +"</br> Amount of snacks per day: " + 
// amountPerDay + "</br>");
// document.write("You will need " + snackNeeded + " to last you until the ripe old age of "+
// maxAge);