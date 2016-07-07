
$(".video-thumbimg").each(function(index){
	var movieTitleSelector = $(this).find("div:first").find("div:first");
	var movieTitle = movieTitleSelector.text().trim();
	console.log(movieTitle);
	//Using the IMDB api provided by http://www.omdbapi.com/
	var apiUrl = "http://www.omdbapi.com/?i=" + "&t=" + movieTitle;

	$.getJSON( apiUrl , function( data ) {
	
		var imdbRating = data.imdbRating;
		var prevText = $(this).find(".videoHname title").text();
		console.log(prevText);
		//var imdbImg = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/IMDb_logo.svg/300px-IMDb_logo.svg.png\" alt=\"IMDB rating\" height=10% width=10% />";
		movieTitleSelector.html( movieTitle + " ( " + imdbRating + " ) ");

	});

});


