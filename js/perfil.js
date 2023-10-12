import { recuperarData } from './cards.js';

async function verPerfil() {
    const params = new URLSearchParams(window.location.search);
    const index = params.get('index');

    const DATA = await recuperarData();
    const datosMascotas = DATA.mascotas;
    const mascotaPerro = datosMascotas.perros[index];
    const mascotaGato = datosMascotas.gatos[index];
   
    const containerProfile = document.querySelector('.x');

    if (mascotaPerro || index !== null) {
        const perfil = crearPerfil(mascotaPerro, index);
        containerProfile.innerHTML = perfil;
    } else if (mascotaGato || index !== null) {
        const perfil = crearPerfil(mascotaGato, index);
        containerProfile.innerHTML = perfil;
    } else {
        console.log('Índice no encontrado en la URL');
    }
}

verPerfil()

function crearPerfil(mascota, index) {
    let perfil =
        `<div class="profile-header">
        <div class="profile-img">
            <img src="${mascota.img}" alt="imagen mascota">
        </div>
        <div class="profile-header-data">
            <h2 class="profile-header-title">${mascota.nombre}</h2>
            <p><b>Ubicación:</b> ${mascota.ubicacion}</p>
        </div>
    </div>
    <div class="container-profile-description">
        <div class="profile-data">
            <div class="general-profile">
                <h6 class="profile-title"><b>Información general</b></h6>
                <p><b>Edad:</b> ${mascota.edad}</p>
                <p><b>Sexo:</b> ${mascota.sexo}</p>
                <p><b>Raza:</b> ${mascota.raza}</p>
                <p><b>Tamaño:</b> ${mascota.tamaño}</p>
            </div>
            <div class="health-profile">
                <h6 class="health-title"><b>Datos de salud</b></h6>
                <p><b>Desparacitación:</b> ${mascota.vacunas}</p>
                <p><b>Esterilización:</b> ${mascota.esterilizacion}</p>
                <p><b>Estado de salud:</b> ${mascota.estado_de_salud}</p>
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
            <p>${mascota.descripcion}</p>
            <p><b>Organización:</b> ${mascota.organizacion}</p>
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
    </div>`

    return perfil;
}


