// Constructor para Seguro
function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}


// Constructor relacionado todo la interfaz de usuario
function Interfaz(){} // inicializa vacio, lo cargamos con prototipos


// Event Listeners
// NO van en clases, en las clases va todo lo que sea datos

const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e){
    e.preventDefault(); // para que no envie el formulario por el action
    
    // console.log('presionado')

    // leer marca seleccionada del select
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    // leer año seleccionado
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    // leer valor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    // Crear instancia de Interfaz (declaramos mas arriba)
    const interfaz = new Interfaz();
    
    // revisamos que los campos no esten vacios
    if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === ''){
        // console.log('faltan datos')

        // interfaz mostrando error
    } else {
        // lleno todo correctamente
        // hay que instanciar Seguro
        console.log('todo correcto')

    }
});



// nadie puede traer un auto de un año mayor al año acual 
const max = new Date().getFullYear(),
      // por politicas de la empresa podemos asegurar años de 
      // maximo 20 años
      min = max - 20;

const selectAnios = document.getElementById('anio');
for(let i = max; i > min; i--){
    let option = document.createElement('option');
    // atributo
    option.value = i;
    option.innerHTML = i; 
    selectAnios.appendChild(option)
}