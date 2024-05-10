window.addEventListener('load', () => {

    const form = document.getElementById("formulario");
    const mensajeError = document.getElementById("mensajeError");

    form.addEventListener('submit', e => {
        e.preventDefault();
        validarFormulario();
    });

    function validarFormulario() {
        // Declaramos las regex para validar
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/; //1 numero, 1 mayuscula, 1 minuscula min 6 caracteres
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
        const errorRegion = document.getElementById("errorRegion");
        const errorComuna = document.getElementById("errorComuna");
        const errorTelefono = document.getElementById("errorTelefono");
        const errorCorreo = document.getElementById("errorCorreo");
        const errorPassword = document.getElementById("errorPassword");
        const errorFechaNac = document.getElementById("errorFechaNac");

        // Reseteamos los errores
        mensajeError.innerHTML = "";
        errorNombre.innerHTML = "";
        errorApellidos.innerHTML = "";
        errorRut.innerHTML = "";
        errorDireccion.innerHTML = "";
        errorRegion.innerHTML = "";
        errorComuna.innerHTML = "";
        errorTelefono.innerHTML = "";
        errorCorreo.innerHTML = "";
        errorPassword.innerHTML = "";
        errorFechaNac.innerHTML = "";



        //Validacion campos completos
        if (nombre === "" || apellidos === "" || rut === "" || direccion === "" || telefono === "" || correo === "" || password === "" || confirm_password === "" || fecha_nacimiento === "") {
            mensajeError.innerHTML = "Por favor, complete todos los campos.";
            return false;
        }

        //Validacion nombre
        if (nombre.length < 2 || nombre.length > 50) {
            errorNombre.innerHTML = `El nombre es muy corto.`;
            return false;
        }

        //Validacion apellido
        if (apellidos.length < 2 || apellidos.length > 50) {
            errorApellidos.innerHTML = `El apellido es muy corto.`;
            return false;
        }

        if (!rutFormat.test(rut)) {
            errorRut.innerHTML = `El rut no es valido. Sin puntos y con guion.`;
            return false;
        }

        //Validacion fecha de nacimiento
        const fechaHoy = new Date();
        const fechaNacimiento = new Date(fecha_nacimiento);

        //Verificamos que exista la fecha
        if (!fecha_nacimiento) {
            errorFechaNac.innerHTML = `Por favor, seleccione su fecha de nacimiento.`;
            return false;
        }
        //Verificamos que no sea posterior a la fecha de hoy
        if (fechaNacimiento > fechaHoy) {
            errorFechaNac.innerHTML = `La fecha de nacimiento no puede ser posterior al día de hoy.`;
            return false;
        }

        //Validacion correo
        if (!mailFormat.test(correo)) {
            errorCorreo.innerHTML = `El correo no es valido.`;
            return false;
        }

        //Validacion telefono solo 9 numeros
        if (!telefonoFormat.test(telefono)) {
            errorTelefono.innerHTML = `El telefono no es valido. Formato: 912345678`;
            return false;
        }

        //Validacion password segura
        if (password.length < 6 || password.length > 50) {
            errorPassword.innerHTML = `La contraseña debe tener al menos 6 caracteres y maximo 50`;
            return false;
        }

        if (!passFormat.test(password)) {
            errorPassword.innerHTML = `La contraseña debe tener al menos un numero, una mayuscula y una minuscula`;
            return false;
        }

        //Validacion passwords coincidan
        if (password !== confirm_password) {
            errorPassword.innerHTML = `Las contraseñas no coinciden.`;
            return false;
        }


        if (direccion.length < 4 || direccion.length > 50) {
            errorDireccion.innerHTML = `Ingrese una direccion valida.`
            return false;
        }

        if (region === "") {
            errorRegion.innerHTML = "Por favor, seleccione una region";
        }

        if (comuna === "") {
            errorComuna.innerHTML = "Por favor, seleccione una region";
        }

        //Submit del formulario en caso de pasar las validaciones
        form.submit();
    }
})


    function showPass() {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    function showConfirmPass() {
        var x = document.getElementById("confirm_password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }