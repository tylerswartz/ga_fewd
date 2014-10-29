var current_total
var price_input
var item_input

$(document).ready(function() {
	current_total = 0;

	$('#entry').keypress(function (e) {
 		var key = e.which;
 		if(key === 13) {
  
			price_input = parseFloat($("#priceEntry").val());
			item_input = $("#itemEntry").val();

			if($.isNumeric(price_input)) {
				$(".error").attr('class','hidden');
				current_total = current_total + price_input;
				$("#entries tr:last").after('<tr><td>' + item_input + '</td><td>' + price_input.toFixed(2) + '</td></tr>');
				$("#total").html("$" + current_total.toFixed(2));
				$(':input','#entry').val('');
			}

			else {
				$(".hidden").attr('class','error');
				$(':input','#entry').val('');
				price_input = parseFloat($("#priceEntry").val());
			}

			return false;
  	}
	});	
});


