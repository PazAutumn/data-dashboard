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
var ratings = data.SCL["2017-2"].ratings;
//guardando en variables los datos de rating de las alumnas que cumplen con el 70%
var Sprint1 = ratings[0].student.cumple;
var Sprint2 = ratings[1].student.cumple;
//cambiando el porcentaje a numero
Sprint1 = parseInt((Sprint1*generation.length)/100);
Sprint2 = parseInt((Sprint2*generation.length)/100);
//sacando numero en promedio de estudiantes que superaron el 70% del tech en todos los sprints
var Average = parseInt((Sprint1+Sprint2)/2);
achievement.innerHTML = Average;
//porcentaje del tech
var porAverage = document.getElementById('totalMeetTarget');

var averagePercent = parseInt((Average*100)/generation.length) + "%";
porAverage.innerHTML = averagePercent;

	/*for (var i = 0; i < ratings.length; i++){
	 if(ratings[i].student.cumple >= 70){
	 	cumple = ratings[i].student.cumple;
	 }
}
*/
//NPS
var nps = document.getElementById('nps');

//detalle de nps
var promo = document.getElementById('promoters');
var pass = document.getElementById('passive');
var detrac = document.getElementById('detractors');

var promoters = parseInt((ratings[0].nps.promoters + ratings[1].nps.promoters)/2) +"% Promoters";
promo.innerHTML = promoters;

var passive = parseInt((ratings[0].nps.passive + ratings[1].nps.passive)/2) +"% Passive";
pass.innerHTML = passive;

var detractors = parseInt((ratings[0].nps.detractors + ratings[1].nps.detractors)/2) +"% Detractors";
detrac.innerHTML = detractors;

//porcentaje de nps
var npsPercent = (parseInt(promoters) - parseInt(detractors)) + "%";
nps.innerHTML = npsPercent;

//Tech Skills
var tech = document.getElementById('numTech');
var porTech = document.getElementById('porTech');
/* formula para calcular el porcentaje de aprobación

[Puntaje Técnico] = ([Técnico S1] + [Técnico S2] + [Técnico S3]) / [Cantidad Sprints]

[Puntaje HSE] = ([HSE S1] + [HSE 2] + [HSE 3]) / [Cantidad Sprints]

tech=1800
70 tech=1260
hse=1200
70 hse=840
*/

for (var i =0; i < generation.length; i++){

	if(generation[i].sprints.length > 0){

	totaltechstudent = 0;
	//totalhsestudent = 0;
	totaltechstudentpor=0;
	//totalhsestudentpor=0;
	totaltech = 0;

	//Calculando el total de porcentajes en puntajes tech y hse
		for (j = 0; j < generation[i].sprints.length; j++){
  			totaltechstudent= generation[i].sprints[j].score.tech;
            totaltechstudentpor += (totaltechstudent*100)/1800;
            
            if(totaltechstudent >= 1260){
            	totaltech = totaltech+1;
            }
            tech.innerHTML = totaltech;

	        //totalhsestudent = generation[i].sprints[j].score.hse;
            //totalhsestudentpor += (totalhsestudent*100)/1200;
            
        }

            totaltechstudentpor = parseInt((totaltechstudentpor / 4));
            porTech.innerHTML = totaltechstudentpor;
            //totalhsestudentpor =   (totalhsestudentpor / 4);
            //var totaltech;
            //if (totaltechstudentpor >= 70 &&  totalhsestudentpor >= 70){
            //    totaltech++;
            //}
          
	}
}
//Life Skills
var hse = document.getElementById('hse');
var porhse = document.getElementById('hsePor');
for (var i =0; i < generation.length; i++){

	if(generation[i].sprints.length > 0){

	//totaltechstudent = 0;
	totalhsestudent = 0;
	//totaltechstudentpor=0;
	totalhsestudentpor=0;
	totalhse = 0;
	

	//Calculando el total de porcentajes en puntajes tech y hse
		for (j = 0; j < generation[i].sprints.length; j++){
  	/*		totaltechstudent= generation[i].sprints[j].score.tech;
            totaltechstudentpor += (totaltechstudent*100)/1800;
    */        
	        totalhsestudent = generation[i].sprints[j].score.hse;
            totalhsestudentpor += (totalhsestudent*100)/1200;
            
             if(totalhsestudent >= 840){
            	totalhse = totalhse+1;
            }
            hse.innerHTML = totalhse;

        }

            //totaltechstudentpor = (totaltechstudentpor / 4);
            totalhsestudentpor =  parseInt((totalhsestudentpor / 4)) + "%";
            porhse.innerHTML = totalhsestudentpor;
            //var totaltech;
            //if (totaltechstudentpor >= 70 &&  totalhsestudentpor >= 70){
            //    totaltech++;
            //}
           
	}
}
//STUDENT SATISFACTION
var satis = document.getElementById('satisfaction');

var satisfaction = parseInt((ratings[0].student.supera + ratings[1].student.supera)/2);
satis.innerHTML = satisfaction;

//TEACHER RATING
var teacher = document.getElementById('teacher');

var teacherRating = (ratings[0].teacher + ratings[1].teacher)/2;
teacher.innerHTML = teacherRating;


//JEDI MASTER RATING
var jedi = document.getElementById('jedi');

var jediRating = (ratings[0].jedi + ratings[1].jedi)/2;
jedi.innerHTML = jediRating;

//evento de click botones laterales

var overview = document.getElementById('overview');
var students = document.getElementById('students');
var teachers = document.getElementById('teachers');
var optiona = document.getElementById('a');
var optionb = document.getElementById('b');
var optionc = document.getElementById('c');

overview.addEventListener("click", function(){

	optiona.setAttribute("style", "background-color: #333333");
})

students.addEventListener("click", function(){
	optionb.setAttribute("style", "background-color: orange");
})