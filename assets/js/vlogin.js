window.addEventListener('load', () => {

    const form = document.getElementById("formulario");
    const mensajeError = document.getElementById("mensajeError");

    form.addEventListener('submit', e => {
        e.preventDefault(); // Aquí está la corrección
        validarFormulario();
    });

    function validarFormulario() {
        // Reseteamos los errores
        mensajeError.innerHTML = "";

        //Variables
        let warnings = ''
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        //Seleccionamos los elementos
        const correo = document.getElementById("correo").value.trim();
        const password = document.getElementById("password").value.trim();

        //Validacion campos completos
        if (correo === "" || password === "") {
            warnings += "Por favor, complete todos los campos.<br>";
        }

        //Validacion correo
        if (!mailFormat.test(correo)) {
            warnings += `El correo no es valido. <br>`;
        }

        // Mostrar los mensajes de advertencia
        mensajeError.innerHTML = warnings;
    
    }
    
})