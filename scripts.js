document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    
    form.addEventListener('submit', (e) => {
        const existingId = document.getElementById('existing-id').value.trim();
        const cardType = document.getElementById('card-type').value.trim();
        const name = document.getElementById('name').value.trim();
        const terms = document.getElementById('terms').checked;

        if (!existingId || !cardType || !name || !terms) {
            alert('Please complete all fields and agree to the Terms and Conditions.');
            e.preventDefault(); // Prevent redirection to the Thank You page
        }
    });
});
