// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title": "New Rules",
	"artist": "Dua Lipa",
	"mp3-url": "https://www.youtube.com/watch?v=k2qgadSvNyU",
	"image-url": "http://www.nme.com/news/music/dua-lipa-new-rules-christmas-2166432",
	"songLengthMinutes": 3,
	"songLengthSeconds": 44
}

var myPlayList = [{
		"title": "Benz Truck",
		"artist": "Lil Peep",
		"mp3-url": "https://www.youtube.com/watch?v=3rkJ3L5Ce80",
		"image-url": "",
		'songLengthMinutes': 2,
		'songLengthSeconds': 40

	},
	{
		"title": "Baby Came Home 2/Valentines",
		"artist": "The Neighbourhood",
		"mp3-url": "https://www.youtube.com/watch?v=c0V3OKDigeY",
		"image-url": "https://www.billboard.com/music/the-neighbourhood",
		'songLengthMinutes': 6,
		'songLengthSeconds': 30
	},
	{
		"title": "New Rules",
		"artist": "Dua Lipa",
		"mp3-url": "https://www.youtube.com/watch?v=k2qgadSvNyU",
		"image-url": "http://www.nme.com/news/music/dua-lipa-new-rules-christmas-2166432",
		"songLengthMinutes": 3,
		"songLengthSeconds": 44

	}

]

var myPlayListArray = [

//		for (var i = 0; i < myPlayListArray.length; i++ {
//			console.log(myPlayList[i]).title;

//		})




];








// DOCUMENT READY FUNCTION
$(document).ready(function() {




});

function displayList() {



}

function clearList() {



}

function addSong() {



}


('body').append('<p> title:  ' + mySong.title + '</p>');

$("#submit").click(function() {
    var newSong = {
        title: $("#title").val(),
        artist: $("#artist").val(),
        PlayLink: $("#play-link").val(),
        AlbumImage: $("#album-image").val()
        // Create an object with a title, 
        // artist, link, and image value
        // from the inputs in the HTML
    };
    console.log(newSong);
});