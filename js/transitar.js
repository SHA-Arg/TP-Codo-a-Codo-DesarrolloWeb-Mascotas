const transitarForm = document.forms["transitar-form"]; 

transitarForm.onsubmit = (e) => {
    e.preventDefault();
    valuesTransitartForm = getFormValues();
    console.log(valuesTransitartForm);
    Swal.fire( 
        'Gracias', 
        'Su solicitud fue enviada con éxito', 
        'success' 
    );
}

const getFormValues = () => {
    values = {
        "fullname": transitarForm.elements["full-name"].value,
        "age": transitarForm.elements["person-age"].value,
        "dni": transitarForm.elements["dni"].value,
        "address": transitarForm.elements["address"].value,
        "location": transitarForm.elements["locale"].value,
        "province": transitarForm.elements["province"].value,
        "email": transitarForm.elements["email"].value,
        "facebook": transitarForm.elements["facebook"].value,
        "instragram": transitarForm.elements["injstagram"].value,
        "phone": transitarForm.elements["phone"].value,
        "about_family": transitarForm.elements["about-family"].value,
        "agree_family": transitarForm.elements["agree-family"].value,
        "type_house": "endesarrollo",
        "owner_house": false,
        "allow_pet": true,
        "another_pet": transitarForm.elements["another-pet"].value,
        "agree_pet": transitarForm.elements["agree-pet"].value,
        "had_pet": transitarForm.elements["had-pet"].value,
        "time_pet": transitarForm.elements["time-pet"].value,
        "pet_medical": true,
        "pet_anothers": false,
    }
    return values
}
