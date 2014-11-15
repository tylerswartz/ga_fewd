function refresh() {
  // console.log("This function doesn't do much yet!");





  // As a code-along, we shall:
  // 0. Make API call to https://www.groupmuse.com/events.json
  // 1. console.log response, response[0]
  // 2. event = response[0]
  // 3. append to table with nice multi-line string syntax

  /*
    Bonus: 
      - refresh() on <select> change instead of <form> submit
      - Load list of cities from the API:
        - Endpoint: https://www.groupmuse.com/api/cities.json
        - On page load (and only once), pull in list of cities from API
        - Populate the <select> tag with <option>s built from json response
  */
}
var city;

$(document).ready(function() {
  // Set up a submit handler so that refresh is called when the form is submitted
  $("form.search").submit(function(event) {
    // refresh();
    event.preventDefault();

    city = ($("form.search :selected").val());
    var groupmuseURL = "https://www.groupmuse.com/events.json?city_name=" + city;

    $.get(groupmuseURL, function(response) { 
      for (var i=0; i < response.length; i++){
        $("table.events tbody").append(
          "<tr>" + 
            "<td>" + "<img src='"+ response[i].user.avatar_thumb+"'>" + "</td>" + 
            "<td>" + response[i].user.name + "</td>" +
            "<td>" + 
              "<a href='" + response[i].url + "'>" +
                response[i].title + 
              "</a>" + 
            "</td>" +
            "<td>" + response[i].starts_at_date + "</td>" +
            "<td>" + response[i].city + "</td>" +
          "</tr>"
        );
      };
    });



    // return false;
  });

  // Call it once on page load
  // refresh();
});
