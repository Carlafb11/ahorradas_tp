
///////////////// SELECTORES ✨ /////////////

const sectionNewOperation = document.getElementById("seccion-nueva-operacion")
const openNewOperationButton = document.getElementById("button-new-operation")
const buttonCancelNewOperation = document.getElementById("cancel-new-operation")
const buttonAddNewOperation= document.getElementById("add-new-operation")
const cardsSection = document.getElementById("cards-section")
const categoriesSection = document.querySelector("box-categories")

openNewOperationButton.onclick = () => {
    console.log ("boton para abrir modal")
    sectionNewOperation.classList.remove("is-hidden")
    cardsSection.classList.add("is-hidden")
    
}

buttonCancelNewOperation.onclick = () => {
    sectionNewOperation.classList.add("is-hidden")
    cardsSection.classList.remove("is-hidden")
}
