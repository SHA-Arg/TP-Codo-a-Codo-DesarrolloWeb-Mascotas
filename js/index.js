import { recuperarData, getMascotas, crearCards } from './cards.js'; 

async function filtrarMascotas(tipo) {
    const DATA = await recuperarData();
    const dataMascotas = DATA.mascotas;
    const result = [];

    for (let i = 0; i < dataMascotas[tipo].length; i++) {
        const mascotaFilter = dataMascotas[tipo][i];

        result.push(mascotaFilter);
    }

   return result;
}

async function filtrarSexMascota(tipo, sexo) {
    const tipoMascota = await filtrarMascotas(tipo)
    console.log(tipoMascota)
    const sexoMascota = tipoMascota.filter(mascota => mascota.sexo === sexo)
console.log(sexoMascota)
    return sexoMascota;
}

filtrarSexMascota('gatos', 'hembra');

const btnPerro = document.querySelector('.btn')


