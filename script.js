// JavaScript code for contact form handling

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send form data to server
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Handle success
        console.log('Success:', data);
        alert('Your message has been sent successfully!');
    })
    .catch((error) => {
        // Handle error
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
    });
});
