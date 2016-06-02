$(document).ready(function() {
  var age = parseInt(prompt("Whats Your Age?"));

  if (age >= 18) {
    $('#vote').show();
  }
  else {
    $('#under-18').show();
  }
});
