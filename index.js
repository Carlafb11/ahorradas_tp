// BULMA JS
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});


  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  
///////////////// SELECTORES ✨ /////////////

const sectionNewOperation = document.getElementById("seccion-nueva-operacion")
const openNewOperationButton = document.getElementById("button-new-operation")
const buttonCancelNewOperation = document.getElementById("cancel-new-operation")
const cardsSection = document.getElementById("cards-section")
const buttonAddNewOperation= document.getElementById("add-new-operation")
const categoriesSection = document.querySelector("#box-categories")

const inputForNewDescription =document.querySelector("#input-description-name")
const inputForNewAmount = document.querySelector("#input-amount-name")
const selectType = document.querySelector("#input-for-type")
const selectForCategory = document.querySelector("#select-for-category")
const selectForDate = document.querySelector("#input-for-date")
const formButtonAddNewOperation = document.getElementById("form-button-add-new-operation")
console.log(formButtonAddNewOperation)




openNewOperationButton.onclick = () => {
    sectionNewOperation.classList.remove("is-hidden")
    categoriesSection.classList.add("is-hidden")
    cardsSection.classList.add("is-hidden")
    
}

buttonCancelNewOperation.onclick = () => {
    sectionNewOperation.classList.add("is-hidden")
    cardsSection.classList.remove("is-hidden")
    
}

// TEST
const operaciones = [

  {
      descripcion: 'descripcion',
      categoria: 'Categoria',
      fecha: 'fecha',
      monto: 'monto',
      tipo: 'tipo',
  },

  {
      descripcion: 'vinos',
      categoria: 'comida',
      fecha: '25/09/2021',
      monto: 5000,
      tipo: 'gasto',
  }
]

// Convertir objeto de JS a JSON
// localStorage.setItem("operaciones", operacionesConvertidasAJSON)


const operacionesConvertidasAJSON = (object) => {
  const objetoConvertidoAJSON = JSON.stringify(object)
return objetoConvertidoAJSON
}


let operation = []

formButtonAddNewOperation.onclick = (e) => {
  e.preventDefault()
  let addOperation = {
      descripcion: inputForNewDescription.value,
      monto: inputForNewAmount.value,
      tipo: selectType.value,
      categoria: selectForCategory.value,
      fecha: selectForDate.value,
  }
  console.log(operation.push(addOperation))


}
