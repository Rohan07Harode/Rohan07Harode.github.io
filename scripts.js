document.addEventListener('DOMContentLoaded', () => {
    // Sign-In Page Logic
    const loginButton = document.getElementById('login-button');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            const userId = document.getElementById('user-id').value.trim();
            const password = document.getElementById('password').value.trim();

            // Validate User ID format
            const userIdPattern = /^PP\d{3}$/; // Must start with PP followed by exactly 3 digits
            if (!userIdPattern.test(userId)) {
                alert('User ID must start with "PP" followed by three digits (e.g., PP123).');
                return;
            }

            // Store PPID in localStorage
            localStorage.setItem('PPID', userId);
			
			function targetPageParams() {
				return "profile.loggedIn=true";
			}

            // Redirect to Signup Page
            window.location.href = 'signup-page.html';
			

        });
    }

    // Signup Page Logic
    /*
	const ppidField = document.getElementById('ppid');
    if (ppidField) {
        const storedPPID = localStorage.getItem('PPID');
        if (storedPPID) {
            ppidField.value = storedPPID; // Pre-populate PPID field
        } else {
            ppidField.value = "PP123";
        }
    }
	*/

    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
        submitButton.addEventListener('click', () => {
            const cardType = document.getElementById('card-type').value.trim();
            const name = document.getElementById('name').value.trim();
            const terms = document.getElementById('terms').checked;

            // Validate form fields
            if (!cardType || !name || !terms) {
                alert('Please complete all fields and agree to the Terms and Conditions.');
                return;
            }

            // Redirect to Thank You page on successful validation
            window.location.href = 'thank-you.html';

        });
    }
});
