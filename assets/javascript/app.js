$(document).ready(function() {
    var characters = ["Chris Farley", "Will Ferrell", "Bill Hader", "Adam Sandler", "Kristen Wiig", "Mike Meyers", "Dana Carvey", "Molly Shannon"]
    function displayCharacterInfo() {
      $("button").on("click", function() {

        var name = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&apikey=EeLVOUPGYR0IFcYTnM4KxPnPy4CEKtkr&limit=10";
        //"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
    
        $.ajax({
            url: queryURL,
            method: "GET"
          })
          .then(function(response) {
            console.log(queryURL);
            console.log(response);
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
            var nameDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var nameImage = $("<img>");
            nameImage.attr("src", results[i].images.fixed_height.url);
            }
          });
        });
      }
    });