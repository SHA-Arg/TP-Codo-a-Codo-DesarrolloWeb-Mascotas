import { postData } from "./utils.js";

const registerForm = document.forms["adopt-form"];

registerForm.onsubmit = async (e) => {
	e.preventDefault();

	const valuesForm = getFormValues();
	clearForm();

	const raw = JSON.stringify(valuesForm);

	await postData("https://s3b4.pythonanywhere.com/", valuesForm);

	window.location.href = "../pages/dashboard.html";
};

const getFormValues = () => {
	const values = {
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
