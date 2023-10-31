 function promptForPasswordAndRedirect() {
      // Show the custom password input field
      document.getElementById('password-input').style.display = 'block';
    }

    function submitPassword() {
      // Get the entered password
      const password = document.getElementById('password').value;

      // Define the correct password
      const correctPassword = 'Apple001train';

      // Check if the entered password matches the correct password
      if (password === correctPassword) {
        // Password is correct, so redirect to 'pros.com'
        window.location.href = 'https://prostraining.github.io/class/instructor/Jeporady_for_Class_v2.html';
      } else {
        // Password is incorrect, display an alert
        alert('Incorrect password. Please try again.');
      }
    }
