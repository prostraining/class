function checkSecret(filename) {
    var enteredSecret = prompt("Please enter the secret to download the file:");

    // Replace 'Training@PROS#01' with your desired secret
    if (enteredSecret === 'Training@PROS#01') {
        // Generate the file download URL based on the filename
        var fileUrl = 'https://prostraining.github.io/class/docs/' + filename;
        var link = document.createElement('a');
        link.href = fileUrl;
        link.download = filename;
        link.click();
    } else {
        alert("Incorrect secret. Access denied.");
    }
}