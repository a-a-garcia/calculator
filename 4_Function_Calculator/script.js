var displayDiv = document.querySelector("#display");

displayDiv.innerText = "0";
let stringedNumber = displayDiv.innerText;

let num1Placeholder = ""
let op = null;

function clr() {
    num1Placeholder = "0"
    displayDiv.innerText = "0"
    stringedNumber = "0"
}

function press(num) {
    if (displayDiv.innerText == "0") {
        stringedNumber = num.toString();
        displayDiv.innerText = num
    }  
    else {
        stringedNumber += num.toString()
        displayDiv.innerText = stringedNumber;
    }
    console.log(stringedNumber)
    return stringedNumber
}

function setOP(operation) {
    num1Placeholder = Number(stringedNumber);
    stringedNumber = "0";
    op = operation;
    displayDiv.innerText = stringedNumber
    console.log(num1Placeholder, stringedNumber, op)
    return num1Placeholder, stringedNumber, op;
}


function calculate() {
    stringedNumber = Number(stringedNumber);
    console.log(stringedNumber, num1Placeholder, op)

    if (op == "/") {
        num1Placeholder /= stringedNumber
    } else if (op == "+") {
        num1Placeholder += stringedNumber
    } else if (op == "-") {
        num1Placeholder -= stringedNumber
    } else if (op = "*") {
        num1Placeholder *= stringedNumber
    }

    displayDiv.innerText = num1Placeholder;
    stringedNumber = num1Placeholder.toString()
    console.log(num1Placeholder.toString(), stringedNumber.toString())
}