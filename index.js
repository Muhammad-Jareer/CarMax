function like() {
    confirm("Thanks for your feedback");
}

function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    if (!username || !password) {
      errorMessage.textContent = 'Username and password are required.';
    } else if (username.length < 8) {
      errorMessage.textContent = 'Username must be at least 8 characters long.';
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(password)) {
      errorMessage.textContent = 'Password must contain at least one letter and one number.';
    } else {
      errorMessage.textContent = ''; // Clear any previous error messages
      // Perform further login logic or redirection here
      alert('Login successful!');
    }
  }

  // Add an event listener for the 'Enter' key press
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      validateLogin();
    }
  });