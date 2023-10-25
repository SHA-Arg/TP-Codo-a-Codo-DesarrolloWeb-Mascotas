import { recuperarData, getMascotas, crearCards } from './cards.js';

async function filtrarMascotas(tipo) {
    const DATA = await recuperarData();
    const dataMascotas = DATA.mascotas;
    console.log(dataMascotas)
    const result = [];

    const btnEsp = document.querySelectorAll('.btnEsp')

    for (let i = 0; i < btnEsp.length; i++) {
        const btnClick = btnEsp[i].addEventListener('click', (value) => {

                    const mascotaFilter = dataMascotas[tipo][i];
        
                    result.push(mascotaFilter);
                    console.log(result)
        
            });
            
        };
        
    } 
    return result;
    // console.log(btnEsp)
    // perros.addEventListener('click', () => {
    //     for (let i = 0; i < dataMascotas.perros.length; i++) {
    //         const mascotaFilter = dataMascotas.perros[i];

    //         result.push(mascotaFilter);
    //         console.log(result)
    //     }
    

filtrarMascotas()
// async function filtrarSexMascota(perros, sexo) {
//     const tipoMascota = await filtrarMascotas(perros)
//     console.log(tipoMascota)
//     const sexoFem = document.querySelector('.hembra')
//     sexoFem.addEventListener('click', () => {
//         const sexoMascota = tipoMascota.filter(mascota => mascota.sexo === sexo)
//         console.log(sexoMascota)
//         return sexoMascota;
//     })
// }

// function mostrarMascotaFiltrada() {
//     const results = document.querySelector('.results')
//     results.addEventListener('click', () => {
//         const cardFiltrada = crearCards(filtrarSexMascota(perros, sexo));
//     })
    
// }

// mostrarMascotaFiltrada();




