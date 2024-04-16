const botones_variables = document.querySelector('.botones_variables');
const crea_botones = document.querySelector('.crea_botones');

crea_botones.addEventListener('click', () => {
    const nuevo_boton = document.createElement('button');
    /*nuevo_boton.setAttribute('contentEditable', 'true');*/
    nuevo_boton.textContent = 'Boton';
    botones_variables.appendChild(nuevo_boton);

    const numBotones = botones_variables.querySelectorAll('button').length;
    botones_variables.style.gridTemplateRows = `repeat(${numBotones}, 50px)`;

    botones_variables.scrollTop = contenedor_notas.scrollHeight;
});