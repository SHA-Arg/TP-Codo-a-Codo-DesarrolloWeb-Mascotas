export async function recuperarData() {
	const response = await fetch("https://sofiae99.pythonanywhere.com/mascotas");
	try {
		if (response.ok) {
			const DATA = await response.json();
			return DATA;
		} else {
			console.error("Algo no funcionó");
		}
	} catch {
		console.error("Error en el servidor");
	}
}
export async function getMascotas() {
	const DATA = await recuperarData();
	let datosMascotas = DATA.pet;
	let listadoMascotas = "";
	let dashMascotas = document.querySelector(".container-dashboard");
	await datosMascotas.forEach((e) => {
		listadoMascotas += Mascotas(e);
	});
	dashMascotas.innerHTML = listadoMascotas;
}

export function Mascotas(mascota) {
	let dash = `<div class="pet-image">
                 <a href="perfil.html?id=${mascota.id}"><img class="dash-img" src="${mascota.image}" alt="imagen mascota"></a>
                 <h3 class="dash-name"><b>${mascota.name}</b></h3>
             </div>
             <div class="pet-info">
                 <div class="pet-info-basic">
                     <p class="dash-type"><b>Tipo:</b>${mascota.pet_type}</p>
                     <p class="dash-sex"><b>Sexo:</b> ${mascota.sex}</p>
                     <p class="dash-age"><b>Edad:</b>${mascota.age}</p>
                     <p class="dash-race"><b>Raza:</b> ${mascota.race}</p>
                     <p class="dash-body-size"><b>Tamaño:</b>${mascota.size}</p>
                     <p class="dash-health"><b>Estado de salud:</b> ${mascota.health_status}</p>
                 </div>
                 <div class="pet-info-aditional">
                     <p class="dash-body-description" onclick="expandirParrafo(this)"><b>Descripción:</b>
                         Aliquid eos laborum dicta laudantium mollitia consequatur perferendis sequi nam! Repellendus
                         recusandae commodi totam enim autem voluptatum ea ut sit, atque voluptate distinctio hic
                         explicabo
                         facere accusamus earum architecto et?
                         Placeat deleniti sit molestiae sint odio quia corrupti nostrum aut inventore, quasi provident
                         vel
                         repudiandae a eum aliquam fugiat, et cum recusandae mollitia vitae quod atque non similique
                         laudantium. Aspernatur.
                         Fuga ut et in a earum quidem, nesciunt dicta at fugiat, magnam veritatis minus exercitationem
                         quo
                         voluptates, non sunt praesentium repellendus quam minima maxime aliquid tempora eum quod? Nam,
                         exercitationem.
                         Expedita ad itaque, esse exercitationem autem velit ea provident. Quam blanditiis dolore atque,
                         ducimus eius iste necessitatibus dolor, consectetur, ratione sapiente unde illo sint deleniti.
                         Libero impedit quasi minima nesciunt.</p>
                     <p class="dash-body-vaccine"><b>Desparasitación:</b>sí</p>
                     <p class="dahs-body-sterilization"><b>Esterilización:</b> Sí</p>
                     <p class="dash-body-adress"><b>Ubicación:</b> CABA</p>
                 </div>
             </div>
             // ? Porque hay dos buttons de editar y eliminar?
             <div class="dash-buttons2">
                 <button class="dashboard-btn" id="btn-edit"> <a href="./editar_publicacion.html">Editar</a></button>
                 <button class="dashboard-btn" id="btn-delete">Eliminar</button>
             </div>
             <div class="dash-buttons">
                 <button class="dashboard-btn" id="btn-edit"><a href="./editar_publicacion.html">Editar</a></button>
                 <button class="dashboard-btn" id="btn-delete">Eliminar</button>
             </div>
              <div class="card-button">
                     <a href="perfil.html?id=${mascota.id}" type="button" class="btnProfile">Ver más</a>
                     </div>`;
	return dash;
}
getMascotas();
