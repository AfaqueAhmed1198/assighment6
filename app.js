//String Methods
//--------------------------------------chapter 21-25------------------------------------------------------->

//question 1
var firstname = window.prompt("Enter your name: ");
var lastname = window.prompt("Enter your name: ");
alert("FullName is "+firstname+lastname);

//question 2
var mbname = window.prompt("Enter your favorite Mobile Name:");
alert("My favorite phone is:"+mbname+"\n"+"length of String is "+mbname.length);

//quesition 3
var str ="pakistani"
alert("String:"+str+"\n"+"Index of n is "+str.indexOf('n'));

//question 4
var str ="hello world"
alert("String:"+str+"\n"+"Last Indes of l is"+str.lastIndexOf('l'));

//question 5
var str ="pakistani"
alert("String:"+str+"\n"+"character of Index  3 is : "+str.charAt(3));

//question 6
var firstname = window.prompt("Enter your name: ");
var lastname = window.prompt("Enter your name: ");
alert("FullName is "+firstname.concat(lastname));

//question 7
 // Assigning a string 
    var str = 'Hyderabad'; 
// Calling replace() function 
var newstr = str.replace(/Hyder/,'Islam'); 
// Printing replaced string using Alert
alert("City: "+str+"\n"+"After Replacement: "+newstr);

//question 8 
var str = 'Ali and Sami are best friends. They play cricket and football together'; 
var newaccu = str.replace(/and/,'&'); 
alert(newaccu);
  
//question 9
var text = '472';
var number = 472;
alert("Value: "+text+"\n"+"Type: "+typeof(text)+"\n"+"Value: "+number+"\n"+"Type: "+typeof(number));

 //question 10
var pea = window.prompt("Enter input: ");
alert("userinput: "+pea+"\n"+"Uppercase: "+pea.toUpperCase());

//question 11
var text=prompt("Enter some text");
  var captializeStrig =(str) =>str[0].toUpperCase()+ str.slice(1).toLowerCase();
var res = text.split(' ').map(captializeStrig);
 var capitalizeSentence =res.join(' ');
 alert("Users input : " +text+"\n"+"Upper case : " +capitalizeSentence);
 
//question 12
 var d = 35.36;
 var s = d + '';
s =s.replace('.', '');
alert("Number: "+d+"\n"+"Result: "+s);
//question 13
 userName = prompt("Enter username: ");
if (userName.includes("@") || userName,includes(".") || userName.includes(",") || userName.includes("!")){
    alert("please enter a valid username");
}else {
    alert("username valid");
}
//quesition 14
//question 15
//quesition 16
var university = "University of Karachi";
for (i=0 ; i<university.length; i++){
	  document.write("<h3>"+university[i]+"<h3>");
}
//question 17
var inp = prompt("Enter Country: ");
lindex = inp.charAt(inp.length-1);
document.write("<h3>User Input:<h3> "+inp)
document.write("<br><h3>Last Element of Input is:<h3> "+lindex)
//question 18
text ='The quick brown fox jumps over the lazy dogs'
fd=0
var check = "the";
var textck=text.toLowerCase()
for(j=0;j<text.length;j++){
	tg = textck.slice(j,(check.length)+j)

    if(check=tg){
    	fd +=1
    }
 }
 document.write("Text:"+text)
 if (fd=0){
 	document.write("<h3> There are:"+fd+" occurrences of the world")
 }
 else{
 	document.write("<h3> There are:"+fd+" occurrences world")
 }
 //MATH METHODS
 //------------------------------------------------chapter 26-30------------------------------------------>
//question1
number =+prompt("Enter positive integer:");
if (number<=0){
alert("not a positive number");
}
else{
document.write("number =" +number);
var roundOffValue = Math.round(number);
document.write("<br>Round off value = " +roundOffValue);
var floorValue = Math.floor(number);
document.write("<br>Floor value of number =" +floorValue);
var ceilValue =Math.ceil(number);
document.write("<br>Ceil value of number = " +number);
}
//quesition2
var number =+prompt("Enter a negative floating point integer:");
if (number>=0){
alert("not a negative floating point number");
}
else{
document.write("number =" +number);
var roundOffValue = Math.round(number);
document.write("<br>Round off value = " +roundOffValue);
var floorValue = Math.floor(number);
document.write("<br>Floor value of number =" +floorValue);
var ceilValue =Math.ceil(number);
document.write("<br>Ceil value of number = " +number);
}
//question3
var num =+prompt("Enter positive or negative number");
var absoluteValue =Math.abs(num);
alert("Absolute value of" +num +"=" +absoluteValue);
//question4
var diceRoll1 = Math.floor( Math.random() * 6 ) +1;
document.write('===Task4==<br>Random dice value : ' + diceRoll1);
var diceRoll2 = Math.floor( Math.random() * 6 ) +1;
document.write('<br>Random dice value : ' + diceRoll2);
//question5
var heads = 0;
var tails = 0;
if (Math.random() < 0.5){
    document.write("<br>====Task5===<br>2 Random coin value:Heads")
}else{
    document.write("<br>====Task5===<br>1 Random coin value: Tails")
}
//question6
var number = Math.floor(Math.random() * 100);
document.write("<br>====Task6====<br> Random number between 1 and 100 : " +number)
//question7
var weight = prompt("Enter your weight in Kilograms")
document.write("<br>===Task7===<br>The weight of users is: "+weight);
//question8
var secretNum=Math.floor(Math.random()*10)
var number =+prompt("Enter a number between 1 and 10")
if (number===secretNum){
    alert("Congratulation you won!")
}
else{
    alert("Try again!")
}


