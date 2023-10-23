const adoptForm = document.forms["adopt-form"]; 

adoptForm.onsubmit = (e) => {
    e.preventDefault();
    values = {
        "fullname": adoptForm.elements["full-name"].value,
        "age": adoptForm.elements["full-name"].value,
        "dni": adoptForm.elements["full-name"].value,
        "address": adoptForm.elements["full-name"].value,
        "location": adoptForm.elements["full-name"].value,
        "province": adoptForm.elements["full-name"].value,
        "email": adoptForm.elements["full-name"].value,
        "facebook": adoptForm.elements["full-name"].value,
        "instragram": adoptForm.elements["full-name"].value,
        "phone": adoptForm.elements["full-name"].value,
        "about_pet": adoptForm.elements["about-pet"].value,
        "about_family": adoptForm.elements["about-family"].value,
        "type_house": "endesarrollo",
        "owner_house": false,
        "allow_pet": true,
        "another_pet": adoptForm.elements["another-pet"].value,
        "agree_pet": adoptForm.elements["agree-pet"].value,
        "had_pet": adoptForm.elements["had-pet"].value,
        "sick_pet": adoptForm.elements["sick-pet"].value,
        "moving_pet": adoptForm.elements["moving-pet"].value,
        "pet_needs": adoptForm.elements["pet-needs"].value,
        "pet_grows": adoptForm.elements["pet-grows"].value,
        "operation_pet": true,
        "pet_vaccines": true,
        "pet_anothers": false,
    }
    console.log(values);
    Swal.fire( 
        'Gracias', 
        'Su solicitud fue enviada con éxito', 
        'success' 
    );
}
