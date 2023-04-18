
const form = document.getElementById("myForm");

// Get all the input fields by their ids
const usernameInput = document.getElementById("username");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Add event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  // Reset error messages
  document.getElementById("usernameError").textContent = "";
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";

  // Validate each input field
  let isValid = true;

  if (usernameInput.value.length < 4) {
    document.getElementById("usernameError").textContent =
      "Username can't be less than 4 characters";
    isValid = false;
  }

  if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
    document.getElementById("nameError").textContent =
      "You can't use numbers in the name field";
    isValid = false;
  }

  if (!emailInput.checkValidity()) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address";
    isValid = false;
  }

  if (!/^\d{10}$/.test(phoneInput.value)) {
    document.getElementById("phoneError").textContent =
      "Please enter a valid phone number (10 digits)";
    isValid = false;
  }

  if (passwordInput.value.length < 8) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters long";
    isValid = false;
  }

  if (confirmPasswordInput.value !== passwordInput.value) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match";
    isValid = false;
  }

  if (isValid) {
    // Submit the form if all inputs are valid
    form.submit();
  }
});
