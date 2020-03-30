// cotizador


// nadie puede traer un auto de un año mayor al año acual 
const max = new Date().getFullYear(),
      // por politicas de la empresa podemos asegurar años de 
      // maximo 20 años
      min = max - 20;

console.log(max);
console.log(min)

const selectAnios = document.getElementById('anio');
for(let i = max; i > min; i--){
    let option = document.createElement('option');
    // atributo
    option.value = i;
    option.innerHTML = i; 
    selectAnios.appendChild(option)
}