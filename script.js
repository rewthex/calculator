const buttons = document.querySelectorAll("button");
const results = document.querySelector("input");

addEventListener("keydown", (e) => {
	if (Number(e.key) || e.key === "0") handleDigits(e.key);
	if ("/*-+".includes(e.key)) handleOperators(e.key);
	if (e.key === "Enter") handleEquals();
});

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
		case "clear":
			button.addEventListener("click", handleClear);
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
		case "+":
			return add(a, b);
		case "subtract":
		case "-":
			return subtract(a, b);
		case "multiply":
		case "*":
			return multiply(a, b);
		case "divide":
		case "/":
			return divide(a, b);
	}
};

function handleDigits(e) {
	let digit = e.target === undefined ? e : e.target.id;
	if (!secondInteger && !operator) {
		firstInteger += digit;
		results.value = firstInteger;
	} else {
		secondInteger += digit;
		results.value = secondInteger;
	}
}

function handleOperators(e) {
	let operation = e.target === undefined ? e : e.target.id;
	if (firstInteger && !secondInteger) {
		operator = operation;
	} else if (firstInteger && secondInteger && operator) {
		handleEquals();
		operator = operation;
	}
}

function handleDecimal() {}

function handleEquals() {
	if (secondInteger === "0" && (operator === "divide" || operator === "/"))
		return handleDivideByZero();
	if (firstInteger && secondInteger && operator) {
		result = operate(firstInteger, secondInteger, operator);
		results.value = result;
		firstInteger = result;
		secondInteger = "";
		operator = "";
	}
}

function handleClear() {
	firstInteger = "";
	secondInteger = "";
	operator = "";
	result = "";
	results.value = "";
}

function handleDivideByZero() {
	const secret = document.querySelector(".dbz");
	secret.classList.add("secret");
	setTimeout(() => {
		secret.classList.remove("secret");
	}, 5000);
	handleClear();
}
