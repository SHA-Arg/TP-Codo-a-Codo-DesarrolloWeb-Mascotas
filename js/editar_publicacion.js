import { postData } from "./utils.js";

document.addEventListener('DOMContentLoaded', function () {
    const editForm = document.forms['edit-form'];

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
        "fullname": editForm.elements["full-name"].value,
        "photo": editForm.elements["photo"].value,
        "description": editForm.elements["description"].value,
        "address": editForm.elements["adress"].value,
        "species": editForm.elements["species"].value,
        "gender": editForm.elements["gender"].value,
        "age": editForm.elements["age"].value,
        "race": editForm.elements["race"].value,
        "size": editForm.elements["size"].value,
        "color": editForm.elements["color"].value,
        "deworming": editForm.elements["deworming"].value,
        "sterilization": editForm.elements["sterilization"].value,
        "health": editForm.elements["health"].value
    }
    return values
}

const clearForm = () => {
    editForm.elements["fullname"].value = "";
    editForm.elements["photo"].value = "";
    editForm.elements["description"].value = "";
    editForm.elements["address"].value = "";
    editForm.elements["species"].value = "";
    editForm.elements["gender"].value = "";
    editForm.elements["age"].value = "";
    editForm.elements["race"].value = "";
    editForm.elements["size"].value = "";
    editForm.elements["color"].value = "";
    editForm.elements["deworming"].value = "";
    editForm.elements["sterilization"].value = "";
    editForm.elements["health"].value = "";
    
    
}