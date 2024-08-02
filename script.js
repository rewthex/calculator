const buttons = document.querySelectorAll("button");
const results = document.querySelector("input");

addEventListener("keydown", (e) => {
	handleDigits(e.key)
})

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
	let digit = (e.target === undefined) ? e : e.target.id
	if (!secondInteger && !operator) {
		firstInteger += digit;
		results.value = firstInteger;
	} else {
		secondInteger += digit;
		results.value = secondInteger;
	}
}

function handleOperators(e) {
	if (firstInteger && !secondInteger) {
		operator = e.target.id;
	} else if (firstInteger && secondInteger && operator) {
		handleEquals();
		operator = e.target.id;
	}
}

function handleDecimal() {}

function handleEquals() {
	if (firstInteger && secondInteger && operator) {
		result = operate(firstInteger, secondInteger, operator);
		results.value = result;
		firstInteger = result;
		secondInteger = "";
		operator = "";
	}
}
