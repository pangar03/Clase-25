import { Persona } from './utils.js';

const render = () => {
    const personas = [
        {
            nombre: 'Juan',
            apellido: 'Pérez',
            edad: 30
        },
        {
            nombre: 'María',
            apellido: 'González',
            edad: 25
        }
    ];

    const body = document.querySelector('body');

    for (const persona of personas) {
        const personaInstance = new Persona(persona.nombre, persona.apellido, persona.edad);    
        const nodoPersona = personaInstance.render();

        body.appendChild(nodoPersona);
        
        personaInstance.addEventListeners();
    }
};

document.addEventListener('DOMContentLoaded', render);