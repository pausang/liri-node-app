console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_SECRET
};

var fs = require ('fs');
var axios = require('axios');


var keys = function() {
    this.findShow = function(show) {
        var URL ="http://open.spotify.com/track/6rqhFgbbKwnb9MLmUQDhG6" + show;
        axios
        .get(URL)
        .then(function(response) {
            fs.appendFile("log.txt", JSON.stringify(response.data),function (err){
                if (err) {
                    console.log(err);
                }
            })
            console.log(response.data.)
        })
    }
}