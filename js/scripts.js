// BUSINESS LOGIC
var isNumberValid = true;

var validateNumber = function(numberString) {
  num = parseInt(numberString);
  if (num < 1 || num > 3999 || !num) {
    isNumberValid = false;
    return "That was not a valid input."
  } else {
    return "Here is your Roman Numeralated Number!"
  };
};

var processesNumber = function(numberString) {
  var finalOutput = "";
  if ( isNumberValid === false ) {
    return;
  };
  stringArray = numberString.split("");
  numberArray = stringArray.map(function(num) {
    return parseInt(num);
  });
  var singleDigit = processSingleDigit(numberArray);
  finalOutput += singleDigit;

  if (numberArray.length >= 2) {
    processSecondDigit(numberArray);
  };
  if (numberArray.length >= 3) {
    processThirdDigit(numberArray);
  };
  if (numberArray.length === 4) {
    processFourthDigit(numberArray);
  };
  return finalOutput;
  // if (numberArray.length === 4) {
  //   if (numberArray[3] > 0 &&  numberArray[3] <= 3) {
  //     numberArray[3] = "I"
  //   }
  // };
};

var processSingleDigit = function(numArrayInput) {
  numArrayInput.reverse();
  var output = "";
  var singleDigit = numArrayInput[0];
  var v = singleDigit - 5;
  if (singleDigit === 9 ) {
    output = "IX";
    return output;
  }
  if (v >= -1) {
    output = output + "V";
  };
  if (v === -1) {
    output = "I" + output;
    v = 0;
  };
  for (index = 0; index < v; index++) {
    output = output + "I";
  };
  return output;
};






// USER INTERFACE
$(document).ready(function() {
  $("#userInput").submit(function(event) {

    var inputNumber = $("input#inputNumber").val();
    var validNumber = validateNumber(inputNumber);
    $(".output").text(validNumber);
    var finalNumeral = processesNumber(inputNumber);
    console.log(finalNumeral);
    event.preventDefault();
  });
});
