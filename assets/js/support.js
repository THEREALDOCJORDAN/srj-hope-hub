// Add interactivity here
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simulate login functionality
const loginLink = document.querySelector('a[href="#login"]');
if (loginLink) {
    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Login functionality would be implemented here. For privacy and security reasons, actual user authentication is not demonstrated in this example.');
    });
}

// Simulate create account functionality
const createAccountLink = document.querySelector('a[href="#create-account"]');
if (createAccountLink) {
    createAccountLink.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Account creation functionality would be implemented here. For privacy and security reasons, actual user registration is not demonstrated in this example.');
    });
}

// Simulate create new post functionality
const createPostLink = document.querySelector('a[href="#create-post"]');
if (createPostLink) {
    createPostLink.addEventListener('click', function (e) {
        e.preventDefault();
        alert('New post creation would be implemented here. This would typically involve a form where users can enter their post title, content, and select a category.');
    });
}
