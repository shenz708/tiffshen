var api = "http://api.giphy.com/v1/gifs/search?";
//var api = "http://api.giphy.com/v1/stickers/search?";

//var thing = "rainbow";

var apiKey = "&api_key=dc6zaTOxFJmzC&q=";

//var query = "&q=rainbow";

function setup(){
	noCanvas();
	var button = select('#submit');
	button.mousePressed(abcAsk); 

	input = select('#keyword'); 
}

function abcAsk(){
	var url = api + apiKey + input.value();
 	//var url = api + apiKey + query;
	loadJSON(url, gotData);
}

function gotData(giphy){
	for (var i = 0; i < giphy.data.length; i++){
		createImg(giphy.data[i].images.original.url);
	}
}