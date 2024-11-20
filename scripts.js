document.addEventListener('DOMContentLoaded', () => {
    // Sign-In Page Logic
    const loginButton = document.getElementById('login-button');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            const userId = document.getElementById('ppid').value.trim();
            const password = document.getElementById('password').value.trim();

            // Validate User ID format
            const userIdPattern = /^PP\d{3}$/; // Must start with PP followed by exactly 3 digits
            if (!userIdPattern.test(userId)) {
                alert('User ID must start with "PP" followed by three digits (e.g., PP123).');
                return;
            }

            // Redirect to Signup Page with PPID in the URL
            window.location.href = `signup-page.html?ppid=${encodeURIComponent(userId)}`;
        });
    }

    // Signup Page Logic
    const urlParams = new URLSearchParams(window.location.search);
    const ppidField = document.getElementById('ppid');
    if (ppidField) {
        const ppid = urlParams.get('ppid');
        if (ppid) {
            ppidField.value = ppid; // Pre-populate PPID field
        } else {
            alert('PPID is missing. Please sign in again.');
            window.location.href = 'login-page.html'; // Redirect if no PPID found
        }
    }

    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
        submitButton.addEventListener('click', () => {
            const cardType = document.getElementById('card-type').value.trim();
            const name = document.getElementById('name').value.trim();
            const terms = document.getElementById('terms').checked;

            // Validate form fields
            if (!ppidField.value || !cardType || !name || !terms) {
                alert('Please complete all fields and agree to the Terms and Conditions.');
                return;
            }

            // Redirect to Thank You page on successful validation
            window.location.href = 'thank-you.html';
        });
    }
});
