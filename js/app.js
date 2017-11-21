/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);	

//enrollement
var enrollement = document.getElementById('enrolled');
var generation = data.SCL["2017-2"].students;
	enrollement.textContent = generation.length;

//dropout
var dropout = document.getElementById('dropout');
var counter = 0;
for (var i = 0; i < generation.length; i++){	
	if(generation[i].active === false){
		counter = counter+1;
	}
};

/*formula para sacar el porcentaje de deserción
a=61
b=30

(b/a)*100*/

counter = parseInt((counter/generation.length)*100) + "%";
dropout.innerHTML = counter;

//Achievement
var achievement = document.getElementById('meetTarget');

/* formula para calcular el porcentaje de aprobación

[Puntaje Técnico] = ([Técnico S1] + [Técnico S2] + [Técnico S3]) / [Cantidad Sprints]

[Puntaje HSE] = ([HSE S1] + [HSE 2] + [HSE 3]) / [Cantidad Sprints]

tech=1800
70 tech=1260
hse=1200
70 hse=840
*/


//porcentaje de alumnas que alcanzan el target
	/*for (var i = 0; i < ratings.length; i++){
	 if(ratings[i].student.cumple >= 70){
	 	cumple = ratings[i].student.cumple;
	 }
}
*/
//NPS


//Tech Skills
var tech = document.getElementById('numTech');
var ratings = data.SCL["2017-2"].ratings;
//guardando en variables los datos de rating de las alumnas que cumplen con el 70%
var techSprint1 = ratings[0].student.cumple;
var techSprint2 = ratings[1].student.cumple;
//cambiando el porcentaje a numero
techSprint1 = parseInt((techSprint1*generation.length)/100);
techSprint2 = parseInt((techSprint2*generation.length)/100);
//sacando numero en promedio de estudiantes que superaron el 70% del tech en todos los sprints
var techAverage = parseInt((techSprint1+techSprint2)/2);
tech.innerHTML = techAverage;
//porcentaje del tech
var porTech = document.getElementById('porTech');

var techPercent = parseInt((techAverage*100)/generation.length) + "%";
porTech.innerHTML = techPercent;

//Life Skills

//STUDENT SATISFACTION

//TEACHER RATING

//JEDI MASTER RATING


