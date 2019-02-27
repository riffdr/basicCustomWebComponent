import Parent from './parent';

// Declaración de un custom element que hereda de HTMLElement
class XProduct extends HTMLElement {
  constructor() {
    // Siempre debe llamarse primero al constructor padre
    super();
    const padre = new Parent();

    // Se crea el shadow root
    var shadow = this.attachShadow({mode: 'open'});

     // Se crea un elemnto img y se asignan sus atributos.
    var span = document.createElement('span');
    span.innerText = `in your fucking cara ${padre.relation}`;

    // Añadir la imagen al shadow root.
    shadow.appendChild(span);
 

    // Crear un enlace al producto.
    var link = document.createElement('a');
    link.innerText = this.getAttribute('data-name');
    link.href = this.getAttribute('data-url');
    link.className = 'product-name';

    // Añadir el enlace al shadow root.
    shadow.appendChild(link);
  }
}

// Definir el nuevo elemento.
customElements.define('x-product', XProduct);