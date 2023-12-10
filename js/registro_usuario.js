// * CONSTANTES PARA LOS MOVIMIENTOS DE PAGINAS
const movPag = document.querySelector(".mov-pag");
const btn_adelelante2 = document.querySelector(".adelante-pag2");

const btn_atras1 = document.querySelector(".volver-pag1");
const btn_adelelante3 = document.querySelector(".adelante-pag3");

const btn_atras2 = document.querySelector(".volver-pag2");
const btn_final = document.querySelector(".fin");

// * CONSTANTES PARA LA BARRA DE PROGRESO
const progressText = document.querySelectorAll(".paso p");
const progressCheck = document.querySelectorAll(".paso .check");
const num = document.querySelectorAll(".paso .num");

let max = 3;
let cont = 1;

// * MOVIMIENTOS DE PAGINAS

//* BOTONES DE ADELANTE
btn_adelelante2.addEventListener("click", function (e) {
	e.preventDefault();
	movPag.style.marginLeft = "-38%";
	// *  MOVIMIENTO DE LA BARRA DE PROGRESO
	num[cont - 1].classList.add("active");
	progressCheck[cont - 1].classList.add("active");
	progressText[cont - 1].classList.add("active");
	cont += 1;
});

btn_adelelante3.addEventListener("click", function (e) {
	e.preventDefault();
	// * VALIDACIONES
	var nombre = document.getElementById("nombre").value;
	var direccion = document.getElementById("direccion").value;
	var email = document.getElementById("email").value;
	var telefono = document.getElementById("telefono").value;
	//* NOMBRE
	if (nombre == "") {
		//* Alerta en el HTML
		document.getElementById("nombre-error").innerHTML =
			"*El campo nombre no puede estar vacio!";
		document.getElementById("nombre").style.border = "1px solid red";
		//* SweetAlert
		// Swal.fire("El campo no puede estar vacio!");
	} else {
		// * Saca el error del HTML
		document.getElementById("nombre-error").innerHTML = "";
		document.getElementById("nombre").style.border = "1px solid lightgrey";
		movPag.style.marginLeft = "-71%";
		// *  MOVIMIENTO DE LA BARRA DE PROGRESO
		num[cont - 1].classList.add("active");
		progressCheck[cont - 1].classList.add("active");
		progressText[cont - 1].classList.add("active");
		cont += 1;
	}
	//* DIRECCION
	if (direccion == "") {
		//* Alerta en el HTML
		document.getElementById("direccion-error").innerHTML =
			"*El campo direccion no puede estar vacio!";
		document.getElementById("direccion").style.border = "1px solid red";
		//* SweetAlert
		// Swal.fire("El campo no puede estar vacio!");
	} else {
		// * Saca el error del HTML
		document.getElementById("direccion-error").innerHTML = "";
		document.getElementById("direccion").style.border = "1px solid lightgrey";
		movPag.style.marginLeft = "-71%";
		// *  MOVIMIENTO DE LA BARRA DE PROGRESO
		num[cont - 1].classList.add("active");
		progressCheck[cont - 1].classList.add("active");
		progressText[cont - 1].classList.add("active");
		cont += 1;
	}
	//* EMAIL
	if (email == "") {
		//* Alerta en el HTML
		document.getElementById("email-error").innerHTML =
			"*El campo direccion no puede estar vacio!";
		document.getElementById("email").style.border = "1px solid red";
		//* SweetAlert
		// Swal.fire("El campo no puede estar vacio!");
	} else {
		// * Saca el error del HTML
		document.getElementById("email-error").innerHTML = "";
		document.getElementById("email").style.border = "1px solid lightgrey";
		movPag.style.marginLeft = "-71%";
		// *  MOVIMIENTO DE LA BARRA DE PROGRESO
		num[cont - 1].classList.add("active");
		progressCheck[cont - 1].classList.add("active");
		progressText[cont - 1].classList.add("active");
		cont += 1;
	}
	//* TELEFONO
	if (telefono == "") {
		//* Alerta en el HTML
		document.getElementById("telefono-error").innerHTML =
			"*El campo direccion no puede estar vacio!";
		document.getElementById("telefono").style.border = "1px solid red";
		//* SweetAlert
		// Swal.fire("El campo no puede estar vacio!");
	} else {
		// * Saca el error del HTML
		document.getElementById("telefono-error").innerHTML = "";
		document.getElementById("telefono").style.border = "1px solid lightgrey";
		movPag.style.marginLeft = "-71%";
		// *  MOVIMIENTO DE LA BARRA DE PROGRESO
		num[cont - 1].classList.add("active");
		progressCheck[cont - 1].classList.add("active");
		progressText[cont - 1].classList.add("active");
		cont += 1;
	}
});

btn_final.addEventListener("click", function (e) {
	e.preventDefault();
	// * VALIDACIONES
	var nombre = document.getElementById("nombreCuenta").value;
	var contraseña = document.getElementById("password").value;
	var contraseña2 = document.getElementById("password2").value;

	//* NOMBRE
	if (nombre == "") {
		//* Alerta en el HTML
		document.getElementById("nombreCuenta-error").innerHTML =
			"*El campo nombre no puede estar vacio!";
		document.getElementById("nombreCuenta").style.border = "1px solid red";

		//* SweetAlert
		// Swal.fire("El campo no puede estar vacio!");
	} else if (contraseña == "") {
		document.getElementById("password-error").innerHTML =
			"*El campo nombre no puede estar vacio!";
		document.getElementById("password").style.border = "1px solid red";
	} else if (contraseña == contraseña2) {
		// * SweetAlert
		Swal.fire("Bienvenido!", "Acceso correcto!", "success");
	} else if (contraseña != contraseña2) {
		// * SweetAlert
		Swal.fire("Las contraseñas no coinciden!");
	} else {
		// * Saca el error del HTML
		document.getElementById("nombreCuenta-error").innerHTML = "";
		document.getElementById("nombreCuenta").style.border =
			"1px solid lightgrey";
		movPag.style.marginLeft = "-71%";
		// *  MOVIMIENTO DE LA BARRA DE PROGRESO
		num[cont - 1].classList.add("active");
		progressCheck[cont - 1].classList.add("active");
		progressText[cont - 1].classList.add("active");
		cont += 1;
	}
});

//* BOTONES DE VOLVER
btn_atras1.addEventListener("click", function (e) {
	e.preventDefault();
	movPag.style.marginLeft = "0%";
	// *  MOVIMIENTO DE LA BARRA DE PROGRESO
	num[cont - 1].classList.remove("active");
	progressCheck[cont - 1].classList.remove("active");
	progressText[cont - 1].classList.remove("active");
	cont -= 1;
});

btn_atras2.addEventListener("click", function (e) {
	e.preventDefault();
	movPag.style.marginLeft = "-38%";
	// *  MOVIMIENTO DE LA BARRA DE PROGRESO
	num[cont - 1].classList.remove("active");
	progressCheck[cont - 1].classList.remove("active");
	progressText[cont - 1].classList.remove("active");
	cont -= 1;
});
