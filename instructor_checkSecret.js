  function promptForPasswordAndRedirect() {
            var password = prompt("Please enter the password:");
            if (password === "Apple001train") { // Replace 'your_password_here' with the actual password
                window.location.href = "https://prostraining.github.io/class/instructor/instructor_content.html";
            } else {
                alert("Incorrect password. Access denied.");
            }
        }