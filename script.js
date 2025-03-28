document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");

    const registerLink = document.getElementById("registerLink");
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");

    const registerModal = document.getElementById("registerModal");
    const forgotPasswordModal = document.getElementById("forgotPasswordModal");

    const closeButtons = document.querySelectorAll(".close-btn");

    // Login form submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "admin" && password === "password123") {
            alert("Login successful!");
        } else {
            alert("Invalid username or password.");
        }
    });

    // Register Modal Functionality
    registerLink.addEventListener("click", function (event) {
        event.preventDefault();
        registerModal.style.display = "block";
    });

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Registration successful!");
        registerModal.style.display = "none";
    });

    // Forgot Password Modal Functionality
    forgotPasswordLink.addEventListener("click", function (event) {
        event.preventDefault();
        forgotPasswordModal.style.display = "block";
    });

    forgotPasswordForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Reset link sent to your email!");
        forgotPasswordModal.style.display = "none";
    });

    // Close Modals
    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            registerModal.style.display = "none";
            forgotPasswordModal.style.display = "none";
        });
    });

    window.addEventListener("click", function (event) {
        if (event.target === registerModal) registerModal.style.display = "none";
        if (event.target === forgotPasswordModal) forgotPasswordModal.style.display = "none";
    });
});