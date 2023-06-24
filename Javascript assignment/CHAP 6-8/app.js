//                 CHAPTER #6,7,8
//QUESTION#1
// let a = 10 ;
// document.write("<h1>Result</h1> </br> The value of a is: " + a +"</br>");
// let b = ++a;
// document.write(" </br> The value of ++a is: " + b + "</br> Now the value of ++a is: "
//  + b + "</br>");
// let c = a++ ;
// document.write(" </br> The value of a++ is: " + c +  "</br> Now the value of a++ is: "
//  + ++c + "</br>");
// let d = --a ;
// document.write(" </br> The value of --a is: " + d +  "</br> Now the value of --a is: " 
// + d + "</br>");
// let e = a-- ;
// document.write(" </br> The value of a-- is: " + e +  "</br> Now the value of a-- is: "
//  + --e + "</br>");

//QUESTION#2
// let a = 2 , b = 1 ;
// let result =  --a - --b + ++b + b--;
// document.write("--a is " + --a);
// document.write("</br> --a - --b is " + (--a - --b));
// document.write("</br> --a - --b + ++b is " + (--a - --b + ++b));
// document.write("</br> --a - --b + ++b + b-- is " + (--a - --b + ++b + b--));

// //QUESTION#3
// let userName = prompt("Enter your name");
// alert("Welcome " + userName);

//QUESTION#5
// let table = +prompt("Enter table Number");
// if (table != null) {
//     console.log("the table of " + table); 
//      for( i = 1 ; i <= 10 ; i++){
//     console.log(table + "x" + i + "=" + table*i);
// }   
// }

// else {
//      document.write("Table of 5<br>");
//       for(let i=1; i<=10 ; i++){
//         document.write("<br>" + 5 + "x" + i + "=" + (5*i) + "<br>");
//    } 
// }

//QUESTION#6
// let sub1 = prompt("Enter Subject1 Name")
// let obtainedMarks1 = +prompt("Enter Obtained Marks1 " + sub1);
// let totalMarks1 = 100 ;
// let percentage1 = (obtainedMarks1 * 100) / totalMarks1 ;
// let sub2 = prompt("Enter Subject2 Name")
// let obtainedMarks2 = +prompt("Enter Obtained Marks2 " + sub2);
// let totalMarks2 = 100 ;
// let percentage2 = (obtainedMarks2 * 100) / totalMarks2 ;
// let sub3 = prompt("Enter Subject3 Name")
// let obtainedMarks3 = +prompt("Enter Obtained Marks3 " + sub3);
// let totalMarks3 = 100;
// let percentage3 = (obtainedMarks3 * 100) / totalMarks3 ;
// let totalMarks = totalMarks1 + totalMarks2 + totalMarks3 ;
// let obtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// let percentage = (obtainedMarks * 100) / totalMarks ;
// document.write( "<table>" );//</table>
// document.write( "<tr>" ); //</tr>
// document.write( "<th><h3> Subject </h3></th> </br> " );
// document.write( "<th><h3> Total Marks </h3></th>  " );
// document.write( "<th><h3> Obtained Marks </h3></th>  " );
// document.write( "<th><h3> Percentage </h3></th>  " );
// document.write( "</tr>" );
// document.write( "<tr>" );
// document.write ( " <td>" + sub1 + "</td>" );
// document.write( " <td>" + totalMarks1 + "</td>" );
// document.write( " <td>" + obtainedMarks1 + "</td>" );
// document.write( " <td>" + percentage1 + "%" + "</td>" );
// document.write( "</tr>" );
// document.write( "<tr>" );
// document.write( " <td>" + sub2 + "</td>" );
// document.write( " <td>" + totalMarks2 + "</td>" );
// document.write( " <td>" + obtainedMarks2 + "</td>" );
// document.write( " <td>" + percentage2 + "%" + "</td>" );
// document.write( "</tr>" );
// document.write( "<tr>" );
// document.write ( " <td>" + sub3 + "</td>" );
// document.write( " <td>" + totalMarks3 + "</td>" );
// document.write( " <td>" + obtainedMarks3 + "</td>" );
// document.write( " <td>" + percentage3 + "%" + "</td>"  );
// document.write( "</tr>" );
// document.write( "<tr>" );
// document.write ( " <td>" + "</td>" );
// document.write( " <td> <h3>" + totalMarks + " </h3></td>" );
// document.write( " <td> <h3>" + obtainedMarks + " </h3></td>" );
// document.write( " <td> <h3>" + percentage + "%" + " </h3></td>" );
// document.write( "</tr>" );
// document.write ( "</table>" );