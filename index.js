const form = document.querySelector("#number-form");
const fromType = form.querySelector("#from-type");
const fromNumber = form.querySelector("#from-number");
const toType = form.querySelector("#to-type");
const toNumber = form.querySelector("#to-number");
const typeNumberMatchingError = [
  "Each number of binary number should be less than 2",
  "Each number of binary number should be less than 9",
  "No ENGLISH",
  "FINALLLLLLLLL",
];

function onFormSubmit(event) {
  event.preventDefault();
  if (fromNumber.value === "0") {
    console.log("123");
  }
  decimalResult = calculateDecimal(fromNumber.value);
  console.log("TOTAL RESULT: " + calculateResult(decimalResult, toType.value));
}

function calculateDecimal(fromNumber) {
  event.preventDefault();
  if (fromType.value === "Binary") {
    if (typeNumberMatch(fromNumber, fromType.value)) {
      return binaryToDecimal(fromNumber);
    } else {
      console.log(typeNumberMatchingError[0]);
      // fromNumber 비우는 함수 추가
    }
  } else if (fromType.value === "Octal") {
    if (typeNumberMatch(fromNumber, fromType.value)) {
      return octalToDecimal(fromNumber);
    } else {
      console.log(typeNumberMatchingError[1]);
      // fromNumber 비우는 함수 추가
    }
  } else if (fromType.value === "Decimal") {
    if (typeNumberMatch(fromNumber, fromType.value)) {
      return fromNumber;
    } else {
      console.log(typeNumberMatchingError[2]);
      // fromNumber 비우는 함수 추가
    }
  } else if (fromType.value === "Hexadecimal") {
    if (typeNumberMatch(fromNumber, fromType.value)) {
      return hexadecimalToDecimal(fromNumber);
    } else {
      console.log(typeNumberMatchingError[3]);
    }
    return "OUT OF THE CASES";
  }
}
function typeNumberMatch(inputNumber, inputType) {
  if (inputType === "Binary") {
    for (var i = 0; i < inputNumber.length; i++) {
      if (inputNumber[i] >= 2) {
        return false;
      }
    }
    return true;
  } else if (inputType === "Octal") {
    for (var i = 0; i < inputNumber.length; i++) {
      if (inputNumber[i] >= 8) {
        return false;
      }
    }
    return true;
  } else if (inputType === "Decimal") {
    //console.log(typeof inputNumber);
    for (var i = 0; i < inputNumber.length; i++) {
      //console.log(Number.isInteger(inputNumber[i]));
      if (47 < inputNumber[i].charCodeAt(0) < 58 === false) {
        return false;
      }
    }
    return true;
  } else if (inputType === "Hexadecimal") {
    for (var i = 0; i < inputNumber.length; i++) {
      if (inputNumber[i] > 98) {
        //"a" = 97, "z" = 122
      }
    }
  }
}
function binaryToDecimal(b) {
  d = 0;
  b = b.toString();
  for (var i = b.length - 1; i >= 0; i--) {
    d += b[i] * 2 ** (b.length - i - 1);
  }
  return d;
}
function octalToDecimal(o) {
  d = 0;
  o = o.toString();
  for (var i = o.length - 1; i >= 0; i--) {
    d += o[i] * 8 ** (o.length - i - 1);
  }
  return d;
}
function calculateResult(inputDecimal, outputType) {
  if (outputType == "Decimal") {
    return inputDecimal;
  } else if (outputType == "Binary") {
    return decimalToBinary(inputDecimal);
  }
}
function decimalToBinary(d) {
  b_length = 1;
  console.log(b_length);
}

form.addEventListener("submit", onFormSubmit);
