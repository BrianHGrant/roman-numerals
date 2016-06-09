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
    var secondOutput = processSecondDigit(numberArray);
    finalOutput = secondOutput + finalOutput;
  };
  if (numberArray.length >= 3) {
    var thirdOutput = processThirdDigit(numberArray);
    finalOutput = thirdOutput + finalOutput;
  };
  if (numberArray.length === 4) {
    var fourthOutput = processFourthDigit(numberArray);
    finalOutput = fourthOutput + finalOutput;
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
  var digit = numArrayInput[0];
  var v = digit - 5;
  if (digit === 9 ) {
    output = "IX";
    return output;
  };
  if (v >= -1) {
    output = output + "V";
  };
  if (v === -1) {
    output = "I" + output;
    v = 0;
  };
  if (v < 0) {
    for (index = 5; index > Math.abs(v); index-=1) {
      output = output + "I";
    };
  } else {
    for (index = 0; index < v; index++) {
      output = output + "I";
    };
  };
  console.log(output);
  return output;
};

var processSecondDigit = function(numArrayInput) {
  var output = "";
  var digit = numArrayInput[1];
  var v = digit - 5;
  if (digit === 9 ) {
    output = "XC";
    return output;
  };
  if (v >= -1) {
    output = output + "L"; //  adds 5 for five or greater
  };
  if (v === -1) {
    output = "X" + output; // 4 event
    v = 0;
  };
  if (v < 0) {
    for (index = 5; index > Math.abs(v); index-=1) {
      output = output + "X";
    };
  } else {
    for (index = 0; index < v; index++) {
      output = output + "X";
    };
  };
  return output;
};

var processThirdDigit = function(numArrayInput) {
  var output = "";
  var digit = numArrayInput[2];
  var v = digit - 5;
  if (digit === 9 ) {
    output = "CM";
    return output;
  };
  if (v >= -1) {
    output = output + "D"; //  adds 5 for five or greater
  };
  if (v === -1) {
    output = "C" + output; // 4 event
    v = 0;
  };
  if (v < 0) {
    for (index = 5; index > Math.abs(v); index-=1) {
      output = output + "C";
    };
  } else {
    for (index = 0; index < v; index++) {
      output = output + "C";
    };
  };
  return output;
};

var processFourthDigit = function(numArrayInput) {
  var output = "";
  var digit = numArrayInput[3];
  var v = digit - 5;

  if (v < 0) {
    for (index = 5; index > Math.abs(v); index-=1) {
      output = output + "M";
    };
  } else {
    for (index = 0; index < v; index++) {
      output = output + "M";
    };
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
