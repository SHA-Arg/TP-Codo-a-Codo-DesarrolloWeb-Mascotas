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
   
    
