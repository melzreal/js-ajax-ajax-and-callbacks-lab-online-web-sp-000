$(document).ready(function (){
  var url =
    ' https://api.github.com/repos/jquery/jquery/commits?author=jeresig';

$.get(url).function(response) {
        // Here we are getting the element on the page with the id of sentences and
        // inserting the response
        $('#results').html(response);
    });
});
