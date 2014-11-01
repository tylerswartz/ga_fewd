$(document).ready(function() {
	
	var player_one_position = 0;
	var player_two_position = 0;
	
	$(".player-1 td").eq(0).addClass('active');
	$(".player-2 td").eq(0).addClass('active');

	function check_winner(){
		if (player_one_position === 49 && player_two_position != 49) {
			$(".winner").html("PLAYER ONE WINS!!");
			$("#restart").removeClass('hidden');
			$("#restart").addClass('show');
		} else if (player_one_position != 49 && player_two_position === 49) {
			$(".winner").html("PLAYER TWO WINS!!");
			$("#restart").removeClass('hidden');
			$("#restart").addClass('show');
		}
	};

	$("body").keydown(function(e) {
 		if(e.which === 65) {
			$(".player-1 td").eq(player_one_position).removeClass('active');
			player_one_position ++;
			$(".player-1 td").eq(player_one_position).addClass('active');
			check_winner();

		} else if (e.which === 76) {
			$(".player-2 td").eq(player_two_position).removeClass('active');
			player_two_position ++;
			$(".player-2 td").eq(player_two_position).addClass('active');
			check_winner();

		}
	});

	$("#restart").click(function(){
		location.reload();
	});

});
