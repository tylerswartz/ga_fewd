$(document).ready(function() {
	
	var player_one_position = 0;
	var player_two_position = 0;
	var game_on = true;
	var speed = 0;
	
	$(".player-1 td").eq(0).addClass('active');
	$(".player-2 td").eq(0).addClass('active');

	function check_winner(){
		if (player_one_position === 49 && player_two_position != 49) {
			$(".winner").html("PLAYER ONE WINS!!");
			$("#restart").removeClass('hidden');
			$("#restart").addClass('show');
			game_on = false;
			$("body").off("keydown");

		} else if (player_one_position != 49 && player_two_position === 49) {
			$(".winner").html("PLAYER TWO WINS!!");
			$("#restart").removeClass('hidden');
			$("#restart").addClass('show');
			game_on = false;
			$("body").off("keydown");
		}
	};

	$("body").keydown(function(e) {
 		if(e.which === 65) {
			$(".player-1 td").eq(player_one_position).removeClass('active');
			player_one_position ++;
			$(".player-1 td").eq(player_one_position).addClass('active');
			check_winner();	
		}

	});

	setInterval(function(){
		speed = Math.floor(Math.random() * (800 - 100 + 1)) + 100;
		if (game_on === true){
			$(".player-2 td").eq(player_two_position).removeClass('active');
			player_two_position++;
			$(".player-2 td").eq(parseFloat(player_two_position)).addClass('active');
			check_winner();
		} else {
			return false;
		}
	}, speed);



	$("#restart").click(function(){
		location.reload();
	});

});
