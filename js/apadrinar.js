const sponsorForm = document.forms["sponsor-form"]; 

sponsorForm.onsubmit = (e) => {
    e.preventDefault();
    Swal.fire( 
        'Gracias', 
        'Su solicitud fue enviada con éxito', 
        'success' 
    );
}
