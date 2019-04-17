$(document).ready(function() {
    var names = ["Chris Farley", "Will Ferrell", "Bill Hader", "Adam Sandler", "Kristen Wiig", "Mike Meyers", "Dana Carvey", "Molly Shannon"]
    function displayNameInfo() {

        var name = $(this).attr("data-name");
        console.log(this);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&apikey=EeLVOUPGYR0IFcYTnM4KxPnPy4CEKtkr&limit=10";
        //"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
    
        $.ajax({
            url: queryURL,
            method: "GET"
          })
          .then(function(response) {
            console.log(queryURL);
            console.log(response);
            var nameDiv = $("<div class='name'>");
            var rating = response.Rated;
            var pOne = $("<p>").text("Rating: " + rating)
            nameDiv.append(pOne);
            var imgURL = response;
            var image = $("<img>").attr("src", imgURL);
            movieDiv.append(image);
            $("#movies-view").prepend(movieDiv);
            
          });

        }
        function renderButtons() {
          $("#buttons-view").empty();
          
        }
        });
   