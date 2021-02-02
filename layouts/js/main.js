const tarjeta = document.querySelector ('#tarjeta'),
      btnAbrirFormulario = document.querySelector ('#btn-abrir-formulario'),
      formulario= document.querySelector('#formulario-tarjeta'),
      numeroTarjeta = document.querySelector ('#tarjeta .numero'),
      nombreTarjeta = document.querySelector ('#tarjeta .nombre'),
      logoMarca = document.querySelector ('#logo-marca'),
      firma = document.querySelector ('#tarjeta .firma p'),
      mesExpiracion = document.querySelector ('#tarjeta #expiracion .mes'),
      yearExpiracion = document.querySelector ('#tarjeta #expiracion .year'),
      ccv = document.querySelector ('#tarjeta #ccv .ccv');
//* Volteamos la tarjeta para mostrar el frente
const mostrarFrente = () => {
  if (tarjeta.classList.contains('active')) {
    tarjeta.classList.remove('active');
  }
}
//* Rotacion de la tarjeta*//
tarjeta.addEventListener ('click',() => {
  tarjeta.classList.toggle('active');

});
//*Boton de abrir formulario*//
btnAbrirFormulario.addEventListener('click',()=> {
  btnAbrirFormulario.classList.toggle('active'),
  formulario.classList.toggle('active');

});
//*Rellenar select del mes*//
 for(let i = 1 ; i <= 12 ; i ++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);

}

//*Rellenar select del año*//
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectYear.appendChild(opcion);

}

//* Input nro de tarjeta *//
formulario.inputNumero.addEventListener ('keyup', (e) => {
  let valorInput = e.target.value;

  formulario.inputNumero.value = valorInput
  //*Eliminamos espacios en blanco*//
  .replace(/\s/g, '')
  //*Eliminamos letrass*//
  .replace(/\D/g, '')
  //*Espacios cada 4 *//
  .replace(/([0-9]{4})/g, '$1 ')
  //*Eliminamos el ultimo espaciado*//
  .trim();

   numeroTarjeta.textContent = valorInput;

 if (valorInput == '') {
   numeroTarjeta.textContent = '#### #### #### ####';
   logoMarca.innerHTML = '';

 }
 if (valorInput[0] == 4) {
   logoMarca.innerHTML = '';
   const imagen = document.createElement ('img');
   imagen.src = 'imagenes/visa.png';
   logoMarca.appendChild(imagen);
}
else if (valorInput[0] == 5) {
     logoMarca.innerHTML = '';
     const imagen = document.createElement ('img');
     imagen.src = 'imagenes/mastercard.png';
     logoMarca.appendChild(imagen);
  }
//* Volteamos la tarjetas
mostrarFrente();

});
//* Input nombre de la tarjetas
formulario.inputNombre.addEventListener('keyup',(e) => {
  let valorInput = e.target.value;

  formulario.inputNombre.value = valorInput.replace (/[0-9]/g, '');
  nombreTarjeta.textContent = valorInput;
  firma.textContent = valorInput;
  if (valorInput == '') {
   nombreTarjeta.textContent = 'John Doe';
  }

mostrarFrente ();

})
//* Select mes
formulario.selectMes.addEventListener ('change', (e) => {
  mesExpiracion.textContent = e.target.value;
  mostrarFrente ();
})

//* Select año
formulario.selectYear.addEventListener ('change', (e) => {
  yearExpiracion.textContent = e.target.value.slice(2);
  mostrarFrente ();
})
// ccv
formulario.inputCcv.addEventListener ('keyup', () => {
  if (!tarjeta.classList.contains ('active')) {
    tarjeta.classList.toggle('active');
  }
  formulario.inputCcv.value = formulario.inputCcv.value
  //*Eliminamos espacios en blanco*//
  .replace(/\s/g, '')
  //*Eliminamos letrass*//
  .replace(/\D/g, '');

  ccv.textContent = formulario.inputCcv.value;
})
