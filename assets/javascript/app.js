$(document).ready(function () {
  //Initial array of names
  var names = ["Chris Farley", "Will Ferrell", "Bill Hader", "Adam Sandler", "Molly Shannon"];
  console.log(names[0]);
  //create on-click function to get the API data from giphy when a new name is entered and the button is clicked.
  function buttonClick(index) {
      var name = names[index];
      return function (event) {
          event.preventDefault();
          var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
              name + "&api_key=EeLVOUPGYR0IFcYTnM4KxPnPy4CEKtkr&limit=10";

          // Performing an AJAX request with the queryURL
          $.ajax({
              url: queryURL,
              method: "GET"
          })
              .then(function (response) {
                  console.log(queryURL);
                  console.log(response);
                  // storing the data from the AJAX request in the results variable
                  var results = response.data;
                  //var animate = results[i].images.fixed_height.url;
                  // Looping through each result item
                  for (var i = 0; i < results.length; i++) {
                      // create and store a div tag to hold the gif
                      var gifDiv = $("<div>");
                      // Creating a paragraph tag with the result item's rating
                      var p = $("<p>").text("Rating: " + results[i].rating);
                      // Creating and storing an image tag
                      var gifImage = $("<img>");
                      // Setting the src attribute of the image to a property pulled off the result item
                      gifImage.attr("src", results[i].images.fixed_height.url);
                      // Appending the paragraph and image tag to the gifDiv
                      gifDiv.append(p);
                      gifDiv.append(gifImage);
                      // Prependng the animalDiv to the HTML page in the "#gif-view" div
                      $("#gif-view").prepend(gifDiv);
                  }
              });
      }
  }
  //function for displaying names
  function renderButtons() {
      $("#buttons-view").empty();
      //loop through array of names
      for (var i = 0; i < names.length; i++) {

          //dynamically generate buttons for each name in array
          var a = $("<button>");

          a.on("click", buttonClick(i));
          // Adding a class of name-btn to our button 
          a.addClass("name-btn");
          // Adding a data-attribute
          a.attr("original-names", names[i]);
          // Providing the initial button text
          a.text(names[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);

      }
  }
  // This function handles events where one button is clicked
  $("#add-name").on("click", function (event) {
      event.preventDefault();
      // This line will grab the text from the input box
      var name = $("#name-input").val().trim();
      // The name from the textbox is then added to our array
      names.push(name);
      console.log(names);
      // calling renderButtons which handles the processing of our name array
      renderButtons();
  });
  // Calling the renderButtons function to display the intial buttons
  renderButtons();
  // animate gifs
  $(".gif").on("click", function(event) {
      for (i = 0; i < names.length; i++) {
          var name = names[index];
      }
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          name + "&api_key=EeLVOUPGYR0IFcYTnM4KxPnPy4CEKtkr&limit=10";
      $.ajax({
          url: queryURL,
          method: "GET"
      })
          .then(function (response) {
              console.log(response);
              var results = response.data;
              for (var i = 0; i < results.length; i++) {
                  var gifDiv = $("<div>");
                  var p = $("<p>").text("Rating: " + results[i].rating);
                  var gifImage = $("<img>");
                  gifImage.attr("src", results[i].images.fixed_height.url);
                  gifDiv.append(p);
                  gifDiv.append(gifImage);
                  $("#gif-view").prepend(gifDiv);
                  //then pause gifs
                  gifImage.on("click", function (event) {
                      for (i = 0; i < names.length; i++) {
                          var name = names[index];
                      }
                      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                          name + "&api_key=EeLVOUPGYR0IFcYTnM4KxPnPy4CEKtkr&limit=10";
                      $.ajax({
                          url: queryURL,
                          method: "GET"
                      })
                          .then(function (response) {
                              var results = response.data;
                              for (var i = 0; i < results.length; i++) {
                                  var gifDiv = $("<div>");
                                  var p = $("<p>").text("Rating: " + results[i].rating);
                                  var gifImage = $("<img>");
                                  gifImage.attr("src", results[i].images.fixed_height_still.url);
                                  gifDiv.append(p);
                                  gifDiv.append(gifImage);
                                  $("#gif-view").prepend(gifDiv);
                              }
                          });
                  })
              }
          })
  })
})
