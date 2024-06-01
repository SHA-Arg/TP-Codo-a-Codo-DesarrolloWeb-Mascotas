import { getDataById, updateData } from "./utils.js";

const registerForm = document.forms["adopt-form"];

const params = new URLSearchParams(window.location.search);
const petId = params.get("id");

const loadPet = async () => {
	const data = await getDataById("https://s3b4.pythonanywhere.com/", petId);
	const pet = data.pet;
	updateForm(pet);
};

registerForm.onsubmit = async (e) => {
	e.preventDefault();
	const valuesForm = getFormValues();
	console.log(valuesForm);
	await updateData("https://s3b4.pythonanywhere.com/", petId, valuesForm);

	window.location.href = "../pages/dashboard.html";
};

const getFormValues = () => {
	const values = {
		name: registerForm.elements["full-name"].value,
		image: registerForm.elements["photo"].value,
		description: registerForm.elements["description"].value,
		ubication: registerForm.elements["address"].value,
		pet_type: registerForm.elements["species"].value,
		sex: registerForm.elements["gender"].value,
		age: registerForm.elements["age"].value,
		race: registerForm.elements["race"].value,
		size: registerForm.elements["size"].value,
		color: registerForm.elements["color"].value,
		vaccine: registerForm.elements["deworming"].value,
		sterilization: registerForm.elements["sterilization"].value,
		health_status: registerForm.elements["health"].value,
	};
	return values;
};

const updateForm = (pet) => {
	registerForm.elements["full-name"].value = pet.name;
	registerForm.elements["photo"].value = pet.image;
	registerForm.elements["description"].value = pet.description;
	registerForm.elements["address"].value = pet.ubication;
	registerForm.elements["species"].value = pet.pet_type;
	registerForm.elements["gender"].value = pet.sex;
	registerForm.elements["age"].value = pet.age;
	registerForm.elements["race"].value = pet.race;
	registerForm.elements["size"].value = pet.size;
	registerForm.elements["color"].value = pet.color;
	registerForm.elements["deworming"].value = pet.vaccine;
	registerForm.elements["sterilization"].value = pet.sterilization;
	registerForm.elements["health"].value = pet.health_status;
};

loadPet();
