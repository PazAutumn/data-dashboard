/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);	

//enrollement
var check = document.getElementById('scl2017-2');
console.log(enrollement);
var enrollement = document.getElementById('enrolled');
	enrollement.textContent = data.SCL["2017-2"].students.length;

//dropout
