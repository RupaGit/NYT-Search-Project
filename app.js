$("#searchButton").on("click", function() {
    
    var article = $("#name").val();
    var startYear = $("#startDate").val();
    var endYear = $("#endDate").val();
    
   
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+article+"&begin_date="+startYear+"&end_date="+endYear+"&api-key=LST8WLqogyAIGJsqEQlSqZmiKQXKMbZT";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
      // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

    //   console.log(response);
    var apiResponse = response.response;

      //display response
      for(var i=0; i<apiResponse.docs.length; i++) {
          console.log(apiResponse.docs.length);
          var newDiv = $("<div>");
          newDiv.attr("data-articleTitle", apiResponse.docs[i].abstract);
          newDiv.html(apiResponse.docs[i].abstract);
          $("#results").append(newDiv);
          $("#results").append("<br>");
      }


});
});

$("#clearButton").on("click", function() {
    location.reload();
});
