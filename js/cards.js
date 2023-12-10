export async function recuperarData() {
    const response = await fetch('https://sofiae99.pythonanywhere.com/mascotas');
    try {

        if (response.ok) {
            const DATA = await response.json();
            return DATA;
        } else {
            console.error('Algo no funcionó')
        }
    } catch {
        console.error('Error en el servidor')
    }
}

export async function getMascotas() {
    const DATA = await recuperarData();
    let datosMascotas = DATA.pets;
    let listadoMascotas = '';
    let cardMascotas = document.querySelector('.cards-group');
    await datosMascotas.forEach((e) => {
            listadoMascotas += crearCards(e)
    });

    cardMascotas.innerHTML = listadoMascotas
}

export function crearCards(mascota) {
    let card =
        `<div class="card">
                <div class="card-principal">
                    <a href="perfil.html?id=${mascota.id}"><img class="card-img" src="${mascota.image}" alt="imagen mascota"></a>
                    <div class="name-box">
                    <h3 class="card-title"><b>${mascota.name}</b></h3>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-body-info">
                        <div class="profile-icons">
                                <span class="material-symbols-outlined">
                                    share
                                </span>
                                <span class="material-symbols-outlined">
                                    favorite
                                </span>
                        </div>
                        <div class="card-text-lg">
                            <p class="card-text edad"><b>Edad:</b> ${mascota.age} años</p>
                            <p class="card-text sexo"><b>Sexo:</b> ${mascota.sex}</p>
                            <p class="card-text ubicacion"><b>Ubicación:</b> ${mascota.ubication}</p>
                            <p class="card-text raza"><b>Raza:</b> ${mascota.race}</p>
                            <p class="card-text tamanio"><b>Tamaño:</b> ${mascota.size}</p>
                            <p class="card-text color"><b>Color:</b> ${mascota.color}</p>
                        </div>
                    </div>
                    <div class="card-button">
                    <a href="perfil.html?id=${mascota.id}" type="button" class="btnProfile">Ver más</a>
                        
                    </div>
                </div>      
            </div>`

    return card;
};

getMascotas();


