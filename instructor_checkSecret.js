  function promptForPasswordAndRedirect() {
            var password = prompt("Please enter the password:");
            if (password === "Apple001train") { 
                window.location.href = "https://prostraining.github.io/class/instructor/Jeporady_for_Class_v2.html";
            } else {
                alert("Incorrect password. Access denied.");
            }
        }