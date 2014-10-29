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

			// check number
			if($.isNumeric(input)) {
				//remove error msg if needed
				$(".error").attr('class','hidden');

				//add to current total
				current_total = current_total + input;
			
				//add new row to table
				$("#entries tr:last").after('<tr><td></td><td>' + input.toFixed(2) + '</td></tr>');

				//sum and display as total in two decimals
				$("#total").html("$" + current_total.toFixed(2));

				//clear input
				$(':input','#entry').val('');
			}

			else {
				// give error msg
				$(".hidden").attr('class','error');

				//clear input
				$(':input','#entry').val('');

				//ask for another number
				input = parseFloat($("#newEntry").val());

			}

			return false;
  	}
	});	
});



