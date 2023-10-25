async function recuperarApi() {
    try {
        const response = await fetch('../data/org.json');

        if (response.ok) {

            const DATA = await response.json()
            console.log(DATA)
            return DATA.organizaciones;
        } else {
            console.error('Algo no funcionó');
        }
    } catch (error) {
        console.error('Error en el servidor', error);
    }
}

async function mostrarOrg() {
    const dataOrg = await recuperarApi();
    console.log(dataOrg);
    const memberOrg = document.querySelector('.container-organizacion');
    let listadoOrg = '';

    dataOrg.forEach((organizacion) => {
        listadoOrg += crearDivOrg(organizacion);
    });

    memberOrg.innerHTML = listadoOrg
}

function crearDivOrg(organizacion) {
    let divOrganizacion = `<div class="org-member"><img src="${organizacion.img}" alt="Logo de la organización">
                <div class="org-data">
                    <h3>${organizacion.nombre}</h3>
                    <h5>${organizacion.ubicacion}</h5>
                    <h5>${organizacion.telefono}</h5>
                    <a href="mailto:${organizacion.mail}">${organizacion.mail}</a>
                </div>
            </div>`;
    return divOrganizacion;
}

mostrarOrg();