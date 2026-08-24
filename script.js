document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    let isValid = true;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
      showError(emailInput, emailError, 'Email address is required.');
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, emailError, 'Please enter a valid email address.');
      isValid = false;
    } else {
      clearError(emailInput, emailError);
    }
  
    if (passwordInput.value.trim() === '') {
      showError(passwordInput, passwordError, 'Password is required.');
      isValid = false;
    } else if (passwordInput.value.length < 6) {
      showError(passwordInput, passwordError, 'Password must be at least 6 characters.');
      isValid = false;
    } else {
      clearError(passwordInput, passwordError);
    }
 
    if (isValid) {
      alert('Validation passed! Sending data to server...');
    
    }
  });

  function showError(inputElement, errorElement, message) {
    inputElement.classList.add('invalid');
    errorElement.textContent = message;
    errorElement.classList.add('visible');
  }
  
  function clearError(inputElement, errorElement) {
    inputElement.classList.remove('invalid');
    errorElement.textContent = '';
    errorElement.classList.remove('visible');
  }
  