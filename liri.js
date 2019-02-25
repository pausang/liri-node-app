require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
//console.log(spotify);

var title = process.argv[2];

var name = process.argv.slice(3).join(" ");

if (!title) {
    title = "show";
}

if (!name) {
    name = "song";
}

if (title === "show") {
    console.log("Searching for Spotify show");
    
} else {
    console.log("Searching for Spotify Song");

}

console.log(title + " " + name);