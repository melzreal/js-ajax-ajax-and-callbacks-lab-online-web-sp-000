$(document).ready(function (){
  var url =
      'https://api.github.com/repos/jquery/jquery/commits?sha=8f447576c918e3004ea479c278c11677920dc41a';

  $.get(url).done(function(data) {
      console.log('Done');
      console.log(data);
      $('results').html(data);
  });

});
