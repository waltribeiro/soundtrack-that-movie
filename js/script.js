var apiKeyYoutube = "AIzaSyCeb5HlrnsOhcdQDoC91dpbZe2Wo_Onibo"
var apiKeyOMDB = "a648d87c"

// working string = http://www.omdbapi.com/?t=rocky&apikey=a648d87c

// search button captures the input you type in

document.getElementById('searchButtonForm').addEventListener("submit", function(event) {
  event.preventDefault();
  var searchValue = document.getElementById("searchButtonInput").value;
  var omdbQueryURL = "http://www.omdbapi.com/?t=" + searchValue + "&apikey=" + apiKeyOMDB;
  var searchButton
  var searchButtonInput
  var searchButtonForm

  console.log(searchValue)

  // takes that string and sends it as an API call to OMDB

  $.ajax({
    url: omdbQueryURL,
    method: "GET"
  }).then(function(response) {
    // OMDB returns a JSON form
    console.log(response);
    console.log(JSON.stringify(response));
    console.log(response.Year);
    console.log(response.Title);
    console.log(response.Soundtrack);
    console.log(response.Song);
    console.log(response.Actors).join("\n");
  });
  
});





// Go through the JSON form and pull data from the Objects
// send that to each respective <div> elements


