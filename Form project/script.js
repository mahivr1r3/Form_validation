function validateName() {
  const fullName = document.getElementById('full-name').value.trim();
  const nameError = document.getElementById('textError');
  if (fullName.length < 5) {
      nameError.textContent = 'Name must be at least 5 characters long.';
      nameError.classList.add('error-message');
      return false;
  } else {
      nameError.textContent = '';
      nameError.classList.remove('error-message');
      return true;
  }
}

function validateEmail() {
  const email = document.getElementById('E-mail-id').value.trim();
  const emailError = document.getElementById('emailError');
  if (!email.includes('@')) {
      emailError.textContent = 'Enter a valid email address.';
      emailError.classList.add('error-message');
      return false;
  } else {
      emailError.textContent = '';
      emailError.classList.remove('error-message');
      return true;
  }
}

function validatePhone() {
  const phone = document.getElementById('mobile-number').value.trim();
  const phoneError = document.getElementById('mobile-numberError');
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone) || phone === '1234567890') {
      phoneError.textContent = 'Enter a valid 10-digit phone number.';
      phoneError.classList.add('error-message');
      return false;
  } else {
      phoneError.textContent = '';
      phoneError.classList.remove('error-message');
      return true;
  }
}

function validatePassword() {
  const fullName = document.getElementById('full-name').value.trim().toLowerCase();
  const password = document.getElementById('password').value.trim();
  const passwordError = document.getElementById('passwordError');
  if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName) {
      passwordError.textContent = 'Password must be at least 8 characters long and cannot be "password" or your name.';
      passwordError.classList.add('error-message');
      return false;
  } else {
      passwordError.textContent = '';
      passwordError.classList.remove('error-message');
      return true;
  }
}

function validateConfirmPassword() {
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();
  const confirmPasswordError = document.getElementById('confirm-passwordError');
  if (password !== confirmPassword) {
      confirmPasswordError.textContent = 'Passwords do not match.';
      confirmPasswordError.classList.add('error-message');
      return false;
  } else {
      confirmPasswordError.textContent = '';
      confirmPasswordError.classList.remove('error-message');
      return true;
  }
}

function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  const recaptchaResponse = grecaptcha.getResponse();
  const captchaError = document.getElementById('captchaError');

  if (!recaptchaResponse) {
      captchaError.textContent = 'Please complete the reCAPTCHA.';
      captchaError.classList.add('error-message');
      return false;
  } else {
      captchaError.textContent = '';
      captchaError.classList.remove('error-message');
  }

  if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
      alert('Form submitted successfully!');
      return true;
  } else {
      alert('Please correct the errors before submitting.');
      return false;
  }
}
