const registerForm = document.forms["register-form"]; 

registerForm.onsubmit = (e) => {
    e.preventDefault();
    valuesForm = getFormValues()
    clearForm()
    console.log(values);
    postData("http://127.0.0.1:5000/mascotas/mascotas", valuesForm)
    Swal.fire( 
        'Gracias', 
        'Su solicitud fue enviada con éxito', 
        'success' 
    );
}

const getFormValues = () => {
    values = {
        "url": registerForm.elements["photo-url"].value,
        "petname": registerForm.elements["pet-name"].value,
        "locale": registerForm.elements["locale"].value,
        "age": registerForm.elements["pet-age"].value,
        "sexo": registerForm.elements["sexo-pet"].value,
        "size": registerForm.elements["zise-pet"].value,
        "sterilization": registerForm.elements["esterilizacion"].value,
        "health_status": registerForm.elements["salud"].value,
        "vaccine": registerForm.elements["desparasitacion"].value
    }
    return values
}

const clearForm = () => {
    registerForm.elements["photo-url"].value = "";
    registerForm.elements["pet-name"].value = "";
    registerForm.elements["locale"].value = "";
    registerForm.elements["pet-age"].value = "";
    registerForm.elements["sexo-pet"].value = "";
    registerForm.elements["zise-pet"].value = "";
    registerForm.elements["esterilizacion"].value = "";
    registerForm.elements["salud"].value = "";
    registerForm.elements["desparasitacion"].value = "";
}

const postData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
}
