'use strict';
//Arreglos
// crear un array movies con un listado de 3 películas


function workWithMovies() {
  const arrMovie = [
    'Inception',
    'The butterfly effect',
    'Eternal sunshine of the spotless mind',
  ];

  /*Agregando peli*/
  arrMovie[3] = 'Blue velvet';

  /*eliminando pelicula*/

  arrMovie[0] = 'Split';
  console.log(arrMovie);

}

console.log(workWithMovies());






