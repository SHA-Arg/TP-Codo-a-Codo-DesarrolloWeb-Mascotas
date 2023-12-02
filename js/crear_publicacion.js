document.addEventListener('DOMContentLoaded', function () {
    const adoptForm = document.forms['adopt-form'];

    if (adoptForm) {
        adoptForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Aquí agregar lógica para procesar el formulario
            // ...

            // si el formulario se rellena adecuadamente: aparece el sweet alert :)

            Swal.fire({
                icon: "success",
                title: "Su publicación ha sido creada con éxito",
                confirmButtonText: "Cerrar"

            });

        });
    }
});