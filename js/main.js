async function recuperarData() {
    const RESPONSE = await fetch('../data/data.json');
    const DATA = await RESPONSE.json();
    return DATA;
}

async function getMascotas() {
    const DATA = await recuperarData();
    var datosMascotas = DATA.mascotas.gatos;
    var listadoMascotas = '';
    var cardMascotas = document.querySelector('.cards-group');

    await datosMascotas.forEach((e, index) => {

        listadoMascotas = listadoMascotas +
            `<div class="card col-sm-5">
                <div class="card-principal">
                    <a href="perfil.html"><img class="card-img" src="${e.img}" alt="imagen mascota"></a>
                    <div class="name-box">
                    <h3 class="card-title">${e.nombre}</h3>
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
                            <p class="card-text edad"><b>Edad:</b> ${e.edad} años</p>
                            <p class="card-text sexo"><b>Sexo:</b> ${e.sexo}</p>
                            <p class="card-text ubicacion"><b>Ubicación:</b> CABA, Argentina</p>
                            <p class="card-text raza"><b>Raza:</b> ${e.raza}</p>
                            <p class="card-text tamanio"><b>Tamaño:</b> ${e.tamaño}</p>
                            <p class="card-text color"><b>Color:</b> ${e.color}</p>
                        </div>
                    </div>
                    <div class="card-button">
                        <a href="perfil.html"><button value="${index}" type="button" class="btn">Ver más</button></a>
                    </div>
                </div>
                
            </div>`
    });
    cardMascotas.innerHTML = listadoMascotas;
}

getMascotas()

var perfilMascota = '';
var profile = document.querySelector('.container-profile');
var btnMore = document.querySelector('.btn');

// perfilMascota = perfilMascota +
//     `                <div class="profile-data">
//     <div class="profile-img col-sm-6 col-md-8">
//         <img src="${e.img}" alt="imagen mascota">
//     </div>
//     <div class="profile-content">
//         <div class="profile-details col-sm-6 col-md-4 ">
//             <h2>${e.nombre}</h2>
//             <p><b>Edad:</b> ${e.edad}</p>
//             <p><b>Color:</b> ${e.color}</p>
//             <p><b>Raza:</b> ${e.raza}</p>
//             <p><b>Vacunas:</b> ${e.vacunas}</p>
//             <p><b>Esterilización:</b> ${e.esterilizacion}</p>
//             <p><b>Estado de salud:</b> ${e.estado_de_salud}</p>
//         </div>
//         <div class="profile-icons">
//             <span class="material-symbols-outlined">
//                 share
//             </span>
//             <span class="material-symbols-outlined">
//                 favorite
//             </span>
//         </div>
//     </div>
// </div>
// <div class="profile-text-detail">
//     <h6>Descripción</h6>
//     <p>${e.descripcion}</p>
// </div>
// </div>
// <div class="container-buttons">
// <div class="col buttons-groups">
//     <a href="adoptar.html" value=${index}><button type="button" href="adoptar.html" class="btn"
//             title="Felicidades por este gran paso">Adoptar</button></a>
//     <a href="apadrinar.html" value=${index}><button type="button" class="btn">Apadrinar</button></a>
//     <a href="transitar.html" value=${index}><button type="button" class="btn">Transitar</button></a>
// </div>
// </div>`

