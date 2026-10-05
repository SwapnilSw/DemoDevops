
const form = document.querySelector("form");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function (event) {

    // Remove previous error messages
    const oldError = document.querySelector(".error-message");

    if (oldError) {
        oldError.remove();
    }

    // Check password length
    if (password.value.length < 8) {

        event.preventDefault();

        showError("Password must contain at least 8 characters.");

        password.focus();

        return;
    }

    // Check password matching
    if (password.value !== confirmPassword.value) {

        event.preventDefault();

        showError("Passwords do not match.");

        confirmPassword.focus();

        return;
    }

    // If validation succeeds
    console.log("Registration form submitted successfully.");
});


function showError(message) {

    const error = document.createElement("div");

    error.classList.add("error-message");

    error.textContent = message;

    form.appendChild(error);
}
