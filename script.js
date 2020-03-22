const notifyForm = document.querySelector('.notify');
const emailInput = document.querySelector('#email');
const submitBtn = document.querySelector('#submit');

const errorMsg = document.querySelector('.error');

notifyForm.addEventListener('click', e => {
  //If submit button is clicked
  if(e.target == submitBtn) {
    //If the field is empty
    if(emailInput.value === "")  {
      e.preventDefault();
      showError('Whoops! It looks like you forgot to add your email')
    //Otherwise if the email is invalid
    } else if(!validEmail(emailInput.value)) {
      e.preventDefault();
      showError('Please provide a valid email address')
    }
  }
});

function validEmail(input) {
  //Validate the email (this is an input[type="email"] validator)
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;

  //If it doesn't pass, return false
  if(!emailRegex.test(input.trim())) {
    return false;
  }

  return true;
}

function showError(msg) {
  errorMsg.innerText = msg;
  notifyForm.classList.add('error');
}

emailInput.addEventListener('blur', () => {
  //When leaving the input field, check if there was an error
  if(notifyForm.classList.contains('error')) {
    //If there was and the field is valid now, remove the error
    if(emailInput.value !== "" && validEmail(emailInput.value)) {
      notifyForm.classList.remove('error');
    }
  }
});

