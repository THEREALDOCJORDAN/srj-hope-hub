document.getElementById('zipCodeForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const zipCode = document.getElementById('zipCode').value;
    alert(`Searching for services near ${zipCode}. This feature will connect to our database of local services.`);
});

/* Note: Resource buttons logic was removed in favor of direct links */

document.getElementById('volunteerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const zipCode = document.getElementById('volunteerZipCode').value;
    alert(`Searching for volunteer opportunities or volunteers near ${zipCode}. This feature will connect to our volunteer database.`);
});

document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const feedbackType = document.getElementById('feedbackType').value;
    const feedbackText = document.getElementById('feedbackText').value;
    alert(`Thank you for your ${feedbackType}. Your feedback has been submitted: "${feedbackText}"`);
    this.reset();
});

function providerAction(action) {
    if (action === 'register') {
        alert("Navigating to Provider Registration Portal. Verified 501(c)(3) or license required.");
        // In a real app: window.location.href = '/provider/register';
    } else if (action === 'checkin') {
        alert("Navigating to Provider Daily Check-In. Please have your Provider ID ready.");
        // In a real app: window.location.href = '/provider/login';
    }
}
