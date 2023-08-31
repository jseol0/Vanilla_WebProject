const form = document.querySelector("#form");

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");

function checkEmail(input) {
	let regex = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
	if (regex.test(input.value))
		return true;
	else
		return false;
}

function checkConfirm(p1, p2) {
	if (p1.value === p2.value)
		return true;
	else
		return false;
}

function showError(input, error_msg) {
	const formbox = input.parentElement;
	const msg = formbox.querySelector("small");
	msg.innerText = error_msg;
	formbox.classList.add("error");
	formbox.classList.remove("success");
}

function showSuccess(input) {
	const formbox = input.parentElement;
	formbox.classList.add("success");
	formbox.classList.remove("error");
}

form.addEventListener("submit", function(event) {
 	event.preventDefault();

	if (username.value.length < 3)
		showError(username, "Username must be at least 3 characters");
	else if (username.value.length > 15)
		showError(username, "Username must be less than 15 characters");
	else
		showSuccess(username);

	if (checkEmail(email))
		showSuccess(email);
	else showError(email, "Email is not valid");

	if (password.value.length < 6)
		showError(password, "Password must be at least 6 characters");
	else if (password.value.length > 25)
		showError(password, "Password must be less than 25 characters");
	else
		showSuccess(password);

	if (checkConfirm(password, confirm_password))
		showSuccess(confirm_password);
	else showError(confirm_password, "Passwords do not match");
});
