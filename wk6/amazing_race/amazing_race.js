// document ready
$(document).ready(function() {
	
	//set variable that is counter (player_one_position)
	var player_one_position = 0;
	var player_two_position = 0;

	// set start position
	$(".player-1 td").eq(0).addClass('active');
	$(".player-2 td").eq(0).addClass('active');


	// key down listen.
	$("body").keydown(function(e) {
 		if(e.which === 65) {
			$(".player-1 td").eq(player_one_position).removeClass('active');
			player_one_position ++;
			$(".player-1 td").eq(player_one_position).addClass('active');
		} else if (e.which === 76) {
			$(".player-2 td").eq(player_two_position).removeClass('active');
			player_two_position ++;
			$(".player-2 td").eq(player_two_position).addClass('active');
		}

	});


});

//set variable that is counter (player_one_position)


// set start position
// $(".player-1 td").eq(0).addClass('active');





//increment counter

// add class to counter td (8th td, then 9th td)

// remove class from counter -1 td.
// $(".player-1 td").first().removeClass('active');

// win conditions
