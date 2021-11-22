
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

//Fin del funcionamiento del menu por pestañas ("Datos para el haber - Mas datos para el haber, etc").






// Muestra los aportes de "tipos de aporte del formulario"
let btnCargarAportes = document.getElementById("btnCargarAportes");

btnCargarAportes.addEventListener('click', (e) => {
	e.preventDefault();

	let aportesSoloAutonomos = document.getElementById("aportesSoloAutonomos");
	let  aportesSoloRelacionDependencia = document.getElementById("aportesSoloRelacionDependencia");
	let  aportesSimultaneos = document.getElementById("aportesSimultaneos");
	let aportesCapitalizacion = document.getElementById("aportesCapitalizacion");

	let tiposDeAporte = document.getElementById("tiposDeAporte").value;

	
	
	if (tiposDeAporte=="relacionDeDependencia"){
			aportesSoloRelacionDependencia.style="display:block";
			aportesCapitalizacion.style="display:block;"
			aportesSoloAutonomos.style="display:none";
			aportesSimultaneos.style="display:none";
		}
	else if (tiposDeAporte=="autonomos") {
				aportesSoloAutonomos.style="display:block";
				aportesCapitalizacion.style="display:block;"
				aportesSoloRelacionDependencia.style="display:none";
				aportesSimultaneos.style="display:none";
	}
	else if (tiposDeAporte=="mixtos") {
		aportesSoloRelacionDependencia.style="display:block";
		aportesSoloAutonomos.style="display:block";
		aportesSimultaneos.style="display:block";
		aportesCapitalizacion.style="display:block;"
	}


});




// Fin de los aportes de "tipos de aporte del formulario"
			















//Esta es la funcionalidad del boton "+" en la pestaña de remuneraciones.
const botonSumarFechas = document.getElementById("botonSumarFechas");


botonSumarFechas.addEventListener('click', (e) =>{
	e.preventDefault();
	

	let fechaDesde = document.getElementById("fechaDesdeRemuneraciones").value;
	let fechaHasta = document.getElementById("fechaHastaRemuneraciones").value;
	let importeRemuneracion = document.getElementById("importeRemuneracion").value;
	let monedaRemuneracion = document.getElementById("monedaRemuneracion").value;
	let listaRemuneracion = document.getElementById("listaRemuneracion");


		if (fechaDesde=="" || fechaHasta=="" || importeRemuneracion==""){           //Crea una condicional para que se llenen todos los campos.
		alert("Por favor, rellena todos los campos");
		
		}
		else{
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
			let divCol9 = document.createElement("div");


			

			divCol1.classList.add("col");
			divCol2.classList.add("col");
			divCol3.classList.add("col");
			divCol4.classList.add("col");
			divCol5.classList.add("col");
			divCol6.classList.add("col");
			divCol7.classList.add("col");
			divCol8.classList.add("col");
			divCol9.classList.add("col");
			
			let p1 = document.createElement("P");
			let p2 = document.createElement("P");
			let p3 = document.createElement("P");
			let p4 = document.createElement("P");
			let p5 = document.createElement("P");
			let p6 = document.createElement("P");
			let p7 = document.createElement("P");
			let p8 = document.createElement("P");
			let p9 = document.createElement("P");

			let checkBox = document.createElement("INPUT");
			checkBox.setAttribute("type", "checkbox");


			p1.textContent=fechaDesde;
			p2.textContent=fechaHasta;
			p3.textContent=importeRemuneracion;
			p4.textContent=monedaRemuneracion;
			p5 = checkBox;
			p6.textContent="30"
			p7.textContent= "X"
			p8.textContent = "X"
			p9 = borrarFilaRem(); 



			listaRemuneracion.appendChild(divRow);


			divRow.appendChild(divCol1);
			divRow.appendChild(divCol2);
			divRow.appendChild(divCol3);
			divRow.appendChild(divCol4);
			divRow.appendChild(divCol5);
			divRow.appendChild(divCol6);
			divRow.appendChild(divCol7);
			divRow.appendChild(divCol8);
			divRow.appendChild(divCol9);

			divCol1.appendChild(p1)
			divCol2.appendChild(p2)
			divCol3.appendChild(p3)
			divCol4.appendChild(p4)
			divCol5.appendChild(p5)
			divCol6.appendChild(p6)
			divCol7.appendChild(p7)
			divCol8.appendChild(p8)
			divCol9.appendChild(p9)

			
					function borrarFilaRem() {           //Crea el boton borrar

						const botonBorrar = document.createElement("button");
						botonBorrar.innerHTML= `${"<i class='bx bxs-trash' ></i>" }`
						botonBorrar.className = "botonBorrar";                        

					botonBorrar.addEventListener('click', (e) => {
						e.preventDefault();
						
						if (window.confirm("¿Seguro que quieres eliminar la fila?")) {     //crea una ventana de confirmacion.
							const item = e.target.parentElement;                    //se asocia el boton a su elemento padre.
							divRow.removeChild(divCol1);
							divRow.removeChild(divCol2);
							divRow.removeChild(divCol3);
							divRow.removeChild(divCol4);
							divRow.removeChild(divCol5);
							divRow.removeChild(divCol6);
							divRow.removeChild(divCol7);
							divRow.removeChild(divCol8);
							divRow.removeChild(divCol9);	
						}		
						
					});
					return botonBorrar;                         //devuelve el boton listo para usar.
					}


		}
		
    });



	




	//Fin de la funcionalidad del boton "+" en la pestaña de remuneraciones.

