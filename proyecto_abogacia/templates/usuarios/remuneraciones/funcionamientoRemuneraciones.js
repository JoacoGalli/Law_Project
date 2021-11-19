
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