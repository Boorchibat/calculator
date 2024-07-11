let calculatorvalue = document.getElementById('calculatorvalue')
let action;
let prevNumber;

function onclickadd() {
    action = "+";
    prevNumber = calculatorvalue.innerText
    calculatorvalue.innerText = "0";
}
function onclickminus() {
    action = "-"
    prevNumber = calculatorvalue.innerText
    calculatorvalue.innerText = "0";
}
function onclickmultiply() {
    action = "*";
    prevNumber = calculatorvalue.innerText
    calculatorvalue.innerText = "0";
}
function onclickdivide() {
    action = "/";
    prevNumber = calculatorvalue.innerText
    calculatorvalue.innerText = "0";
}
function calculate() {
    if (action === "+") {
        calculatorvalue.innerText = Number(prevNumber) + Number(calculatorvalue.innerText);
    }

    if (action === "-") {
        calculatorvalue.innerText = Number(prevNumber) - Number(calculatorvalue.innerText);
    }
    if (action === "*") {
        calculatorvalue.innerText = Number(prevNumber) * Number(calculatorvalue.innerText);
    }
    if (action === "/") {
        calculatorvalue.innerText = Number(prevNumber) / Number(calculatorvalue.innerText);
    }
}

function onclickbuttonSeven() {
    console.log(calculatorvalue)
    calculatorvalue.innerText += "7"
} function onclickbuttonEight() {
    calculatorvalue.innerText += "8"
} function onclickbuttonNine() {
    calculatorvalue.innerText += "9"
} function onclickbuttonSix() {
    calculatorvalue.innerText += "6"
} function onclickbuttonfive() {
    calculatorvalue.innerText += "5"
} function onclickbuttonfour() {
    calculatorvalue.innerText += "4"
} function onclickbuttonthree() {
    calculatorvalue.innerText += "3"
} function onclickbuttontwo() {
    calculatorvalue.innerText += "2"
} function onclickbuttonone() {
    calculatorvalue.innerText += "1"
} function onclickbuttonzero() {
    calculatorvalue.innerText += "0"
}

