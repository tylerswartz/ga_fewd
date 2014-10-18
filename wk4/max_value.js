//using IF statement //

function highNumber(a,b,c) {
	if (a > b) {
		if (a > c){
			return a;
		} else {
			return c;
		}
	} else if (b > c){
		return b;
	} else {
		return c;
	}
}

var num1 = prompt("give me a number");
var num2 = prompt("give me another number");
var num3 = prompt("give me one last number");

var num1 = parseInt(num1);
var num2 = parseInt(num2);
var num3 = parseInt(num3);

var highest = highNumber(num1,num2,num3);

alert("the highest number is:" + highest)



//Using Math.max calculation//

function highNumber(a,b,c) {
	return Math.max(a,b,c)
}

var num1 = prompt("give me a number");
var num2 = prompt("give me another number");
var num3 = prompt("give me one last number");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

var highest = highNumber(num1,num2,num3);

alert("the highest number is:" + highest)



//Max and Min calculation//
function highNumber(a,b,c,d,e) {
	return Math.max(a,b,c,d,e);
}

function lowNumber(a,b,c,d,e) {
	return Math.min(a,b,c,d,e);
}


var num1 = prompt("give me the first of five numbers");
var num2 = prompt("give me the second number");
var num3 = prompt("give me the third number");
var num4 = prompt("give me the fourth number");
var num5 = prompt("give me the fifth number");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
num4 = parseInt(num4);
num5 = parseInt(num5);

var highest = highNumber(num1,num2,num3,num4,num5);
var lowest = lowNumber(num1,num2,num3,num4,num5);

alert("the highest number is " + highest + ". The lowest is " + lowest + ".");


















