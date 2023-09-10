// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a FormData object to send the data to the server
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Send the data to the server using fetch
    fetch('sendEmail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully.');
            // Clear the form fields if needed
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            alert('Message sending failed. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
