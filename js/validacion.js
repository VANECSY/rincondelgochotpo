const contactForm = document.getElementById('contact-form');
const nombre = document.getElementById('nombre');
const numero = document.getElementById('numero');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const nombreError = document.getElementById('nombre-error');
const numeroError = document.getElementById('numero-error');
const emailError = document.getElementById('email-error');
const mensajeError = document.getElementById('mensaje-error');

contactForm.addEventListener('submit', function (e) {
    let valid = true;

    // Validar nombre
    if (nombre.value.trim() === '') {
        nombreError.textContent = 'El nombre es obligatorio';
        valid = false;
    } else {
        nombreError.textContent = '';
    }

    //Validar nro telefono
    if (numero.value.trim() === '') {
        numeroError.textContent = 'El número de telefono es obligatorio';
        valid = false;
    } else {
        numeroError.textContent = '';
    }

    // Validar correo electrónico
    if (email.value.trim() === '') {
        emailError.textContent = 'El correo electrónico es obligatorio';
        valid = false;
    } else if (!validateEmail(email.value)) {
        emailError.textContent = 'El correo electrónico no es válido';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Validar mensaje
    if (mensaje.value.trim() === '') {
        mensajeError.textContent = 'El mensaje es obligatorio';
        valid = false;
    } else {
        mensajeError.textContent = '';
    }

    if (!valid) {
        e.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}