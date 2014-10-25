var fruits = [];

//loop and add elemnts to an array
for(var i = 0; i < 5; i++) {
	fruits.push(prompt("give me a fruit"));
}

//loop through the array and do something to each member. in this case alert it.
for(var i = 0; i < fruits.length; i++) {
	alert(fruits[i]);
}


//to ask for fruits until stop and then just print out fruits
var fruits = [];

var new_fruit = prompt("just give me a fruit or tell me to stop...");

while(new_fruit !=== "stop") {
	fruit.push(new_fruit);
	new_fruit = prompt("just give me a fruit or tell me to stop...");
}

for(var i = 0; i < fruits.length; i++) {
	alert(fruits[i]);
}