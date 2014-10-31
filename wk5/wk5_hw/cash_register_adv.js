var price_input;
var item_input;
var total;
var remove_price;

$(document).ready(function() {
	var total = 0;

	$('#entry').keypress(function (e) {
 		var key = e.which;
 		if(key === 13) {
  
			price_input = parseFloat($("#priceEntry").val());
			item_input = $("#itemEntry").val();

			if($.isNumeric(price_input)) {
				$(".error").attr('class','hidden');
				total = total + price_input;
				$("#entries tr:last").after('<tr><td>' + item_input + '<img class="delete" src="delete_icon.png"></td><td>' + price_input.toFixed(2) + '</td></tr>');
				$("#total").html("$" + total.toFixed(2));
				$(':input','#entry').val('');
			}

			else {
				$(".hidden").attr('class','error');
				$(':input','#entry').val('');
				price_input = parseFloat($("#priceEntry").val());
			}	
  	}

		$('.delete').unbind().click(function(){
	  	remove_price = parseFloat($(this).parents('tr').find('td:last').text());
	  	total = total - remove_price
	  	$(this).closest("tr").remove();
	  	$("#total").html("$" + total.toFixed(2));
	  }); 

	});
  	return false;
});

