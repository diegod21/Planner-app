function wclick(){
   let monthly = document.getElementById("weekly")
   let day = document.getElementById("daily")

   monthly.classList.remove("w-25")
   monthly.classList.add("w-100")

   day.classList.remove("w-100")
   day.classList.add("w-25")
}
function removeInput(element) {
   var input = element.previousSibling;
   let rest = input.previousSibling

   rest.remove()
   input.remove();
   element.remove();
}
function createInput(){
   let userCall = window.prompt("Qual o nome da nova tarefa");
   let divId = document.getElementById("inputList");

   let newInput = `<div><input type="checkbox" name="listitem" id="id1">${userCall} <span onclick="removeInput(this)">X</span></div>`

   divId.innerHTML += newInput
}