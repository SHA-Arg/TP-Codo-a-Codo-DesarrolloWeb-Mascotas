const transitarForm = document.forms["transitar-form"]; 

transitarForm.onsubmit = (e) => {
    e.preventDefault();
    Swal.fire( 
        'Gracias', 
        'Su solicitud fue enviada con éxito', 
        'success' 
    );
}