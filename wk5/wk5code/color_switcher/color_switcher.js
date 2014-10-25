$(document).ready(function() {
	
	$('#grayButton').click(function(){
    $("body").attr('class','gray');
    $("a").text('Search for a gray dog.');
    $("a").attr('href', 'https://duckduckgo.com/?q=gray+dog')
	});

	$('#whiteButton').click(function(){
    $("body").attr('class','white');
    $("a").text("Search for a white dog.");
    $("a").attr('href', 'https://duckduckgo.com/?q=white+dog')
	});

	$('#blueButton').click(function(){
    $("body").attr('class','blue');
    $("a").css('color','white');
    $("a").text("Search for a blue dog.");
    $("a").attr('href', 'https://duckduckgo.com/?q=blue+dog')
	});	
	
	$('#yellowButton').click(function(){
    $("body").attr('class','yellow');
    $("a").css('color','black');
    $("a").text("Search for a yellow dog.");
    $("a").attr('href', 'https://duckduckgo.com/?q=yellow+dog')
	});


});

