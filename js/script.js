document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los inputs
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Simulación de validación de inicio de sesión
    if (email === "test@example.com" && password === "password123") {
        showLoginFeedback(true); // Llamar a la función de éxito
    } else {
        showLoginFeedback(false); // Llamar a la función de error
    }
});

function showLoginFeedback(success) {
    const form = document.getElementById('login-form');
    const loginButton = document.querySelector('.login-btn');
    
    // Deshabilitar el botón temporalmente para evitar múltiples envíos
    loginButton.disabled = true;

    // Crear un efecto de "shake" si el inicio de sesión falla
    if (!success) {
        form.classList.add('shake');
        setTimeout(() => {
            form.classList.remove('shake');
            loginButton.disabled = false; // Volver a habilitar el botón
            alert("Login failed. Please check your credentials."); // Mensaje de error
        }, 500); // Tiempo de duración de la animación de "shake"
    } else {
        // Animación de éxito
        loginButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
        loginButton.style.backgroundColor = "#4CAF50"; // Cambiar color a verde para indicar éxito

        setTimeout(() => {
            // Simulación de redireccionamiento tras el inicio de sesión exitoso
            alert("Login successful! Redirecting...");
            loginButton.innerHTML = 'Log in'; // Restaurar el botón
            loginButton.disabled = false;
            loginButton.style.backgroundColor = "#00f3ff"; // Restaurar color
            // Aquí podrías redirigir al usuario a otra página
            // window.location.href = 'dashboard.html';
        }, 2000); // Tiempo para mostrar la animación de carga antes del éxito
    }
}
