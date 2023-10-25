const sponsorForm = document.forms["sponsor-form"]; 

sponsorForm.onsubmit = (e) => {
    e.preventDefault();
    valuesSponsorForm = getFormValues();
    console.log(valuesSponsorForm);
    Swal.fire( 
        'Gracias', 
        'Su solicitud fue enviada con éxito', 
        'success' 
    );
}

const getFormValues = () => {
    values = {
        "type-donation": "Desarrollo",
        "amount": 0,
        "another_amount": sponsorForm.elements["another_amount"].value,
        "contac_name": sponsorForm.elements["contac-name"].value,
        "birday_contact": sponsorForm.elements["date"].value,
        "dni": sponsorForm.elements["dni"].value,
        "email": sponsorForm.elements["full-name"].value,
        "facebook": sponsorForm.elements["full-name"].value,
        "phone": sponsorForm.elements["full-name"].value,
        "card_number": sponsorForm.elements["card-number"].value,
        "card_name": sponsorForm.elements["catd-name"].value,
        "card_date": sponsorForm.elements["card-date"].value,
        "card_cvv": sponsorForm.elements["card-cvv"].value,
    }
    return values
}
