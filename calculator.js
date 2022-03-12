
const DISPLAY_WIDTH = 8;
let displayValue = 0;

const calculatorDisplay = document.getElementById("display");

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function(op, a, b) {
    switch (op) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
    }
}

const addDigit = function(n, newDigit) {
    // Don't add to an 8-digit number
    if (displayValue.toString().length >= 8) {
        return;
    } else {
        return n * 10 + newDigit;
    }
}

// Updates displayValue and pushes it to the document
const updateDisplayValue = function(newValue) {
    displayValue = newValue;
    calculatorDisplay.innerText = displayValue;
}

const updateDisplay = function(buttonID) {
    switch (buttonID) {
        case "oneButton":
            updateDisplayValue(addDigit(displayValue, 1));
    }
}


