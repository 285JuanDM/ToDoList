const contenedor_notas = document.querySelector('.notas_contenedor');
const input_nota = document.querySelector('.input_nota');

input_nota.addEventListener('keypress', (event) =>{
    const nuevo_label = document.createElement('label');
    const nuevo_checkinput = document.createElement('input');
    const nuevo_span = document.createElement('span');

    if(event.key === 'Enter' && input_nota.value !== ''){
        nuevo_checkinput.type = 'checkbox';
        nuevo_span.textContent = input_nota.value;
        nuevo_label.appendChild(nuevo_checkinput);
        nuevo_label.appendChild(nuevo_span);
        contenedor_notas.appendChild(nuevo_label);
        input_nota.value = '';

        const numInputs = contenedor_notas.querySelectorAll('label').length;
        contenedor_notas.style.gridTemplateRows = `repeat(${numInputs}, 6.5vh)`;

        contenedor_notas.scrollTop = contenedor_notas.scrollHeight;
        
    }
})