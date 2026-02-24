const totalCount = document.querySelector(".card h2");
const interviewCount = document.querySelector(".green");
const rejectedCount = document.querySelector(".red");

const tabButtons = document.querySelectorAll(".filters button");
const jobsNumber = document.querySelector(".jobs-header p");

const noJobs = document.querySelector(".no-jobs");

let interview = 0;
let rejected = 0;


// INITIAL LOAD

updateCounts();
showAll();



// INTERVIEW BUTTON

document.querySelectorAll(".interview").forEach(function(btn){

btn.addEventListener("click",function(){

let job = btn.closest(".job");

let status = job.querySelector(".status");

if(status.innerText=="INTERVIEW"){

status.innerText="NOT APPLIED";

interview--;

}
else{

if(status.innerText=="REJECTED"){

rejected--;

}

status.innerText="INTERVIEW";

interview++;

}

updateCounts();

});

});




// REJECT BUTTON

document.querySelectorAll(".reject").forEach(function(btn){

btn.addEventListener("click",function(){

let job = btn.closest(".job");

let status = job.querySelector(".status");

if(status.innerText=="REJECTED"){

status.innerText="NOT APPLIED";

rejected--;

}
else{

if(status.innerText=="INTERVIEW"){

interview--;

}

status.innerText="REJECTED";

rejected++;

}

updateCounts();

});

});





// DELETE BUTTON

document.querySelectorAll(".delete").forEach(function(btn){

btn.addEventListener("click",function(){

let job = btn.closest(".job");

let status = job.querySelector(".status").innerText;

if(status=="INTERVIEW"){

interview--;

}

if(status=="REJECTED"){

rejected--;

}

job.remove();

updateCounts();

});

});






// FILTER BUTTONS

tabButtons[0].addEventListener("click",function(){

showAll();

setActive(this);

});


tabButtons[1].addEventListener("click",function(){

showInterview();

setActive(this);

});


tabButtons[2].addEventListener("click",function(){

showRejected();

setActive(this);

});






function showAll(){

let jobs = document.querySelectorAll(".job");

let visible = 0;

jobs.forEach(function(job){

job.style.display="block";

visible++;

});

noJobs.style.display="none";

jobsNumber.innerText=visible+" jobs";

}



function showInterview(){

let jobs = document.querySelectorAll(".job");

let visible = 0;

jobs.forEach(function(job){

let status=job.querySelector(".status").innerText;

if(status=="INTERVIEW"){

job.style.display="block";

visible++;

}else{

job.style.display="none";

}

});


if(visible==0){

noJobs.style.display="block";

}else{

noJobs.style.display="none";

}

jobsNumber.innerText=visible+" jobs";

}




function showRejected(){

let jobs = document.querySelectorAll(".job");

let visible = 0;

jobs.forEach(function(job){

let status=job.querySelector(".status").innerText;

if(status=="REJECTED"){

job.style.display="block";

visible++;

}else{

job.style.display="none";

}

});


if(visible==0){

noJobs.style.display="block";

}else{

noJobs.style.display="none";

}

jobsNumber.innerText=visible+" jobs";

}






function updateCounts(){

let total=document.querySelectorAll(".job").length;

totalCount.innerText=total;

interviewCount.innerText=interview;

rejectedCount.innerText=rejected;

}





function setActive(btn){

tabButtons.forEach(function(b){

b.classList.remove("active");

});

btn.classList.add("active");

}