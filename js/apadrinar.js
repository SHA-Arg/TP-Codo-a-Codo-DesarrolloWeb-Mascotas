const sponsorForm = document.forms["sponsor-form"]; 

sponsorForm.onsubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(formEl);
    Swal.fire( 
        'Gracias', 
        'Su solicitud fue enviada con éxito', 
        'success' 
    );
}
