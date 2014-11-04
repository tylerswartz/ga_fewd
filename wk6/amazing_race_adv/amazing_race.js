$(document).ready(function() {
	
	var player_one_rank = 0;
	var player_one_position = 0;
	var player_two_rank = 0;
	var player_two_position= 0;
	var game_on = false;
	var speed = 0;
	var rand;
	
	//start positions
	$(".player-1 td").eq(0).addClass('active');
	$(".player-2 td").eq(0).addClass('active');

	//start button for bot
	$("#start").click(function(){
		game_on = true;
		$("#start").addClass('hidden');
		$(".ready").addClass('hidden');
	});

	//check if the player or bot has reached the end.
	function check_winner(){
		if (player_one_position === 98 && player_two_position != 98) {
			$(".winner").html("PLAYER ONE WINS!!");
			$("#restart").removeClass('hidden');
			$("#restart").addClass('show');
			game_on = false;
			$("body").off("keydown");

		} else if (player_one_position != 98 && player_two_position === 98) {
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
			player_one_rank ++;
			player_one_position = player_one_position + 2;
			$(".player-1").css('margin-left', player_one_position + '%');
			check_winner();	
		}
	});
	

	//BOT Program
	setInterval(function(){
		rand = (Math.floor(Math.random() * (700 - 200 + 1)) + 200);
		setTimeout(function(){
			if (game_on === true) {
				player_two_rank ++;
				player_two_position = player_two_position + 2;
				$(".player-2").css('margin-left', player_two_position + '%');
				check_winner();
			} else {
				return false;
			};
		}, rand);
	}, 160);		

	//Restart the game and play again
	$("#restart").click(function(){
		location.reload();
	});

});
