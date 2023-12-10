import { postData } from "./utils.js";

document.addEventListener("DOMContentLoaded", function () {
	const editForm = document.forms["edit-form"];

	if (editForm) {
		editForm.addEventListener("submit", function (event) {
			event.preventDefault();

			// Aquí agregar lógica para procesar el formulario
			// ...

			// si el formulario se rellena adecuadamente: aparece el sweet alert :)

			Swal.fire({
				icon: "success",
				title: "Su publicación ha sido editada con éxito",
				confirmButtonText: "Cerrar",
			});
		});
	}
});

const registerForm = document.forms["adopt-form"];

registerForm.onsubmit = (e) => {
	e.preventDefault();

	let myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const valuesForm = getFormValues();
	clearForm();

	const raw = JSON.stringify(valuesForm);

	const requestOptions = {
		method: "PUT",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};

	fetch("https://sofiae99.pythonanywhere.com/mascotas", requestOptions)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log("error", error));
};

const getFormValues = () => {
	values = {
		name: registerForm.elements["full-name"].value,
		pet_type: registerForm.elements["species"].value,
		race: registerForm.elements["race"].value,
		color: registerForm.elements["color"].value,
		size: registerForm.elements["size"].value,
		sex: registerForm.elements["gender"].value,
		age: registerForm.elements["age"].value,
		vaccine: registerForm.elements["deworming"].value,
		sterilization: registerForm.elements["sterilization"].value,
		health_status: registerForm.elements["health"].value,
		description: registerForm.elements["description"].value,
		organization: 1,
		image: registerForm.elements["photo"].value,
		ubication: registerForm.elements["address"].value,
	};
	return values;
};

const clearForm = () => {
	registerForm.elements["full-name"].value = "";
	registerForm.elements["photo"].value = "";
	registerForm.elements["description"].value = "";
	registerForm.elements["address"].value = "";
	registerForm.elements["species"].value = "";
	registerForm.elements["gender"].value = "";
	registerForm.elements["age"].value = "";
	registerForm.elements["race"].value = "";
	registerForm.elements["size"].value = "";
	registerForm.elements["color"].value = "";
	registerForm.elements["deworming"].value = "";
	registerForm.elements["sterilization"].value = "";
	registerForm.elements["health"].value = "";
};
