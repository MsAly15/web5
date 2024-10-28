// script.js

// Mock user data for demonstration purposes
const users = {
    'teacher': 'teacher123',
    'admin': 'admin123',
    'registrar': 'registrar123',
    'student': 'student123'
};




let loginAttempts = 0;
let lockoutTime = 0;

function handleLogin(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if user is locked out
    if (lockoutTime > 0) {
        alert(`Too many attempts. Please wait ${lockoutTime} seconds.`);
        return false;
    }

    // Validate login
    if (users[username] && users[username] === password) {
        alert(`Welcome, ${username}! Redirecting to dashboard...`);
        // Redirect to the dashboard page
        window.location.href = 'dashboard.html'; // Replace with your actual dashboard URL
    } else {
        loginAttempts++;
        alert('Incorrect username or password.');

        // Check for lockout
        if (loginAttempts >= 3) {
            alert('Too many failed attempts. Please wait 1 minute before trying again.');
            lockoutTime = 60; // Lockout for 60 seconds
            const lockoutInterval = setInterval(() => {
                lockoutTime--;
                if (lockoutTime <= 0) {
                    clearInterval(lockoutInterval);
                    loginAttempts = 0; // Reset attempts after lockout
                }
            }, 1000);
        }
    }
}

// Function to show a simple signup process
function showSignup() {
    // For demo purposes, we'll just redirect to the dashboard directly
    alert('Redirecting to dashboard...');
    window.location.href = 'dashboard.html'; // Replace with your actual signup logic
}

