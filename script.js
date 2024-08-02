const buttons = document.querySelectorAll("button");
const results = document.querySelector("input");

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

let firstInteger = "";
let secondInteger = "";
let operator = "";
let result = "";

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
	a = parseInt(a);
	b = parseInt(b);
	switch (operator) {
		case "add":
			return add(a, b);
		case "subtract":
			return subtract(a, b);
		case "multiply":
			return multiply(a, b);
		case "divide":
			return divide(a, b);
	}
};

function handleDigits(e) {
	if (!secondInteger && !operator) {
		firstInteger += e.target.id;
		console.log(firstInteger);
		results.value = firstInteger;
	} else {
		secondInteger += e.target.id;
		results.value = secondInteger;
	}
}

function handleOperators(e) {
	if (firstInteger && !secondInteger) {
		operator = e.target.id;
	}
}

function handleDecimal() {}

function handleEquals() {
	if (firstInteger && secondInteger && operator) {
		result = operate(firstInteger, secondInteger, operator);
		results.value = result;
	}
}
