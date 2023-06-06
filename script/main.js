function wclick(){
   let monthly = document.getElementById("monthly")
   let day = document.getElementById("daily")

   monthly.classList.remove("w-25")
   monthly.classList.add("w-100")

   day.classList.remove("w-100")
   day.classList.add("w-25")
}