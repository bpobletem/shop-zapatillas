window.addEventListener('load', () => {

    const form = document.getElementById("formulario");
    const mensajeError = document.getElementById("mensajeError");

    form.addEventListener('submit', e => {
        e.preventDefault();
        validarFormulario();
    });

    function validarFormulario() {
        // Reseteamos los errores
        mensajeError.innerHTML = "";

        // Declaramos variables para comenzar las validaciones
        let warnings = '';
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passFormat = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/; //1 digito, 1 mayuscula, 1 minuscula
        const telefonoFormat = /^9\d{8}$/;
        const rutFormat = /^\d{7,8}-[\dkK]$/;
        
        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const rut = document.getElementById("rut").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const correo = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirm_password = document.getElementById("confirm_password").value.trim();


        //Validacion campos completos
        if (nombre === "" || apellidos === "" || rut === "" || direccion === "" || depto === "" || region === "" || comuna === "" || telefono === "" || correo === "" || password === "" || confirm_password === "" || fecha_nacimiento === "") {
            warnings += "Por favor, complete todos los campos.<br>";
        }

        //Validacion nombre
        if (nombre.length < 2) {
            warnings += `El nombre es muy corto. <br>`;
        }

        //Validacion apellido
        if (apellidos.length < 2) {
            warnings += `El apellido es muy corto. <br>`;
        }

        if (!rutFormat.test(rut)) {
            warnings += `El rut no es valido. <br>`;
        }
        
        //Validacion correo
        if (!mailFormat.test(correo)) {
            warnings += `El correo no es valido. <br>`;
        }

        //Validacion telefono solo 9 numeros
        if (!telefonoFormat.test(telefono)) {
            warnings += `El telefono no es valido. <br>`;
        }

        //Validacion password segura
        if (!passFormat.test(password)) {
            warnings += `La contraseña debe tener al menos un digito, una mayuscula y una minuscula. <br>`;
        }

        //Validacion passwords coincidan
        if (password !== confirm_password) {
            warnings += `Las contraseñas no coinciden. <br>`;
        }


        // Mostrar los mensajes de advertencia
        mensajeError.innerHTML = warnings;

    
    }
    
})
