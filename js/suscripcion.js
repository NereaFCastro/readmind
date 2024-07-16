document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('subscription-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    const nombre = document.getElementById('nombre');
    const apellidos = document.getElementById('apellidos');
    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirm-email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const plan = document.getElementById('plan');
    const singleGenre = document.getElementById('single-genre');
    const multipleGenre = document.getElementById('multiple-genre');

    const errorNombre = document.getElementById('error-nombre');
    const errorApellidos = document.getElementById('error-apellidos');
    const errorEmail = document.getElementById('error-email');
    const errorConfirmEmail = document.getElementById('error-confirm-email');
    const errorPassword = document.getElementById('error-password');
    const errorConfirmPassword = document.getElementById('error-confirm-password');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            form.style.display = 'none';
            confirmationMessage.style.display = 'block';
        }
    });

    form.addEventListener('reset', function () {
        form.reset();
        resetValidation();
        form.style.display = 'block';
        confirmationMessage.style.display = 'none';
    });

    plan.addEventListener('change', function () {
        if (plan.value === 'voraz') {
            singleGenre.style.display = 'none';
            multipleGenre.style.display = 'block';
        } else {
            singleGenre.style.display = 'block';
            multipleGenre.style.display = 'none';
        }
    });

    function validateForm() {
        let isValid = true;

        if (nombre.value.trim() === '') {
            showError(nombre, errorNombre, 'El nombre es obligatorio');
            isValid = false;
        } else {
            hideError(nombre, errorNombre);
        }

        if (apellidos.value.trim() === '') {
            showError(apellidos, errorApellidos, 'Los apellidos son obligatorios');
            isValid = false;
        } else {
            hideError(apellidos, errorApellidos);
        }

        if (!validateEmail(email.value)) {
            showError(email, errorEmail, 'El correo electrónico no es válido');
            isValid = false;
        } else {
            hideError(email, errorEmail);
        }

        if (email.value !== confirmEmail.value) {
            showError(confirmEmail, errorConfirmEmail, 'Los correos electrónicos no coinciden');
            isValid = false;
        } else {
            hideError(confirmEmail, errorConfirmEmail);
        }

        if (password.value.length < 8) {
            showError(password, errorPassword, 'La contraseña debe tener al menos 8 caracteres');
            isValid = false;
        } else {
            hideError(password, errorPassword);
        }

        if (password.value !== confirmPassword.value) {
            showError(confirmPassword, errorConfirmPassword, 'Las contraseñas no coinciden');
            isValid = false;
        } else {
            hideError(confirmPassword, errorConfirmPassword);
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

    function resetValidation() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function (errorMessage) {
            errorMessage.style.display = 'none';
        });

        const inputs = document.querySelectorAll('.form-input');
        inputs.forEach(function (input) {
            input.style.borderColor = '#ccc';
        });
    }
});

