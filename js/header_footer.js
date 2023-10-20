document.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector(".header");
	const footer = document.querySelector(".pie");

	header.innerHTML = createHeader();
	footer.innerHTML = createFooter();
});

function createHeader() {
	let headerCode = "";

	headerCode = `<a href="/index.html"><img
				href="/index.html"
				class="logo"
				src="../img/logo_2.png"
				style="width: 60px; height: 60px"
				alt="Logo Patitas Felices"/img></a>

			<input type="checkbox" id="check" />
			
			<label for="check" class="menu">
				<a href="/pages/login.html" style="--i: 4"><i id="menu_log" class="bx bxs-user"></i></a></i>
				<i class="bx bx-menu" id="menu-icon"></i>
				<i class="bx bx-x" id="close-icon"></i>
			</label>

			<nav class="navbar">
				<a href="/pages/cards.html" style="--i: 0">Mascotas</a>
				<a href="/pages/nosotros.html" style="--i: 1">Nosotros</a>
				<a href="/pages/apadrinar.html" style="--i: 2">Organizaciones</a>
				<a href="/pages/contacto.html" style="--i: 3">Contacto</a>	
				<a href="/pages/login.html" style="--i: 4"><i id="icon_log" class="bx bxs-user"></i></a></i>			
			</nav>`;

	return headerCode;
}

function createFooter() {
	let footerCode = "";

	footerCode = `<div class="contenerdorPie">
	<div class="list">
		<a href="" class="item-Txt">Soy una organización.</a>
		<a href="" class="item-Txt">Trabaja con nosotros!</a>
		<a href="" class="item-Txt">Términos y condiciones.</a>
	</div>

	<div class="redesSociales">
		<a href="" class="social-link"><i class="bx bxl-instagram"></i></a>
		<a href="" class="social-link"><i class="bx bxl-twitter"></i></a>
		<a href="" class="social-link"><i class="bx bxl-whatsapp"></i></a>
		<a href="" class="social-link"><i class="bx bxl-facebook"></i></a>
	</div>

	<div class="contacto">
		<h3 class="contact_foot">Contactanos!</h3>
		<form action="" class="formContacto"
			><input
				class="inputContact"
				type="text"
				placeholder="Ingresa tu Mail!" />
			<button class="enviar" type="submit"
				><i class="bx bx-send" id="enviar"></i></button
		></form>
	</div>
</div>
<div class="copyright">&copy;Patitas Felices 2023. Todos los derechos reservados</div>`;

	return footerCode;
}
