'use strict';

/*crear un contador con los datos que comentamos en la introducción de esta sesión. Este contador deberá tener como propiedades un valor máximo, un valor mínimo, un valor actual y un valor inicial y como métodos deberá tener un aumentar, disminuir y restablece */

const contador = {}
    contador.max = 20;
    contador.min = 1;
    contador.inicial = parseInt(prompt("Ingrese un numero"));
        let option = parseInt(prompt("Desea que el numero 1.Aumente, 2.Disminuya?"));
        if (option === 1){
            for (let i = contador.inicial; i <- contador.max; i++){
                console.log("El valor inicial es "+contador.inicial," y el valor actual es ",i)
            }
        } else if (option === 2){
            for (let i = contador.inicial; i <- contador.min; i--){
                console.log("El valor inicial es "+contador.inicial," y el valor actual es ",i)
            }
        } console.log("Valor inicial: "+contador.inicial+" Valor maximo: "+contador.max+" Valor minimo: "+contador.min);