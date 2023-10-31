function promptForSecretAndRedirect() {
  // Show the custom secret input field
  document.getElementById('secret-input').style.display = 'block';
}

function submitSecret() {
  // Get the entered secret
  const secret = document.getElementById('secret').value;

  // Define the correct secret
  const correctSecret = 'Trainer@PROS#01';

  // Check if the entered secret matches the correct secret
  if (secret === correctSecret) {
    // Secret is correct, so redirect to 'pros.com'
    window.location.href = 'https://prostraining.github.io/class/instructor/Jeporady_for_Class_v2.html';
  } else {
    // Secret is incorrect, display an alert
    alert('Incorrect secret. Please try again.');
  }
}
