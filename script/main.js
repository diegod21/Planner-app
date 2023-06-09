function dclick(){
   let monthly = document.getElementById("weekly")
   let day = document.getElementById("daily")

   monthly.classList.remove("h-25")
   monthly.classList.add("h-100")

   day.classList.remove("h-100")
   day.classList.add("h-25")
}
function removeInput(element) {
   var input = element.previousSibling;
   let rest = input.previousSibling

   rest.remove()
   input.remove();
   element.remove();
}

function wclick(){
   let monthly = document.getElementById("weekly")
   let day = document.getElementById("daily")

   monthly.classList.remove("h-25")
   monthly.classList.add("h-100")

   day.classList.remove("h-100")
   day.classList.add("h-25")
}
function removeInput(element) {
   var input = element.previousSibling;
   let rest = input.previousSibling

   rest.remove()
   input.remove();
   element.remove();
}

function yclick(){
   let monthly = document.getElementById("weekly")
   let day = document.getElementById("daily")

   monthly.classList.remove("h-25")
   monthly.classList.add("h-100")

   day.classList.remove("h-100")
   day.classList.add("h-25")
}
function removeInput(element) {
   var input = element.previousSibling;
   let rest = input.previousSibling

   rest.remove()
   input.remove();
   element.remove();
}

function oclick(){
   let monthly = document.getElementById("weekly")
   let day = document.getElementById("daily")

   monthly.classList.remove("h-25")
   monthly.classList.add("h-100")

   day.classList.remove("h-100")
   day.classList.add("h-25")
}
function removeInput(element) {
   var input = element.previousSibling;
   let rest = input.previousSibling

   rest.remove()
   input.remove();
   element.remove();
}



function createInputDay(){
   let userCall = window.prompt("Qual o nome da nova tarefa");
   let divId = document.getElementById("inputDay");

   let newInput = `<div><input type="checkbox" name="listitem" id="id1">${userCall} <span class="btn btn-close border border-dark" onclick="removeInput(this)">X</span>`

   divId.innerHTML += newInput
}
function createInputWeek(){
   let userCall = window.prompt("Qual o nome da nova tarefa");
   let divId = document.getElementById("inputWeek");

   let newInput = `<div><input type="checkbox" name="listitem" id="id1">${userCall} <span class="btn btn-close border border-dark" onclick="removeInput(this)">X</span>`

   divId.innerHTML += newInput
}
function createInputYear(){
   let userCall = window.prompt("Qual o nome da nova tarefa");
   let divId = document.getElementById("inputYear");

   let newInput = `<div><input type="checkbox" name="listitem" id="id1">${userCall} <span class="btn btn-close border border-dark" onclick="removeInput(this)">X</span>`

   divId.innerHTML += newInput
}
function createInputOthers(){
   let userCall = window.prompt("Qual o nome da nova tarefa");
   let divId = document.getElementById("inputOthers");

   let newInput = `<div><input type="checkbox" name="listitem" id="id1">${userCall} <span class="btn btn-close border border-dark" onclick="removeInput(this)">X</span>`

   divId.innerHTML += newInput
}