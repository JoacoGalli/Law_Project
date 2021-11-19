
//Este es el funcionamiento del menu por pestañas ("Datos para el haber - Mas datos para el haber, etc").


const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

targets.forEach(target => {
	target.addEventListener('click', () => {
		content.forEach(c => {
			c.classList.remove('active')
		})
		const t = document.querySelector(target.dataset.target)
		t.classList.add('active')
		
	});
});

//Este es el funcionamiento del menu por pestañas ("Datos para el haber - Mas datos para el haber, etc").




const botonSumarFechas = document.getElementById("botonSumarFechas");


botonSumarFechas.addEventListener('click', (e) =>{
	e.preventDefault();
	

	let fechaDesde = document.getElementById("fechaDesdeRemuneraciones").value;
	let fechaHasta = document.getElementById("fechaHastaRemuneraciones").value;
	let importeRemuneracion = document.getElementById("importeRemuneracion").value;
	let monedaRemuneracion = document.getElementById("monedaRemuneracion").value;
	let listaRemuneracion = document.getElementById("listaRemuneracion");

	let divRow = document.createElement("div");
	divRow.classList.add("row");

	let divCol1 = document.createElement("div");
	let divCol2 = document.createElement("div");
	let divCol3 = document.createElement("div");
	let divCol4 = document.createElement("div");
	let divCol5 = document.createElement("div");
	let divCol6 = document.createElement("div");
	let divCol7 = document.createElement("div");
	let divCol8 = document.createElement("div");


	


	divCol1.classList.add("col");
	divCol2.classList.add("col");
	divCol3.classList.add("col");
	divCol4.classList.add("col");
	divCol5.classList.add("col");
	divCol6.classList.add("col");
	divCol7.classList.add("col");
	divCol8.classList.add("col");
	
	let p1 = document.createElement("P");
	let p2 = document.createElement("P");
	let p3 = document.createElement("P");
	let p4 = document.createElement("P");
	let p5 = document.createElement("P");
	let p6 = document.createElement("P");
	let p7 = document.createElement("P");
	let p8 = document.createElement("P");

	let checkBox = document.createElement("INPUT");
	checkBox.setAttribute("type", "checkbox");


	p1.textContent=fechaDesde;
	p2.textContent=fechaHasta;
	p3.textContent=importeRemuneracion;
	p4.textContent=monedaRemuneracion;
	p5 = checkBox;
	p6.textContent="30"
	p7.textContent= importeRemuneracion + 1000;
	p8.textContent = importeRemuneracion + 2000;



	listaRemuneracion.appendChild(divRow);


	divRow.appendChild(divCol1);
	divRow.appendChild(divCol2);
	divRow.appendChild(divCol3);
	divRow.appendChild(divCol4);
	divRow.appendChild(divCol5);
	divRow.appendChild(divCol6);
	divRow.appendChild(divCol7);
	divRow.appendChild(divCol8);

	divCol1.appendChild(p1)
	divCol2.appendChild(p2)
	divCol3.appendChild(p3)
	divCol4.appendChild(p4)
	divCol5.appendChild(p5)
	divCol6.appendChild(p6)
	divCol7.appendChild(p7)
	divCol8.appendChild(p8)

	

   
    });