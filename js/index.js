import { recuperarData, getMascotas, crearCards } from './cards.js';

let mascotasFilter = [];

async function selectUbicacion() {
    const DATA = await recuperarData();  
    // const tipoMasc = DATA.mascotas.gatos.concat(DATA.mascotas.perros); 
    const ubicacionesUnicas = new Set();

    // for (let i = 0; i < tipoMasc.length; i++) {
    //   const datosUbicacion = tipoMasc[i].ubicacion;
    //   ubicacionesUnicas.add(datosUbicacion); 
    // }
  
    const ubicacionesArray = Array.from(ubicacionesUnicas); 
  
    const ubicaciones = document.querySelector('#ubicaciones'); 
       
    for (let i = 0; i < ubicacionesArray.length; i++) {        
        const option = document.createElement("option");
        option.classList.add('optionUbic');
        
        option.value = ubicacionesArray[i];

        ubicaciones.appendChild(option); 
       
    }
    return ubicaciones;
}

selectUbicacion()

 
// async function filtrarMascotas() {
//     const DATA = await recuperarData();  

// //     const select = await selectUbicacion()
// // console.log(select)
//     const tipoMasc = DATA.mascotas.gatos.concat(DATA.mascotas.perros); 

//     const selectUbic = document.querySelector('#ubicaciones')    
//    console.log(selectUbic)
    
//         const optionUbic = selectUbic.value
//         console.log(optionUbic)
//         optionUbic.addEventListener('change', () => {           
//                 mascotasFilter = tipoMasc.filter(mascota => mascota.ubicacion === optionUbic)
//                 console.log(mascotasFilter)
//         })
//         console.log(mascotasFilter + '1')
//     }
//     filtrarMascotas()

function selectTypeMasc() {
        
        if(mascotasFilter > 0) {
            const btnEsp = document.querySelectorAll('.btnEsp')

            for (let i = 0; i < btnEsp.length; i++) {
                const tipoMasc = DATA.filter(mascota => mascota.tipo === btnEsp.values)
            console.log(tipoMasc)
                
            }
            
        }
    }
    selectTypeMasc()
   
    
    
//     const selectMasc = selectUbicacion()
// console.log(selectMasc)
    // if(selectMasc) {
    //     const mascotaSelec = await selectMasc.filter(mascota => mascota.ubicacion === ubicacion)
    //     console.log(mascotaSelec)
    // }


// async function filtrarMascotas(tipo) {
//     const DATA = await recuperarData();
//     const dataMascotas = DATA.mascotas;
//     console.log(dataMascotas)
//     const result = [];

//     const btnEsp = document.querySelectorAll('.btnEsp')

//     for (let i = 0; i < btnEsp.length; i++) {
//         const btnClick = btnEsp[i].addEventListener('click', (value) => {

//                     const mascotaFilter = dataMascotas[tipo][i];
        
//                     result.push(mascotaFilter);
//                     console.log(result)
        
//             });
            
//         };
        
//     } 
//     return result;
    // console.log(btnEsp)
    // perros.addEventListener('click', () => {
    //     for (let i = 0; i < dataMascotas.perros.length; i++) {
    //         const mascotaFilter = dataMascotas.perros[i];

    //         result.push(mascotaFilter);
    //         console.log(result)
    //     }
    

// filtrarMascotas()
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




