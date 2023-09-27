const form = document.querySelector("#number-form");

const fromType = form.querySelector("#from-type");
const fromNumber = form.querySelector("#from-number");

const toType = form.querySelector("#to-type");
const toNumber = form.querySelector("#to-number");
const typeNumberMatchingError = [
  "Each number of binary number should be less than 2",
  "Each number of binary number should be less than 9",
  "No ENGLISH",
];
function onFormSubmit(event) {
  event.preventDefault();
  console.log(typeof fromNumber.value);

  console.log("DECIMAL RESULT: " + calculateDecimal(fromNumber.value));
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
    console.log("DIFFICULT");
  }
  return "OUT OF THE CASES";
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
      if (inputNumber[i] >= 9) {
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
////
function octalToDecimal(o) {
  d = 0;
  o = o.toString();
  for (var i = o.length - 1; i >= 0; i--) {
    d += o[i] * 8 ** (o.length - i - 1);
  }
  return d;
}

form.addEventListener("submit", onFormSubmit);
