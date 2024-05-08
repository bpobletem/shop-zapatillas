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

        // Declaramos variables para comenzar las validaciones
        let warnings = '';

        const precioFormat = /^\d+(\.\d{1,2})?$/; // Formato de precio (números con opción de dos decimales)
        const nombre = document.getElementById("nombre").value.trim();
        const precio = document.getElementById("precio").value.trim();
        const tallas = document.getElementById("tallas").value.trim(); // Valor de las tallas seleccionadas
        const imagen = document.getElementById("imagen").value.trim(); // Valor del campo de imagen



        // Validación de campos completos
        if (nombre === "" || precio === "" || tallas.length === 0 || imagen === "") {
            warnings += `Por favor, complete todos los campos. <br>`;
        }

        //Validacion nombre
        if (nombre.length < 2) {
            warnings += `El nombre es muy corto. <br>`;
        }

        // Validación de precio
        if (!precioFormat.test(precio)) {
            warnings += `El formato del precio no es válido. <br>`;
        }

        // Validación de tallas
        if (tallas.length === 0) {
            warnings += `Por favor, seleccione al menos una talla disponible. <br>`;
        }

        // Validación de imagen
        if (!imagen) {
            warnings += `Por favor, seleccione una imagen. <br>`;
        }

        // Mostrar los mensajes de advertencia
        mensajeError.innerHTML = warnings;


    }

})
