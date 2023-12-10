import { postData, getData } from "./utils.js";

document.addEventListener("DOMContentLoaded", function () {
  const crearForm = document.forms["crear-form"];

  if (crearForm) {
    crearForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const valuesForm = getFormValues();
      clearForm();

      postData(
        "https://sofiae99.pythonanywhere.com/mascotas",
        valuesForm,
        "POST"
      );

      Swal.fire("Gracias", "Su solicitud fue realizada con éxito", "success");
    });
  }
});

const getFormValues = () => {
  values = {
    name: crearForm.elements["name"].value,
    image: crearForm.elements["image"].value,
    description: crearForm.elements["description"].value,
    address: crearForm.elements["adress"].value,
    pet_type: crearForm.elements["pet_type"].value,
    sex: crearForm.elements["sex"].value,
    age: crearForm.elements["age"].value,
    race: crearForm.elements["race"].value,
    size: crearForm.elements["size"].value,
    color: crearForm.elements["color"].value,
    vaccine: crearForm.elements["vaccine"].value,
    sterilization: crearForm.elements["sterilization"].value,
    health_status: crearForm.elements["health_status"].value,
    ubication: crearForm.elements["ubication"].value,
  };
  return values;
};

const clearForm = () => {
  crearForm.elements["name"].value = "";
  crearForm.elements["image"].value = "";
  crearForm.elements["description"].value = "";
  crearForm.elements["address"].value = "";
  crearForm.elements["pet_type"].value = "";
  crearForm.elements["sex"].value = "";
  crearForm.elements["age"].value = "";
  crearForm.elements["race"].value = "";
  crearForm.elements["size"].value = "";
  crearForm.elements["color"].value = "";
  crearForm.elements["vaccine"].value = "";
  crearForm.elements["sterilization"].value = "";
  crearForm.elements["health_status"].value = "";
  crearForm.elements["ubication"].value = "";
};

