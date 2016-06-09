$(document).ready(function() {
  $("#userInput").submit(function(event) {

    var inputNumber = parseInt($("#inputNumber").val());

    alert(inputNumber);

    event.preventDefault()
  });
});