//DATA METHODS
//***********************************************************CHAPTER = 31-34*******************************************************
//question 1
var d = new Date();
document.write(d);
//question 2
var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var now       = new Date();
var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
document.write("Current Month: "+thisMonth);
//question 3
var day =['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
var now = new Date();
var d = day[now.getDay()];
document.write("Today is: "+d);
//question 4
var day =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
var now = new Date();
var d = day[now.getDay()];
document.write("Today is: "+d);
if(day[5]||day[6]){
	document.write("<h4>"+"<br>It's Funday"+"</h4>");
}else{
	document.write("no weekend");
}
//question5

 var Tdate=new Date()
 var date=date.getDate()
 document.write("<h1 style='color:brown'>TODAY DATE :"+date+"</h1>")
 if(date<=15){
     alert("First fifteen days of the month")
 }

 else{
     alert("Last days of the month")
 }


//question6

 var date=new Date()
 var tmsec=date.getTime()
 var smin=tmsec/(1000*60*60)
 document.writeln("<h1 style='color:#0F6DA7'> Current Date :"+date+"</h1>")
 document.writeln("<h1 style='color:#0F6DA7 '> Elapsed milisecond since 1970 1 january : "+tmsec+"</h1>")
 document.writeln("<h1 style='color:#0F6DA7 '> Elapsed Minutes since 1970 1 january  : "+smin+"</h1>")

//question7
var d = new Date();
var n = d.getUTCHours();
var m = d.getUTCMinutes();
var s = d.getUTCSeconds();
if (n <= 12 && m == 00 && s == 00) {
    alert("It's AM")
}
else {
    alert("It's PM");
}
//question 8
var rightNow = new Date();
var laterDate = new Date(2020, 11, 31, 00);
alert(laterDate);
//question9
var date1 = new Date("05/18/2015"); 
var date2 = new Date();  
var Difference_In_Time = date2.getTime() - date1.getTime();  
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);  
document.write(Difference_In_Days+"Days have passed since 1st Ramadan, 2015");
//question10

 var cdate=new Date()
 var pdate=new Date()
 var phdate=pdate.setHours(pdate.getHours()-1)
 var agodate=new Date(phdate)
 document.write("<h1 style='color:blue'>Current Date : "+cdate+"<br>1 Hour Ago,it was "+agodate+"</h1>")

//question11
var d = new Date();
document.write("Current Date: "+d);
var currHour = d.getHours();
var resetHour = d.setHours(currHour - 1);
document.write("1 hour ago, It was: "+resetHour);
//question12
var d = new Date();
document.write("Current Date: "+d);
var currYear = d.getFullYear();
var resetYear = d.setFullYear(1920);
document.write("100 years back, It was: "+resetYear);
//question13

 var age =prompt("Enter Age ")
 var date=new Date()
 var adate=new Date()
 var bdate=adate.setFullYear(adate.getFullYear()-age)
 bdate=new Date(bdate)
 document.write("Your Age :"+age+"<br>")
 document.write("Your Birth Year is :"+bdate.getFullYear())

//question14

var montharry=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
var cusname=prompt("Enter Custromer Name :")
var date=new Date()
var mon=date.getMonth()
var nounit=prompt("Enter A Number Of Units : ")
const cunit=16
var scharge=350
var pdate=nunit*cunit
var ddate=pdate+scharge
document.write("<h1>--------------K-Electric Bill---------------------</h1>")
document.write("<h1>Customer Name : "+cusname+" </h1>")
document.write("<h1>Month  : ||"+montharry[mon]+"</h1>")
document.write("<h1>Number Of Unit  : "+nounit+"</h1>")
document.write("<h1>Charges Per Unit : "+cunit+"</h1>")
document.write("<br><h1>Net Amount Payable (Within Due Date ) : "+pdate+"</h1>")
document.write("<h1>Late Payment SurCharge :  "+scharge+"</h1>")
document.write("<h1>Gross Amount Payable (After Due Date) : "+ddate+"<br>")
 document.write("<h1>-----------------YOUR BILL--------------------- --</h1>")
//FUCNTIONS
///****************************************Chapter 35-38*********************************************************************
//question 1
function telldateTime(d) {
document.write("<h1>"+d);
    
 }
 var d = new Date();
 telldateTime(d);

 //question 2
  function fullname(firstname,lastname){

    alert("FullName is "+firstname.concat(lastname));
 }
  var firstname = prompt("Enter firstname");
  var lastname = prompt("Enter lastname");
 fullname(firstname,lastname);
 //quesition 3
 function add(a,b){
var a,b,c;
c= a + b;
alert("sum of number: "+c);
}
a = +prompt("Enter firstnumber");
b = +prompt("Enter Secondnumber");
add(a,b);
//question6

 function Factorial(numb){

     a=1
     for(b=numb;b>0;b--){
         a=a*b
    }
     return a
 }
 n=+prompt("Enter Number To Find Factorial :")
 a=Factorial(n)
 document.write("The Factorial of "+ n +" is : "+a);
//question 11
function capital(){
var text=prompt("Enter some text");
  var captializeStrig =(str) =>str[0].toUpperCase()+ str.slice(1).toLowerCase();
var res = text.split(' ').map(captializeStrig);
 var capitalizeSentence =res.join(' ');
 document.write("EXAMPLE STRING : " +text+"\n"+"<br>EXPECTED OUTPUT : " +capitalizeSentence);
}
capital();
//<------------------------------------END-------------------------------------------------------->