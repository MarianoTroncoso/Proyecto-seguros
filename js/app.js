// Constructor para Seguro
function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function(informacion){
    /*
        1 = americano   1.15
        2 = asiatico    1.05
        3 = europeo     1.35

        lo anterior sirve para multiplicar por la base
    */
    let cantidad;
    const base = 2000;

    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
    };
    
    // leer año para el calculo del precio
    const diferencia = new Date().getFullYear() - this.anio;
    // cada año hay que reducir 3% el valor del seguro
    cantidad -= ((diferencia*3)) * cantidad / 100;
    /*
        si el seguro es basico, se multiplica por 30% mas
        si el seguro es completo, 50% mas
    */
   if(this.tipo === 'basico'){
       cantidad *= 1.30;
    } else{
       cantidad *= 1.50;
    };

    return cantidad;
}

// Constructor relacionado todo la interfaz de usuario
function Interfaz(){} // inicializa vacio, lo cargamos con prototipos

// para la funcion de mostrarError() de la interfaz
// vamos a hacer un prototipo:
Interfaz.prototype.mostrarError = function(mensaje, tipo){
    const div = document.createElement('div');
    if(tipo === 'error'){
        // clase error anteriormente creada y con sus estilos
        div.classList.add('mensaje', 'error');
    } else {
        div.classList.add('mensaje', 'correcto');
    };
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(function(){
        document.querySelector('.mensaje').remove();
    }, 3000);
}

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

        // interfaz mostrando error
        interfaz.mostrarError('Faltan datos, revisar el formulario y prueba de nuevo','error' );

    } else {
        // lleno todo correctamente
        // hay que instanciar Seguro
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
        
        // cotizar seguro
        const cantidad = seguro.cotizarSeguro(seguro);

        

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