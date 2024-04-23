export class Persona {
    nombre;
    apellido;
    #edad;
    #nodo;

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.#edad = edad;
    }

    saludar() {
        const mensaje = 'Hola, soy ' + this.nombre;
        alert(mensaje);
    }
    
    #gritar() {
        const mensaje = 'Hola, soy ' + this.apellido;
        alert(mensaje.toUpperCase());
    }

    render() {
        const parrafo = document.createElement('p');
        parrafo.textContent = this.nombre + ' ' + this.apellido + ' ' + this.#edad;
        this.#nodo = parrafo;

        parrafo.id = this.nombre + this.apellido;
        return parrafo;
    }

    addEventListeners() {
        this.#nodo.addEventListener('click', () => {
            alert(this.nombre + ' ' + this.apellido + ' ' + this.#edad);
        });
    }
}