var youtube = "AIzaSyCeb5HlrnsOhcdQDoC91dpbZe2Wo_Onibo";
var queryURL = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true&key=" + youtube + userInput + "ost";

document.getElementById('searchButtonForm').addEventListener('submit', function(event){
$.ajax({
    queryURL,
    method: "GET"
}).then(function(response){
    for(let i = 0; i < 6; i++)
    var results = 
    results.text(response);
});
});