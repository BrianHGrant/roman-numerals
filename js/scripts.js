// BUSINESS LOGIC
var isNumberValid = true;

var validateNumber = function(num) {
  if (num < 1 || num > 3999 || !num) {
    isNumberValid = false;
    return "That was not a valid input."
  } else {
    return "Here is your Roman Numeralated Number!"
  };
};





// USER INTERFACE
$(document).ready(function() {
  $("#userInput").submit(function(event) {

    var inputNumber = parseInt($("input#inputNumber").val());
    var validNumber = validateNumber(inputNumber);
    $(".output").text(validNumber);

    event.preventDefault();
  });
});
