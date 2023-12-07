import { recuperarData } from "./cards.js";

async function verPerfil() {
	const params = new URLSearchParams(window.location.search);
	const index = params.get("index");
    // const tipoMasc = params.get("tipo");

	const DATA = await recuperarData();
	const datosMascotas = DATA.pets;
    console.log(datosMascotas)
	// const mascotaPerro = datosMascotas.perros[index];
	// const mascotaGato = datosMascotas.gatos[index];

	const containerProfile = document.querySelector(".profile");

    // if (index !== null) {
        const perfil = crearPerfil(datosMascotas[index], index);
        containerProfile.innerHTML = perfil;
    // } 
    // else if (tipoMasc == 'gato' && index !== null) {
    //     const perfil = crearPerfil(mascotaGato, index);
    //     containerProfile.innerHTML = perfil;
    // } 
    // else {
    //     console.log('Índice no encontrado en la URL');
    // }
}

verPerfil();

function crearPerfil(mascota, index) {
	let perfil = `<div class="profile-header">
        <div >
            <img class="profile-img" src="${mascota.image}" alt="imagen mascota">
        </div>
        <div class="profile-header-data">
            <h1 class="profile-header-title">${mascota.name}</h1>
            <p><b>Ubicación:</b> ${mascota.ubication}</p>
        </div>
    </div>
    <div class="container-profile-description">
        <div class="profile-data">
            <div class="general-profile">
                <h6 class="profile-title"><b>Información general</b></h6>
                <p><b>Edad:</b> ${mascota.age}</p>
                <p><b>Sexo:</b> ${mascota.sex}</p>
                <p><b>Raza:</b> ${mascota.race}</p>
                <p><b>Tamaño:</b> ${mascota.size}</p>
            </div>
            <div class="health-profile">
                <h6 class="health-title"><b>Datos de salud</b></h6>
                <p><b>Desparacitación:</b> ${mascota.vaccine}</p>
                <p><b>Esterilización:</b> ${mascota.sterilizaiton}</p>
                <p><b>Estado de salud:</b> ${mascota.health_status}</p>
            </div>
            <div class="profile-icons">
                <span class="material-symbols-outlined">
                    share
                </span>
                <span class="material-symbols-outlined">
                    favorite
                </span>
            </div>
        </div>
        <div class="profile-description">
            <p>${mascota.descripiton}</p>
            <p><b>Organización:</b> ${mascota.organization}</p>
        </div>
        <ul class="adoption-require">
            <h6><b>Requisitos de adopción</b></h6>
            <li>Adoptante titular mayor de 21 años</li>
            <li>Residencia cercana al lugar de adopción</li>
            <li>Compromiso de castración a los 8 meses</li>
            <li>Compromiso de seguimiento de calendario de vacunas</li>
        </ul>
        <div class="buttons-groups">
            <a href="adoptar.html" value="${index}"><button type="button" href="adoptar.html" class="btn-profile"
                    title="Felicidades por este gran paso">Adoptar</button></a>
            <a href="apadrinar.html" value="${index}"><button type="button" class="btn-profile">Apadrinar</button></a>
            <a href="transitar.html" value="${index}"><button type="button" class="btn-profile">Transitar</button></a>
        </div>
    </div>`;

	return perfil;
}
