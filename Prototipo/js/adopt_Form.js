// Opcion 1

document
	.getElementById("adoptionForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		document.getElementById("adoptionForm").style.display = "none";
		document.getElementById("confirmation").style.display = "block";
	});

// Opcion 2

document
	.getElementById("adoptionForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		const formData = new FormData(event.target);

		for (const [name, value] of formData) {
			console.log(`${name}: ${value}`);
		}
	});
