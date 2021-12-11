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

//Selectores para Ventana de Agregar Nueva Operacion 

const inputForNewDescription =document.querySelector("#input-description-name")
const inputForNewAmount = document.querySelector("#input-amount-name")
const selectType = document.querySelector("#input-for-type")
const selectForCategory = document.querySelector("#select-for-category")
const selectForDate = document.querySelector("#input-for-date")
const formButtonAddNewOperation = document.getElementById("form-button-add-new-operation")

//Selectores para Filtros 
const inputTypeSelect = document.querySelector("#type-select")
const inputCategorySelect = document.querySelector("#category-select")
const inputDateSelect = document.querySelector("#date-select")
const inputOrderSelect = document.querySelector("#order-select")




openNewOperationButton.onclick = () => {
    sectionNewOperation.classList.remove("is-hidden")
    categoriesSection.classList.add("is-hidden")
    cardsSection.classList.add("is-hidden")
    
}

buttonCancelNewOperation.onclick = () => {
    sectionNewOperation.classList.add("is-hidden")
    cardsSection.classList.remove("is-hidden")
    
}

// Obtener info del local storage
const dataLS = localStorage.getItem("operaciones")

// Para convertir de JSON a JS
const dataJS = JSON.parse(dataLS) || [];

formButtonAddNewOperation.onclick = (e) => {
  e.preventDefault()
  const arrayClonado = [...dataJS];

  const addOperation = {
    descripcion: inputForNewDescription.value,
    monto: inputForNewAmount.value,
    tipo: selectType.value,
    categoria: selectForCategory.value,
    fecha: selectForDate.value,
  }

  arrayClonado.push(addOperation);

  localStorage.setItem("operaciones", JSON.stringify(arrayClonado));
  window.location.reload();
}

const llenarTabla = (array) => {
  const contenedor = document.getElementById('contenedor-de-lista')
  let htmlHolder = "";

  array.map((item) => {
    htmlHolder += 
    `<div class="columns is-multiline is-mobile is-vcentered">
    <div class="column is-3-tablet is-6-mobile">
      <h3 class="has-text-weight-semibold" id="description">${item.descripcion}</h3>
    </div>
    <div class="column is-3-tablet is-6-mobile has-text-right-mobile">
      <span class="tag is-primary is-light" id="category">${item.categoria}</span>
    </div>
    <div class="column is-2-tablet has-text-grey is-hidden-mobile has-text-right-tablet" id="date">
      ${item.fecha}
    </div>
    <div class="column is-2-tablet is-6-mobile has-text-weight-bold has-text-right-tablet is-size-4-mobile has-text-success" id="amount">
      ${item.monto}
    </div>
    <div class="column is-2-tablet is-6-mobile has-text-right">
      <p class="is-fullwidth">
        <a href="#" class="mr-3 is-size-7 edit-link">Editar</a>
        <a href="#" class="is-size-7 delete-link">Eliminar</a>
      </p>
    </div>
  </div>`;
  })
contenedor.innerHTML=htmlHolder
}

llenarTabla(dataJS)



///////////////// FUNCIONALIDAD DE FILTROS ✨ /////////////

// const inputTypeSelect = document.querySelector("#type-select")
// const inputCategorySelect = document.querySelector("#category-select")
// const inputDateSelect = document.querySelector("#date-select")
// const inputOrderSelect = document.querySelector("#order-select")


const applyFilters = () => {
  // const type = inputTypeSelect.value
  // const filterByType = dataJS.filter((item)=>{
  //   if(type === "all") {
  //     return item
  //   }

  //   return item.tipo === type
  // })

  const category = selectForCategory.value
  const filterByCategory = dataJS.filter((item)=> {
    if (category==="all") {
      console.log("usuario seleccono todos")
      return item
    }
    return item.categoria = category
  })
  return filterByCategory
}


// inputTypeSelect.onchange = ()=> {
//   // const filteredArray = applyFilters()
//   // llenarTabla(filteredArray)
// }

inputCategorySelect.onchange = () => {
  const filteredArray = applyFilters()
  llenarTabla(filteredArray)
}