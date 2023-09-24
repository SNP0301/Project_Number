const form = document.querySelector("#number-form");

const fromType = form.querySelector("#from-type");
const fromNumber = form.querySelector("#from-number");

const toType = form.querySelector("#to-type");
const toNumber = form.querySelector("#to-number");

function onFormSubmit(event) {
  event.preventDefault();
  console.log(fromType.value, toType.value);
  if (fromNumber.value === "" || toNumber.value === "") {
    console.log("Please select a number");
  }
  calculateDecimal(fromNumber.value);
}

function calculateDecimal(fromNumber) {
    event.preventDefault();
    decimalNumber = 0
    if (fromType.value === "Binary"){
        
    } else if fromType.value === "Octal"{
        
    } else if fromType.value === "Decimal"{
        decimalNumber = fromNumber
        console.log(decimalNumber+3)
        return decimalNumber
    } else if fromType.value === "Hexadecimal"{
    
    } else {
        console.log("FROM NUMBER ERROR IN CALCULATE_DECIMAL");
    }
}

form.addEventListener("submit", onFormSubmit);
