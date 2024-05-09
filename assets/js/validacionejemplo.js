window.addEventListener('load', () => {
    const form = document.getElementById("formulario");
    const mensajeError = document.getElementById("mensajeError");

    form.addEventListener('submit', e => {
        e.preventDefault();
        validarFormulario();
    });

    function validarFormulario() {
        mensajeError.innerHTML = "";

        const correo = document.getElementById("correo").value.trim();
        const contraseña = document.getElementById("contraseña").value.trim();

        let warnings = "";

        if (correo === "" || contraseña === "") {
            warnings += "Por favor, complete todos los campos.<br>";
        }

        mensajeError.innerHTML = warnings;
    }
});