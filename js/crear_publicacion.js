document.addEventListener('DOMContentLoaded', function () {
    const crearForm = document.forms['adopt-form'];

    if (crearForm) {
        crearForm.addEventListener('submit', function (event) {
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

const getFormValues = () => {
    values = {
        "photo": crearForm.elements["agree-pet"].value,
        "fullname": crearForm.elements["full-name"].value,
        "age": crearForm.elements["full-name"].value,
        "address": crearForm.elements["full-name"].value,
        "gender": crearForm.elements["full-name"].value,
        
       
    }
    return values
}