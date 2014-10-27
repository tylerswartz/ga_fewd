var current_total
var input

$(document).ready(function() {
	//start total
	current_total = 0;
	
	//remove chrome autocomplete dropdown from appearing.
	//code

	//take submit input
	$('#entry').keypress(function (e) {
 		var key = e.which;
 		if(key === 13) {
  
			//get text/value out
			input = parseFloat($("#newEntry").val());

			// //check number
			// while(isNaN(input)) {

			// 	// give error msg
			// 	$("#hidden").removeAttr(‘class’,'hidden');
			// 	$("h2").attr(‘class’,'hidden');

			// 	//clear input
			// 	$'#newEntry').value = '';

			// 	//ask for another number
			// 	input = parseFloat($("#newEntry").val());

			// 	//remove error msg
			// 	$("h2").attr(‘class’,'hidden');
			// };

			//add to current total
			current_total = current_total + input;

			//add new row to table
			$("#entries tr:last").after('<tr><td></td><td>' + input + '</td></tr>');


			//sum and display as total in two decimals
			$("#total").html("$" + current_total.toFixed(2));

			//clear input
			// $('#newEntry').val = '';
			$("#newEntry").focus("How much?");

			return false;
  	}
	});	
});
