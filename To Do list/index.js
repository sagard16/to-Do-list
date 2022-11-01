const formEl = document.querySelector(".form")
const inputEl = document.querySelector(".input")
const listEl = document.querySelector(".list")


formEl.addEventListener("submit", (event)=>{
   event.preventDefault()
   toDoList()
})

function toDoList(){
   let newList = inputEl.value
   const newLi = document.createElement("li")
   newLi.innerText = newList
   listEl.appendChild(newLi)
   inputEl.value = ""
   const cheakBtn = document.createElement('div')
   cheakBtn.innerHTML = `<i class="fa-solid fa-square-check"></i>`
   newLi.appendChild(cheakBtn)
   const trashBtn = document.createElement("div")
   trashBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
   newLi.appendChild(trashBtn)

   cheakBtn.addEventListener("click", ()=>{
    newLi.classList.toggle("checked")
   })

   trashBtn.addEventListener("click", ()=>{
      newLi.remove();
   })
}