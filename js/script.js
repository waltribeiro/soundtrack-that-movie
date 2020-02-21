var apiKeyYoutube = "AIzaSyCeb5HlrnsOhcdQDoC91dpbZe2Wo_Onibo";
var apiKeyOMDB = "a648d87c";

// working string = http://www.omdbapi.com/?t=rocky&apikey=a648d87c

// search button captures the input you type in

document.getElementById('searchButtonForm').addEventListener("submit", function(event) {
  event.preventDefault();
  var searchValue = document.getElementById("searchButtonInput").value;
  var youtubeQueryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchValue + "%20ost%20single" + "&type=video" + "&key=" + apiKeyYoutube + "&maxResults=5";
  
  
  console.log(searchValue);
  var omdbQueryURL = "http://www.omdbapi.com/?t=" + searchValue + "&apikey=" + apiKeyOMDB;
  var searchButton
  var searchButtonInput
  var searchButtonForm

  console.log(searchValue)

   //takes that string and sends it as an API call to OMDB
  $.ajax({
    url: youtubeQueryURL,
    method: "GET",
  }).then(function(results){
    console.log(results);
    console.log(youtubeQueryURL);
    console.log(results.items[0].snippet.title);
    let songArray = ((results.items[0].snippet.title).split(', '));
    let songArray2 = ((results.items[1].snippet.title).split(', '));
    let songArray3 = ((results.items[2].snippet.title).split(', '));
    for(let i = 0; i < songArray.length; i++) {
      $('#omdbSoundtrack').append("<br />&nbsp;&nbsp;&nbsp;&nbsp;")
      $('#omdbSoundtrack').append(songArray[i], '<br />&nbsp;&nbsp;&nbsp;&nbsp;', songArray2[i] );
    }
  });

  $.ajax({
    url: omdbQueryURL,
    method: "GET"
  }).then(function(response) {
    // OMDB returns a JSON form
    console.log(response);
    console.log(response.Title);
    console.log(response.Soundtrack);
    console.log(response.Poster)
    console.log(response.Song);
    console.log((response.Actors).split(', ')); // how do I create elements on a new line?
let actorArray = ((response.Actors).split(', '));
for (let i = 0; i < actorArray.length; i++) {
  $("#omdbActors").append("<br />&nbsp;&nbsp;&nbsp;&nbsp;")
  $("#omdbActors").append(actorArray[i]);
}
$("#omdbYear").append(response.Year)
$("#omdbTitle").append(response.Title)
$("#omdbPoster").attr("src", response.Poster)

// if (response.Error = "Something went wrong") {
//   $("#omdbAlert").text("HELLO");
// } else if (Error = "Something went wrong") {
//   $("#omdbAlert").append("MY");
// } else if (searchValue === "") {
//   $("#omdbAlert").text("NAME");
//   console.log("YEAAA");
// } else {
//   $("#omdbAlert").text("WALT");
// }

  });


var newDiv = document.createElement("div");
newDiv.textContent = omdbYearVar;
$("#omdbYear").append(newDiv);
  
});


// Go through the JSON form and pull data from the Objects

// send that to each respective <div> elements


// empty <div> tags in HTML with ID
// use selectors to grab the ID
// use .text to display the results (or .textContent with Javascript)

// .fadeIn( [duration ] [, complete ] )
