var current_total
var input

$(document).ready(function() {
	//define array
	current_total = 0
	

	//take submit input
	$("#entry").submit(function(){
		

		//get text/value out
		input = parseFloat($("#newEntry").val());

		//parseFloat, return number

		//check number
	
		//add to current total
		current_total = current_total + input;

		//add new row to table
	
		//sum up array and display as total

		//clear input
		return false;
	});	


		
});