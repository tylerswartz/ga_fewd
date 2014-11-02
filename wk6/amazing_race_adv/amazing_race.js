$(document).ready(function() {
	
	var player_one_position = 0;
	var player_two_position = 0;
	var game_on = true;
	var speed = 0;
	var rand;
	
	//start positions
	$(".player-1 td").eq(0).addClass('active');
	$(".player-2 td").eq(0).addClass('active');

	//check if the player or bot has reached the end.
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

	//Player one keypress on A
	$("body").keydown(function(e) {
 		if(e.which === 65) {
			$(".player-1 td").eq(player_one_position).removeClass('active');
			player_one_position ++;
			$(".player-1 td").eq(player_one_position).addClass('active');
			check_winner();	
		}

	});

	//BOT Program
	setInterval(function(){
		if (game_on === true) {
			rand = (Math.floor(Math.random() * (700 - 200 + 1)) + 200);
			setTimeout(function(){
				$(".player-2 td").eq(player_two_position).removeClass('active');
				player_two_position++;
				$(".player-2 td").eq(parseFloat(player_two_position)).addClass('active');
				check_winner();
			}, rand);
		} else {
			return false;
		};
	}, 100);		

	//Restart the game and play again
	$("#restart").click(function(){
		location.reload();
	});

});
