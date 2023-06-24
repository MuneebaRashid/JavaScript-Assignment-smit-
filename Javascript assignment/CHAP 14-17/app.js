//                CHAPTER#14,15,16,17
//QUESTION#1
// let studentFutureName = [];
// console.table(studentFutureName);

// //QUESTION#2
// let futureName = [];
// console.table(futureName);

// //QUESTION#3
// let stringArr = ["Kauser","Ayesha","Muneeba"];
// console.table(stringArr);

// //QUESTION#4
// let numArr = [1,2,3];
// console.table(numArr);

// //QUESTION#5
// let booleanArr = [true,false];
// console.table(booleanArr);
// //QUESTION#6
// let mixedArr = ["Maryam","Areeba",4,5,true,false];
// console.table(mixedArr);

//QUESTION#7
// let eduQualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","phD"]
// document.write("<h1>Qualification</h1></br>" );
// document.write("<ol>");
// document.write("<li>" + eduQualification[0] + "</li>");
// document.write("<li>" + eduQualification[1] + "</li>");
// document.write("<li>" + eduQualification[2] + "</li>");
// document.write("<li>" + eduQualification[3] + "</li>");
// document.write("<li>" + eduQualification[4] + "</li>");
// document.write("<li>" + eduQualification[5] + "</li>");
// document.write("<li>" + eduQualification[6] + "</li>");
// document.write("<li>" + eduQualification[7] + "</li>");
// document.write("</ol>");



//QUESTION#8
// let studentName = ["Fiza","Hira","ayesha"];
// let score = [320,230,480];
// let totalMarks = 500;
// let percentage = (score[0] / totalMarks )* 100;
// let percentage1 = (score[1] / totalMarks )* 100;
// let percentage2= (score[2] / totalMarks )* 100;
// console.log("Score of " + studentName[0] + " is " + score[0] + " Percentage " + percentage
// + "% \n" + "Score of " + studentName[1] + " is " + score[1] + " Percentage " + percentage1
// + "% \n" + "Score of " + studentName[2] + " is " + score[2] + " Percentage " + percentage2
// + "%");

//QUESTION#9
// let colorsName = ["red","green","blue","orange","purple"];
// document.write("<b>Initial array is: </b>" +  colorsName + "</br>"+ "</br>");
// //                     *******a********
// let colorStart = prompt("Enter a color to add to the beginning");
// colorsName.unshift(colorStart);
// document.write("<b>Array after adding color to the beginnig </b>" +  colorsName +"," + "</br>"  + "</br>");
// //                     *******b********
// let colorEnd = prompt("Enter a color to add in the end?");
// colorsName.push(colorEnd);
// document.write("<b>Array after adding color to the end : </b>"  + colorsName + "</br>"+ "</br>");
// //                     *******c********
// colorsName.unshift("black, " , "Yellow");
// document.write("<b>Array after adding two colors in the beginning</b>" + colorsName + "</br>" + "</br>");
// //                     *******d********
// colorsName.shift();
// document.write("<b>Array after deleting first color:</b>" + colorsName + "</br>" + "</br>");
// //                     *******e********
// colorsName.pop();
// document.write("<b>Array after deleting last color:</b>" + colorsName + "</br>" + "</br>");
// //                     *******f********
// let addIndex = +prompt("Enter the index add which you want to add a color");
// let addIndexColor = prompt("Enter the color to add:");
// colorsName.splice(addIndex,0,addIndexColor)
// document.write("<b>>Array after adding color at index " + addIndex + ":</b>" + colorsName + "</br>" + "</br>");
// //                     *******g********
// let deleteIndex = +prompt("Enter the index from where you want to delete color(s):");
// let numOfColorsToDelete = prompt("Enter the number of colors to delelte");
// colorsName.splice(deleteIndex,numOfColorsToDelete)
// document.write("<b>>Array after deleteting " +numOfColorsToDelete + " color(s) from index " + deleteIndex  + ":</b>" + colorsName + "</br>" + "</br>");

//QUESTION#10
// let studentScore = [320,230,480,120];
// document.write("<b>Score of Students: </b>" + studentScore + "</br>")
// studentScore.sort()
// document.write(  "</br>" +"<b>Ordered Score of Students: </b>" + studentScore);

//QUESTION#11
// let citiesName = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("<b>Cities List:</b></br>" + citiesName + "</br>");
// document.write("<b>Selected Cities List:</b></br>" + citiesName.slice(2,4));

//QUESTION#12
// let arr = ["This " + "is " + "my " + "cat"];
// document.write(arr.join());

//QUESTION#13
// let devices = ["keyboard" , "mouse" , "printer" , "monitor"];
// document.write("<h1>Devices:</h1></br>" + devices + "</br>");
// document.write("<b>Out </b></br>" + devices[0] + "</br>");
// document.write("<b>Out </b></br>" + devices[1] + "</br>");
// document.write("<b>Out </b></br>" + devices[2] + "</br>");
// document.write("<b>Out </b></br>" + devices[3] + "</br>");

// //QUESTION#14
// let devices1 = ["keyboard" , "mouse" , "printer" , "monitor"];
// document.write("<h1>Devices:</h1></br>" + devices + "</br>");
// document.write("<b>Out </b></br>" + devices[3] + "</br>");
// document.write("<b>Out </b></br>" + devices[2] + "</br>");
// document.write("<b>Out </b></br>" + devices[1] + "</br>");
// document.write("<b>Out </b></br>" + devices[0] + "</br>");

//QUESTION#15
// let phones = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
// document.write("<select>");
// document.write("<option>" +phones[0] + "</option>");
// document.write("<option>" +phones[3] + "</option>");
// document.write("<option>" +phones[5] + "</option>");
// document.write("<option>" +phones[2] + "</option>");
// document.write("<option>" +phones[4] + "</option>");
// document.write("<option>" +phones[1] + "</option>");
// document.write("</select>");

