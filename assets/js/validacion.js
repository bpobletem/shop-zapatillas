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
        const direccion = document.getElementById("direccion").value.trim();
        const depto = document.getElementById("depto").value.trim();
        const region = document.getElementById("region").value.trim();
        const comuna = document.getElementById("comuna").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const correo = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirm_password = document.getElementById("confirm_password").value.trim();
        const fecha_nacimiento = document.getElementById("fecha_nacimiento").value.trim();
        const errorNombre = document.getElementById("errorNombre");
        const errorApellidos = document.getElementById("errorApellidos");
        const errorRut = document.getElementById("errorRut");
        const errorDireccion = document.getElementById("errorDireccion");
        const errorDepto = document.getElementById("errorDepto");
        const errorRegion = document.getElementById("errorRegion");
        const errorComuna = document.getElementById("errorComuna");
        const errorTelefono = document.getElementById("errorTelefono");
        const errorCorreo = document.getElementById("errorCorreo");
        const errorPassword = document.getElementById("errorPassword");
        const errorFechaNac = document.getElementById("errorFechaNac");


        //Validacion campos completos
        if (nombre === "" || apellidos === "" || rut === "" || direccion === "" || depto === "" || region === "" || comuna === "" || telefono === "" || correo === "" || password === "" || confirm_password === "" || fecha_nacimiento === "") {
            warnings += "Por favor, complete todos los campos.<br>";
        }

        //Validacion nombre
        if (nombre.length < 2) {
            errorNombre.innerHTML = `El nombre es muy corto. <br>`;
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

        //Validacion fecha de nacimiento
        const fechaHoy = new Date();
        const fechaNacimiento = new Date(fecha_nacimiento);

        //Verificamos que exista la fecha
        if (!fecha_nacimiento) {
            warnings += `Por favor, seleccione su fecha de nacimiento. <br>`;
    
        }
        //Verificamos que no sea posterior a la fecha de hoy
        if (fechaNacimiento > fechaHoy) {
            warnings += `La fecha de nacimiento no puede ser posterior al día de hoy. <br>`;
        }

        if (direccion.length < 6) {
            warnings += `Ingrese una direccion valida. <br>`
        }

        // Mostrar los mensajes de advertencia
        mensajeError.innerHTML = warnings;

    
    }
    
})
