document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    const registeredEmail = "alejo@gmail.com"; // Usuario registrado en el JS
    const registeredPassword = "admin"; // Contraseña registrada en el JS

    if (email === registeredEmail && password === registeredPassword) {
        window.location.href = 'register.html'; // Redirigir a la página de registro
    } else {
        showLoginFeedback(false);
    }
});

function showLoginFeedback(success) {
    const form = document.getElementById('login-form');
    const loginButton = document.querySelector('.login-btn');
    
    loginButton.disabled = true;

    if (!success) {
        form.classList.add('shake');
        setTimeout(() => {
            form.classList.remove('shake');
            loginButton.disabled = false;
            alert("Login failed. Please check your credentials.");
        }, 500);
    } else {
        loginButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
        loginButton.style.backgroundColor = "#4CAF50";

        setTimeout(() => {
            alert("Login successful! Redirecting...");
            loginButton.innerHTML = 'Log in';
            loginButton.disabled = false;
            loginButton.style.backgroundColor = "#00f3ff";
        }, 2000);
    }
}
