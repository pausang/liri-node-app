require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api")
var fs = require ('fs');
var axios = require('axios');

var spotify = new Spotify(keys.spotify)
//console.log(spotify);

function concertThis(artist) {

    axios.get("https://rest.bandsintown.com/artists/" + artist + " /events?app_id=codingbootcamp").then(function(
    response){
    
        console.log("Concert-this:" + response.data.name);
        console.log('');
        console.log('===========================');
        console.log('result:'+ ' ' + venue.name);
    }
);

}


    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });

      
       axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
           function(response) {
            console.log("The movie's rating is: " + response.data.imdbRating);
            console.log("Title of the movie:" + response.data.title);
            console.log("Year the movie came out: " + response.data.year);
            console.log("Rotten Tomatoes Rating of the move " + response.data.tomatoesRating);
            console.log("Language of the movie " + response.any.language);
            console.log("Plot of the movie" + response.data.plot);
            console.log("Actors in the movie " + response.data.actors);
           }
       );
         
      
       function logBefore(func, message) {
        console.log(message);
      
        func();
      }
      
      function runIf(func, bool) {
        if (bool) {
          func();
        }
      }
      
      function wrap(func, value) {
        return function() {
          return func(value);
        };
      }
      fs.writeFile("random.txt", "I Want it That Way!", function(err) {

        if (err) {
          console.log(err);
        }
      
        console.log("File saved!");
      
      });
            