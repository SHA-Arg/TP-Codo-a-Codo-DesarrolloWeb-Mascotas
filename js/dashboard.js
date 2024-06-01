import { deleteData } from "./utils.js";

const url = "https://s3b4.pythonanywhere.com/";

export async function recuperarData() {
	const response = await fetch(url);
	try {
		if (response.ok) {
			const DATA = await response.json();

			return DATA;
		} else {
			console.error("Algo no funcionó");
		}
	} catch {
		console.error("Error en el servidor");
	}
}

export async function getMascotas() {
	const DATA = await recuperarData();
	let datosMascotas = DATA.pets;
	let listadoMascotas = "";
	let cardMascotas = document.querySelector(".container-dashboard");

	await datosMascotas.forEach((e, index) => {
		listadoMascotas += crearPublic(e, index);
	});

	cardMascotas.innerHTML = listadoMascotas;
}

document.addEventListener("click", async (e) => {
	if (e.target.id === "btn-delete") {
		await deleteData(url, e.target.name);
		window.location.href = "../pages/dashboard.html";
	}
});

export function crearPublic(mascota, index) {
	let publication = `
    <div class="publication">
    <div class="pet-image">
          <img class="dash-img" src="${mascota.image}" alt="imagen mascota">
          <h3 class="dash-name"><b>${mascota.name}</b></h3>
      </div>
      <div class="pet-info">
          <div class="pet-info-basic">
              <p class="dash-sex"><b>Sexo:</b> ${mascota.sex}</p>
              <p class="dash-age"><b>Edad:</b> ${mascota.age} meses</p>
              <p class="dash-race"><b>Raza:</b> ${mascota.race}</p>
              <p class="dash-body-size"><b>Tamaño:</b> ${mascota.size}</p>
              <p class="dash-health"><b>Estado de salud:</b> ${mascota.health_status}</p>
          </div>
          <div class="pet-info-aditional">
              <p class="dash-body-description" onclick="expandirParrafo(this)"><b>Descripción:</b>
              ${mascota.description}</p>
              <p class="dash-body-vaccine"><b>Desparasitación:</b>${mascota.vaccine}</p>
              <p class="dahs-body-sterilization"><b>Esterilización:</b> ${mascota.sterilization}</p>
              <p class="dash-body-adress"><b>Ubicación:</b> ${mascota.ubication}</p>
          </div>
      </div>
      <div class="dash-buttons2">
          <button class="dashboard-btn" id="btn-edit"> <a href="./editar_publicacion.html?id=${mascota.id}">Editar</a></button>
          <button class="dashboard-btn" id="btn-delete" name="${mascota.id}">Eliminar</button>
      </div>
      <div class="dash-buttons">
          <button class="dashboard-btn" id="btn-edit"><a href="./editar_publicacion.html?id=${mascota.id}">Editar</a></button>
          <button class="dashboard-btn" id="btn-delete" name="${mascota.id}">Eliminar</button>
      </div>
      </div>
      `;

	return publication;
}

getMascotas();
