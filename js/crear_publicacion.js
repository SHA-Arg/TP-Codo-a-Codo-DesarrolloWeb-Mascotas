document.addEventListener('DOMContentLoaded', function () {
    const crearForm = document.forms['crear-form'];

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
        "fullname": crearForm.elements["full-name"].value,
        "photo": crearForm.elements["photo"].value,
        "description": crearForm.elements["description"].value,
        "address": crearForm.elements["adress"].value,
        "species": crearForm.elements["species"].value,
        "gender": crearForm.elements["gender"].value,
        "age": crearForm.elements["age"].value,
        "race": crearForm.elements["race"].value,
        "size": crearForm.elements["size"].value,
        "color": crearForm.elements["color"].value,
        "deworming": crearForm.elements["deworming"].value,
        "sterilization": crearForm.elements["sterilization"].value,
        "health": crearForm.elements["health"].value


        
       
    }
    return values
}

const clearForm = () => {
    crearForm.elements["fullname"].value = "";
    crearForm.elements["photo"].value = "";
    crearForm.elements["description"].value = "";
    crearForm.elements["address"].value = "";
    crearForm.elements["species"].value = "";
    crearForm.elements["gender"].value = "";
    crearForm.elements["age"].value = "";
    crearForm.elements["race"].value = "";
    crearForm.elements["size"].value = "";
    crearForm.elements["color"].value = "";
    crearForm.elements["deworming"].value = "";
    crearForm.elements["sterilization"].value = "";
    crearForm.elements["health"].value = "";
    
    
}