/*
var a=10;var b=30;var c=100
var a=b=c=50;
var a,b,c;
a=20;b=30;c=40

var a=10;var b=20;
var c=b
b=a 
a=c 
document.write("A="+a+"<br>")
document.write("B=",b)
console.log("A="+a+"\n");
console.log("B=",b);
*/
// var a=10
// a=50
// a=70
// console.log(a);
/*
var a=50;var b=100
b=a+b //50+100=150
 a =b-a //150-50=100
 b=b-a //150-100=50
 console.log("A=",a,"\nB=",b);

string 
number 
boolean 
undefine 
null 

var data="Rahul kumar"
document.write("name="+data)
console.log("name="+data);

var a=10;var b=2.5;
var mult=a*b 
console.log("Result="+mult);

// var bool=true 
var bool=false 
console.log(bool);

var a;
console.log(a);
 
var a=null 
console.log(a);

var data="rahul"
console.log(typeof(data));
// document.write(typeof(data))
 */

// +,-,*,/,%,**
/*
var a=20;var b=30
console.log(a*b);
console.log(a%7);
console.log(a**4);

days=993
y=?
m=?
w=?
d=?
*/ 
var days=1450
var y= parseInt(days/365)
days=days%365
var m=parseInt(days/30)
days=days%30
var w= parseInt( days/7)
days=days%7
console.log("year="+y+"\nmonth="+m+"\nweek="+w+"\ndays="+days);

