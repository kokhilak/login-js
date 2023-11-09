const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit",(e) => {
  if (!ValidateInputs()) {
    e.preventDefault();
  }
});
function ValidateInputs() {
  const usernameVal = username.value.trim();
  const passwordVal = password.value.trim();

  if (usernameVal === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }
  if (passwordVal.length < 6) {
    setError(password, "Password must be at least 8 characters long");
  } else {
    setSuccess(password);
    alert('Login SuccessFully');
    window.location.href="todolist.htm"
  }
 
}
//Error Element to Display
function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}
//Success Element to Display
function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
 
}
