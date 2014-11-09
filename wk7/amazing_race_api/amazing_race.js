$(document).ready(function() {
	
	var player_one_rank = 0;
	var player_one_position = 0;
	var player_two_rank = 0;
	var player_two_position = 0;
	var game_on = false;
	var speed = 0;
	var rand;
	var start_time;
	var end_time;
	var time;
	var player_name;
	var avatar;
	var avatar_search;

	// function to build the flickr URL
	function buildFlickerUrl(p){
		var url = "https://farm";
		url += p.farm;
		url += ".staticflickr.com/";
		url += p.server;
		url += "/";
		url += p.id;
		url += "_";
		url += p.secret;
		url += ".jpg";
		return url;
	}

	// search for avatar with API
	$("#avatarSearchBtn").click(function(){
		avatar_search = $(".search-input").val();
		$("#avatars").removeClass('hidden');
		$.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=4ef070a1a5e8d5fd19faf868213c8bd0&nojsoncallback=1&text=" + avatar_search, function(response) { 
    	for (var i=0; i < 3; i++){
	    	var photoUrl = buildFlickerUrl(response.photos.photo[i]);
	    	$("img").eq(i).attr('src', photoUrl);
	    	$("input.player-1-avatar").eq(i).val(photoUrl);		
    	};
		});
	});


	//setup form and player name
	$("form").submit(function(){
		player_name = $(".name-input").val();
		$(".first").text(player_name);
		avatar = $(".player-1-avatar:checked").val();
		$("img.player-1").attr('src', avatar);
		$("#overlay").css('display','none');
		$("#setup-screen").css('display','none');

		return false;
	});

	//start positions
	$(".player-1 td").eq(0).addClass('active');
	$(".player-2 td").eq(0).addClass('active');

	//start button for bot
	$("#start").click(function(){
		game_on = true;
		start_time = $.now();
		$("#start").addClass('hidden');
		$(".ready").addClass('hidden');
	});


	//check if the player or bot has reached the end.
	function check_winner(){
		if (player_one_position === 94 && player_two_position != 94) {
			end_time = $.now();
			time = ((end_time - start_time) / 1000);
			game_on = false;
			$(".winner").html( player_name + " WINS with a time of " + time + " seconds!!");
			$("#restart").removeClass('hidden');
			$("#restart").addClass('show');
			$("body").off("keydown");

		} else if (player_one_position != 94 && player_two_position === 94) {
			end_time = $.now();
			time = ((end_time - start_time) / 1000);
			game_on = false;
			$(".winner").html("Robot WINS with a time of " + time + " seconds!!");
			$("#restart").removeClass('hidden');
			$("#restart").addClass('show');
			$("body").off("keydown");
		}
	};

	//Player one keypress on A
	$("body").keydown(function(e) {
 		if(e.which === 65 && game_on === true) {
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
	}, 145);	


	//Restart the game and play again
	$("#restart").click(function(){
		location.reload();
	});

});
