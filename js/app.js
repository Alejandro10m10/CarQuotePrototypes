
// Constructores

function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

function UI(){}

// Llenar las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20,
          selectYear = document.querySelector('#year');
    
    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = option;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// Instanciar UI
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    eventListeners();
    ui.llenarOpciones(); // Llena el select con los años
});


function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    // Leer el año seleccionado
    const year = document.querySelector('#year').value;
    // Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    if( marca === '' || year === '' || tipo === ''){
        console.log('No validado');
    } else {
        console.log('Todo bien');
    }
}