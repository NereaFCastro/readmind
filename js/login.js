document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginConfirmationMessage = document.getElementById('login-confirmation-message');

    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');

    const errorLoginEmail = document.getElementById('error-login-email');
    const errorLoginPassword = document.getElementById('error-login-password');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateLoginForm()) {
            loginForm.style.display = 'none';
            loginConfirmationMessage.style.display = 'block';
        }
    });

    function validateLoginForm() {
        let isValid = true;

        if (!validateEmail(loginEmail.value)) {
            showError(loginEmail, errorLoginEmail, 'El correo electrónico no es válido');
            isValid = false;
        } else {
            hideError(loginEmail, errorLoginEmail);
        }

        if (loginPassword.value.length < 8) {
            showError(loginPassword, errorLoginPassword, 'La contraseña debe tener al menos 8 caracteres');
            isValid = false;
        } else {
            hideError(loginPassword, errorLoginPassword);
        }

        return isValid;
    }

    function showError(input, errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        input.style.borderColor = 'red';
    }

    function hideError(input, errorElement) {
        errorElement.style.display = 'none';
        input.style.borderColor = '#ccc';
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});
