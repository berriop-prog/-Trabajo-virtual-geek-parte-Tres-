'use strict';

/*preparar un input de tipo texto, a recogerlo desde JavaScript y a imprimirlo en la consola con console.dir*/

const button = document.querySelector('.clicked');
const input = document.querySelector('#input'); 
button.addEventListener('click',(e)=>{   
    console.dir(input);   
    console.dir(input.value);      
});