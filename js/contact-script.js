document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('contact-form-confirmation-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Mostrar mensaje de confirmación
        confirmationMessage.style.display = 'block';

        // Ocultar formulario de contacto
        contactForm.style.display = 'none';
    });
});
