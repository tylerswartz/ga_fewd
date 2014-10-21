function calculate(x,y,z) {
	if (z === "+") {
		return (x + y);
	} else if (z === "-") {
		return (x - y);
	} else if (z === "*") {
		return (x * y);
	} else if (z === "/") {
		return (x / y);
	} else {
		return "error, you didn't enter +, -, * or /";
	}
}



alert("Welcome to calculator? Give me two numbers and the operator (+,-,*,/) Ready?");


var x = prompt("What is the first number?");
var z = prompt("What is the operator (+,-,*,/)");
var y = prompt("What is the second number?");

x = parseInt(x);
y = parseInt(y);


var result = calculate(x,y,z);

alert("The result is: " + result);

