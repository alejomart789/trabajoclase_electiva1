document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const identificacion = document.getElementById('identificacion').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    if (nombre && apellidos && identificacion && correo && telefono) {
        const datosRegistrados = {
            nombre,
            apellidos,
            identificacion,
            correo,
            telefono
        };

        localStorage.setItem('datosRegistrados', JSON.stringify(datosRegistrados));

        window.location.href = 'ok.html';
    } else {
        alert("Por favor, complete todos los campos.");
    }
});
