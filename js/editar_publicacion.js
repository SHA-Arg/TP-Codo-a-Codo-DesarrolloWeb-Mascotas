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
        "name": editForm.elements["name"].value,
        "image": editForm.elements["image"].value,
        "description": editForm.elements["description"].value,
        "ubication": editForm.elements["ubication"].value,
        "pet_type": editForm.elements["pet_type"].value,
        "sex": editForm.elements["sex"].value,
        "age": editForm.elements["age"].value,
        "race": editForm.elements["race"].value,
        "size": editForm.elements["size"].value,
        "color": editForm.elements["color"].value,
        "vaccine": editForm.elements["vaccine"].value,
        "sterilization": editForm.elements["sterilization"].value,
        "health_status": editForm.elements["health_status"].value,
        "ubication": editForm.elements["ubication"].value
    }
    return values
}

const clearForm = () => {
    editForm.elements["name"].value = "";
    editForm.elements["image"].value = "";
    editForm.elements["description"].value = "";
    editForm.elements["ubication"].value = "";
    editForm.elements["pet_type"].value = "";
    editForm.elements["sex"].value = "";
    editForm.elements["age"].value = "";
    editForm.elements["race"].value = "";
    editForm.elements["size"].value = "";
    editForm.elements["color"].value = "";
    editForm.elements["vaccine"].value = "";
    editForm.elements["sterilization"].value = "";
    editForm.elements["health_status"].value = "";
    editForm.elements["ubication"].value = "";
}