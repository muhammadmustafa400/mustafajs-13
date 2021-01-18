// var a = new Date()
// document.write(a)

// var month = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// var d = new Date();
// alert("The current month is " + month[d.getMonth()]);

// var currentDay = new Date();
// currentDay.toString;
// var b = currentDay.toString();
// var c = b.slice(0,3);
// document.write("Today is " + c);





// var a = new Date()
// var b = a.getDay() 
// switch (b){
//     case 0:
//         alert("it is funday")
//         break
//         case 6:
//             alert("it is funday")
//             default:
// alert("it is working day")
// }

// var a = new Date()
// var b = a.getDay()
// if(b<=15){
//     alert("the first fifteen days of month")
// }
// else{
//     alert("last days of month")
// }

//  var a = new Date()
//  document.write("current date" + a)
// var b = a.getTime()
// document.write("elapsed millisecond since january 1 , 1970:" + b + "<br>")
// var m = b/(1000*60)
// document.write("elapsed minute  since january 1 ,1970:" + m + "<br>")



//  var a = new Date()
//  var b = a.getHours()
//  if(b>=12){
//      alert("its p.m")
//  } 
//  else{
//      alert("its a.m")
//  }
// var a = new date ()
// var b = a.setdate(0)
// var c = b.todatestring()
// alert("later date" + c)

// var birth = new Date("June 6,2019")
// var a=new Date
// var birth=birth.getTime()
// var current=a.getTime()
// var total = (current-birth)/(1000*60*60*24*30)
// var c =total.toFixed(4)
// var b=Math.floor(total)
// alert("Days"+b+"")


// var a = new Date ()
// var b = new date("january 1, 2020")
// var c = a-b
// var d = c/1000*60
// var e = Math.floor(d).toFixed(0)
// document.write("on reference date: " + a + "," + e + "seconds has been passed since")

// var a = new Date()
// var b = new Date()
// b.setHours(b.getHours() - 1)
// document.write("current date "+ a + "<br>" + "1 hour ago" + b)

// var a = prompt("enter your age")
// var b = new Date().setFullYear-a
// document.write("Your age is "+ a + "br>" + "your birth year is " + b)
// alert(b)

      // var customerName = "mustafa Customer";
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var Nmonth = months[new Date().getMonth()];
// var numUnits = 410;
// var charge = 16;
// var netAmount = numUnits * charge;
// var lateCharge = 350;
// var crossAmount = netAmount + lateCharge;
// document.write(`<h1>K-Electric Bill</h1>Customer Name: <b>${customerName}</b><br>Month: <b>${Nmonth}</b><br> Number of units: <b>${numUnits}</b><br>Charges per unit: <b>${charge}</b><br><br>Net Amount Payable(within Due Date) : <b>${netAmount}</b><br>Late payment surchargee: <b>${lateCharge}</b><br>cross Amount Payable (after Due Date): <b>${crossAmount}</b><br>`)



// function blue(){
//     var a = new Date
//     document.write(a) 
// } 
// blue()


// var a = prompt("enter your first name")
// var b = prompt("enter your last name")
// function names(){
//     var c = a + " " + b
//     alert("welcome" + c)
// }
// names()



// var a = +prompt("enter your number ")
// var b = +prompt("enter your seond number")
// function sum(){
//     var c = a + b
//     alert(c)
// }
// sum()



// function calaulator(sum){
//     var a = +prompt("enter num")
//     var b = +prompt("enter num")
//     var c = prompt("enter operator")
//     if( c == "+"){
//         alert(a+b)
//     }
// else if (c == "-"){
//     alert(a-b)
// }

// else if (c == "*"){
//     alert(a*b)
// }

// else if (c == "/"){
//     alert(a/b)
// }

// else if (c == "%"){
//     alert(a%b)
// }

// }
// calaulator()               


// function square(){
//     var a = prompt("enter your  number")
//  var b = a*a
//  alert(b)   
// }
// square()


// function calculator(sum){
//     var a = +prompt("enter num")
//     var b = +prompt("enter num")
//     var c = prompt("enter operator")
//     if( c == "+"){
//         alert(a+b)
//     }
// else if (c == "-"){
//     alert(a-b)
// }

// else if (c == "*"){
//     alert(a*b)
// }

// else if (c == "/"){
//     alert(a/b)
// }

// else if (c == "%"){
//     alert(a%b)
// }

// }
// calaulator()               
// function calcArea(height,width) {
//     var area = height * width
//     return document.write(area+"<br>");
// }
// var height = 100;
// var width =100;
// calcArea(10,10);

// calcArea(height,width);



// function checkPalindrome(str){
//        var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var count = 0;
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//         if ((cstr.length) % 2 === 0) {
//             count = (cstr.length) / 2;
//         } else {
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//                 count = (cstr.length - 1) / 2;
//             }
//         }
//         for (var x = 0; x < ccount; x++) {
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a Palindrome.");
//         return document.write("this string is palindome");
//     }

//     checkPalindrome("madam");

