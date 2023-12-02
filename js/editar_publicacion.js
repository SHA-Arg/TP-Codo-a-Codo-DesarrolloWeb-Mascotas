document.addEventListener('DOMContentLoaded', function () {
    const editForm = document.forms['adopt-form'];

    if (editForm) {
        editForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Aquí agregar lógica para procesar el formulario
            // ...

            // si el formulario se rellena adecuadamente: aparece el sweet alert :)

            Swal.fire({
                icon: "success",
                title: "Su publicación ha sido editada con éxito",
                confirmButtonText: "Cerrar"

            });

        });
    }
});

const getFormValues = () => {
    values = {
        "photo": editForm.elements["agree-pet"].value,
        "fullname": editForm.elements["full-name"].value,
        "age": editForm.elements["full-name"].value,
        "address": editForm.elements["full-name"].value,
        "gender": editForm.elements["full-name"].value,
       
    }
    return values
}