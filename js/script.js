var apiKeyYoutube = "AIzaSyD7COoXmTlxzGMduRns7lWY6aCROVbuXHI"
var apiKeyOMDB = "a648d87c"
addClass = ""
// working string = http://www.omdbapi.com/?t=rocky&apikey=a648d87c

// search button captures the input you type in

// $('#searchButtonForm').on("submit", );
document.getElementById('searchButtonForm').addEventListener("submit", function (event) {
  event.preventDefault();
  var searchValue = document.getElementById("searchButtonInput").value;
  var youtubeQueryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchValue + "%20ost%20single" + "&type=video" + "&key=" + apiKeyYoutube + "&maxResults=5";
  console.log(searchValue);
  var omdbQueryURL = "https://www.omdbapi.com/?t=" + searchValue + "&apikey=" + apiKeyOMDB;
  var searchButtonInput = $("#searchButtonInput")
  if (searchButtonInput.val() === "") {

    return;
  }

  // $(document).on("click", "#searchButton", function() {
  $("#welcome").empty();
  //console.log("working")
  $("#resultInfo").removeClass("invisible").addClass("visible")
  //console.log("workingtoo");
  $("#test").removeClass("invisible").addClass("visible")

  //takes that string and sends it as an API call to OMDB
  $.ajax({
    url: youtubeQueryURL,
    method: "GET",
  }).then(function (results) {
    console.log(results);
    console.log(youtubeQueryURL);
    console.log(results.items[0].snippet.title);
    let songArray = ((results.items[0].snippet.title).split(', '));
    let songArray2 = ((results.items[1].snippet.title).split(', '));
    let songArray3 = ((results.items[2].snippet.title).split(', '));
    var videoURL = 'https://www.youtube.com/watch?v='
    var videoID = results.items[0].id.videoId;
    var videoID2 = results.items[1].id.videoId;
    var videoID3 = results.items[2].id.videoId;
    var fullLink = videoURL + videoID;
    var fullLink2 = videoURL + videoID2;
    var fullLink3 = videoURL + videoID3;
    $("#omdbSoundtrack").empty();
    for (let i = 0; i < songArray.length; i++) {
      $('#omdbSoundtrack').append("<br />")
      $('#omdbSoundtrack').append('&nbsp;&nbsp;&nbsp;&nbsp;' + "<a class='linkBlue' href=\"" + fullLink + "\"><i class='fas fa-link fa-1x'></i></a>&nbsp;" + songArray[i] + '<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;' + "<a class='linkGray' href=\"" + fullLink2 + "\"><i class='fas fa-link fa-1x'></i></a>&nbsp;" + songArray2[i] + '<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;' + "<a class='linkRed' href=\"" + fullLink3 + "\"><i class='fas fa-link fa-1x'></i></a>&nbsp;" + songArray3[i]);
    };
    console.log(videoURL + videoID)
    // console.log(results.items[0].id.videoId);
    songArray.onclick = function () {
      window.open(videoURL + videoID, '_blank');
    };
  });
  $.ajax({
    url: omdbQueryURL,
    method: "GET"
  }).then(function (response) {
    // OMDB returns a JSON form
    console.log(response);
    console.log(response.Title);
    console.log(response.Soundtrack);
    console.log(response.Song);
    console.log((response.Actors).split(', ')); // how do I create elements on a new line?
    $("#omdbActors").empty()
    let actorArray = ((response.Actors).split(', '));
    for (let i = 0; i < actorArray.length; i++) {
      $("#omdbActors").append("<br />&nbsp;&nbsp;&nbsp;&nbsp;")
      $("#omdbActors").append(actorArray[i]);//this is appending each individual list in the array
    }
    $("#omdbYear").text(response.Year)
    $("#titleEl").text(response.Title)
    $("#omdbTitle").text(response.Title)
    $("#omdbPoster").attr("src", response.Poster)

  });

})

// Go through the JSON form and pull data from the Objects

// send that to each respective <div> elements


// empty <div> tags in HTML with ID
// use selectors to grab the ID
// use .text to display the results (or .textContent with Javascript)

// .fadeIn( [duration ] [, complete ] )
