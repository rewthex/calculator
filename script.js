const buttons = document.querySelectorAll("button");
const results = document.querySelector("input")

buttons.forEach((button) => {
	const buttonClass = button.className;
	switch (buttonClass) {
		case "number":
			button.addEventListener("click", handleDigits);
			break;
		case "operator":
			button.addEventListener("click", handleOperators);
			break;
		case "equals":
			button.addEventListener("click", handleEquals);
			break;
		case "decimal":
			button.addEventListener("click", handleDecimal);
			break;
	}
});

let firstInteger;
let secondInteger;
let operator;
let result;

const add = (a, b) => {
	return a + b;
};
const subtract = (a, b) => {
	return a - b;
};
const multiply = (a, b) => {
	return a * b;
};
const divide = (a, b) => {
	return a / b;
};

const operate = (a, b, operator) => {
    console.log(a, b, operator)
	switch (operator) {
		case "add":
			results.value = add(a, b);
			break;
		case "subtract":
			results.value = subtract(a, b);
			break;
		case "multiply":
			results.value = multiply(a, b);
			break;
		case "divide":
			results.value = divide(a, b);
			break;
	}
};

function handleDigits(e) {
	firstInteger = e.target.id;
    secondInteger = 42
}

function handleOperators(e) {
	operator = e.target.id
}

function handleDecimal() {
	
}

function handleEquals() {
	if (firstInteger && secondInteger && operator) {
        operate(firstInteger, secondInteger, operator)
    }
}
