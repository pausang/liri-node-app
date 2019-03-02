console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

// var fs = require ('fs');
// var axios = require('axios');


// var spotify = function() {
//     this.findShow = function(show) {
//         var URL ="https://api.spotify.com/v1/browse/new-releases";
//         axios
//         .get(URL)
//         .then(function(response) {
//             fs.appendFile("log.txt", JSON.stringify(response.data),function (err){
//                 if (err) {
//                      console.log(err);
//                 }
//             })
//             console.log(response.data.name);
//             console.log(response.data.genres);
//             console.log(response.data.rating.average);
//             console.log(response.data.network.name);
//             console.log(response.data.sumary);
//         })
//     };
//     this.findArtists = function(artists) {
//         var URL = "https://api.spotify.com/v1/browse/new-releases?country=SE" + artists;
//         axios.get(URL)
//         .then(function(response) {
//             fs.appendFile("log.txt", JSON.stringify(response.data), function (err) {
//                 if (err) {
//                     console.log(err.response);
//                 }
//             })
//             console.log(response.data.name);
//             console.log(response.data.genres);
//             console.log(response.data.rating.average);
//             console.log(response.data.network.name);
//             console.log(response.data.summary);
//         })
//     }
// };
// module.exports = spotify;