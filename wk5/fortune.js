// Step 1 & 2 HW
// function predictFuture() {
// 	fortunes = [];

// 	for(var i = 0; i < 5; i++) {
// 		fortunes.push(prompt("give me a potential fortune you'd like..."));
// 	}

// 	your_fortune = fortunes[Math.floor(Math.random() * fortunes.length)]

// 	alert("Your fortune is: " + your_fortune);

// }


// 
// Addvanced

var fortunes = [];

function addPrediction() {
	fortunes.push(document.getElementById('newPrediction').value);
	document.getElementById('newPrediction').value = '';
	var x = fortunes.length
	document.getElementById('numFortunes').innerHTML = ' from the ' + x + ' fortunes.';
}



function predictFuture() {
	your_fortune = fortunes[Math.floor(Math.random() * fortunes.length)]
	document.getElementById('numFortunes').innerHTML = '.';
	alert("Your fortune is: " + your_fortune);
	fortunes = [];
}
