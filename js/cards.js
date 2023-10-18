export async function recuperarData() {
    const RESPONSE = await fetch('../data/data.json');
    const DATA = await RESPONSE.json();
    return DATA;
}

export async function getMascotas() {
    const DATA = await recuperarData();
    let datosMascotas = DATA.mascotas;
    let listadoMascotas = '';
    // let cardMascotas = document.querySelector('.cards-group');
    let cardMascotas = document.querySelector('.cards-group');
    

    await datosMascotas.gatos.forEach((e, index) => {
        listadoMascotas += crearCards(e, index, 'gato')
        
    });

    await datosMascotas.perros.forEach((e, index) => {
        listadoMascotas += crearCards(e, index, 'perro')
        
    });

    cardMascotas.innerHTML = listadoMascotas
    
    changePage()
}

export function crearCards(mascota, index, tipoMascota) {
    let card =
        `<div class="card">
                <div class="card-principal">
                    <a href="perfil.html?index=${index}&tipo=${tipoMascota}" data-index="${index}" onclick="verPerfil(${index})"><img class="card-img" src="${mascota.img}" alt="imagen mascota"></a>
                    <div class="name-box">
                    <h3 class="card-title"><b>${mascota.nombre}</b></h3>
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
                            <p class="card-text edad"><b>Edad:</b> ${mascota.edad} años</p>
                            <p class="card-text sexo"><b>Sexo:</b> ${mascota.sexo}</p>
                            <p class="card-text ubicacion"><b>Ubicación:</b> ${mascota.ubicacion}</p>
                            <p class="card-text raza"><b>Raza:</b> ${mascota.raza}</p>
                            <p class="card-text tamanio"><b>Tamaño:</b> ${mascota.tamaño}</p>
                            <p class="card-text color"><b>Color:</b> ${mascota.color}</p>
                        </div>
                    </div>
                    <div class="card-button">
                    <a href="perfil.html?index=${index}&tipo=${tipoMascota}" data-index="${index}" type="button" class="btnProfile">Ver más</a>
                        
                    </div>
                </div>      
            </div>`
    
            return card;
};

getMascotas();


