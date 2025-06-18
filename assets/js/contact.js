// Form submission with validation
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const verification = document.getElementById('verification').value;
    const message = document.getElementById('message').value;
    const agree = document.getElementById('agree').checked;

    if (!agree) {
        alert('Please confirm that your information is accurate.');
        return;
    }

    // Simple validation
    if (!name || !email || !subject || !verification || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Create mailto link with form data
    const mailtoLink = `mailto:ynp2@sfu.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nVerification: ${verification}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Your default email client should open with the message. If not, please email me directly at ynp2@sfu.ca');
});