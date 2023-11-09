const form = document.querySelector("#form");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const phonenumber = document.querySelector("#phonenumber");

form.addEventListener('submit',(e)=>{
  if(!ValidateInputs()){
    e.preventDefault();
  }
})
function ValidateInputs(){
  const firstnameVal = firstname.value.trim();
  const lastnameVal = lastname.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const phonenumberVal = phonenumber.value.trim();


  if(firstnameVal===''){
    setError(firstname,'firstname is required');
  } else {
    setSuccess(firstname);
  }
  if(lastnameVal===''){
    setError(lastname,'lastname is required');
  } else {
    setSuccess(lastname);
  }

  if(emailVal===''){
    setError(email, 'Email is required');
  } else if(!ValidateEmail(emailVal)) {
    setError(email,'Please enter a valid email');
  } else {
    setSuccess(email);
  }

  if(passwordVal.length<8) {
    setError(password,'Password must be at least 6 characters long');
  } else{
    setSuccess(password);
  }
  if(phonenumberVal.length<10){
    setError(phonenumber,'phone number must contain 10 Numbers');
  } else {
    setSuccess(phonenumber);
  }
}
// Rest of your code (setError, setSuccess, and ValidateEmail functions)
//Error Element to Display
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
//Success Element to Display
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
} 
// Email Validation 
const ValidateEmail = (email)=>{
  return String(email)
  .toLowerCase()
  .match(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  };