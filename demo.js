// console.log(true?"hello":"ducat");
// console.log(false?"hello":"ducat");
/*
var a=10;var b=20
// console.log(a<b?a:b);
console.log(a>b?a:b);
*/ 
/*
&  |  ^(xor)   !
xor 
1     1   0
0     0   0
1     0   1
0     1   1
*/ 
// 17-10001
// 19-10011
//        128 64  32  16  8  4  2 1
/*
var a=7   // 1 1 1
var b=5 //   1 0 1
// var c=a&b//   1  0 1
// var c=a|b //  1 1 1
var c=a^b //    0 1 0
console.log(c);

if statement 
if(condition){
    statement 
}

if(true){
    console.log("hello");
}

var a=11
if(a%2==0){
    console.log("even no");
}
 
var a=10;var b=2;var c=6
if(a>b && a>c){
    console.log(a);
}
if(b>c && b>a){
    console.log(b);
}
if(c>a && c>b){
    console.log(c);
}

if-else statement 
if(condition){
    statement 1
}
else{
    statement 2
}

if(false){console.log("this is true");}
else{console.log("this is false");}

var a=50
if(a%2==0){
    console.log(a+" even no");
}
else{
    console.log(a+" odd no");
}

var a=20;var b=5; var c=8
if(a>b)
     if(a>c){
        console.log(a);
     }
     else{
        console.log(c);
     }
else
    if(b>c){
        console.log(b);
    }
    else{
        console.log(c);
    }

if else if else statement 
if(condition 1){
    statement 1
}
else if(conditio 2){
    statement 2
}
. . .   . .
 .. . . . 
 . .  .
 else{
    statement false 
 }

var marks=27
if(marks>=75){console.log("honours");}
else if(marks>=60){console.log("first");}
else if(marks>=50){console.log("second");}
else if(marks>=30){console.log("third");}
else{
    console.log("fail");
}

>10k-30%
>7k-20% 
>5k-10% 
<5k- no discount 
9880
total amount=9880
dis=?
pay=?
 */
var amount=4200
if(amount>10000){
    var dis=(amount*30)/100
    var pay=amount-dis
    console.log("amount=",amount,"\ndis=",dis,"\npay=",pay);
}
else if(amount>7000){
    var dis=(amount*20)/100
    var pay=amount-dis
    console.log("amount=",amount,"\ndis=",dis,"\npay=",pay);
}
else if(amount>5000){
    var dis=(amount*10)/100
    var pay=amount-dis
    console.log("amount=",amount,"\ndis=",dis,"\npay=",pay);
}
else{
    var dis=(amount*0)/100
    var pay=amount-dis
    console.log("amount=",amount,"\ndis=",dis,"\npay=",pay);
}
