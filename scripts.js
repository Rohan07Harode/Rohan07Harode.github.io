document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', () => {
        const existingId = document.getElementById('existing-id').value.trim();
        const cardType = document.getElementById('card-type').value.trim();
        const name = document.getElementById('name').value.trim();
        const terms = document.getElementById('terms').checked;

        // Validate form fields
        if (!existingId || !cardType || !name || !terms) {
            alert('Please complete all fields and agree to the Terms and Conditions.');
            return;
        }

        // Redirect to Thank You page on successful validation
        window.location.href = 'thank-you.html';
    });
});
