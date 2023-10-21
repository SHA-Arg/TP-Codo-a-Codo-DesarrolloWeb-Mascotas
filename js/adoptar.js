const adoptForm = document.forms["adopt-form"]; 

adoptForm.onsubmit = (e) => {
    e.preventDefault();
    Swal.fire( 
        'Gracias', 
        'Su solicitud fue enviada con éxito', 
        'success' 
    );
}
