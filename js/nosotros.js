
async function recuperarApi() {
    try {
        const response = await fetch('https://reqres.in/api/users?page=1')

        if (response.ok) {

            const DATA = await response.json()

            return DATA.data;
        } else {
            console.error('Algo no funcionó')
        }
    } catch {
        console.error('Error en el servidor')
    }
}

async function mostrarTeam() {
    const dataTeam = await recuperarApi();
    console.log(dataTeam)
    const teamMember = document.querySelector('.container-team');
    let listadoTeam = '';

    dataTeam.forEach((e) => {
        listadoTeam += crearDivTeam(e)
    })

    teamMember.innerHTML = listadoTeam;
}

mostrarTeam()

function crearDivTeam(person) {
    let team = '';
    team = `<div class="team-member"><img src="${person.avatar}" alt="Foto del Miembro 1">
                <div class="team-data">
                    <h4>${person.first_name} ${person.last_name}</h4>
                    <a href="mailto: ${person.email}">${person.email}</a>
                </div>
            </div>`;
    return team;
}