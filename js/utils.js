// Esta línea define una función llamada postData usando la sintaxis de la función de flecha. Es una función asincrónica (async) que toma tres parámetros: URL, datos y una solicitud de parámetro opcional con un valor predeterminado de 'POST'.
const postData = async (url, data, request = "POST") => {
	// Esta línea registra el parámetro de datos en la consola.
	console.log(data);

	// Esta línea crea un nuevo objeto Headers, que se utilizará para almacenar y manipular los encabezados de la solicitud HTTP.
	let myHeaders = new Headers();

	// Esta línea agrega un encabezado al objeto myHeaders. Específicamente, establece el encabezado "Content-Type" en "application/json", lo que indica que el contenido del cuerpo de la solicitud estará en formato JSON.
	myHeaders.append("Content-Type", "application/json");

	// Esta línea convierte el parámetro de datos (presumiblemente un objeto) en una cadena con formato JSON usando JSON.stringify y lo asigna a la variable sin formato. Esta cadena será el cuerpo de la solicitud HTTP.
	const raw = JSON.stringify(data);

	// Este bloque crea un objeto llamado requestOptions que contiene varias configuraciones para la solicitud HTTP. Especifica el método HTTP (método), los encabezados (headers), el cuerpo de la solicitud (body) y el comportamiento de redireccionamiento (redirect).
	const requestOptions = {
		method: request,
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};

	//Esta línea realiza una solicitud HTTP asincrónica utilizando la función de recuperación. Envía la solicitud a la URL especificada con las opciones definidas en requestOptions. La palabra clave await se utiliza para esperar a que se complete la operación de recuperación y la función devuelve el resultado.
	return await fetch(url, requestOptions);
};

// Esta línea exporta la función postData, haciéndola disponible para su uso en otras partes del código base.
export { postData };
