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
const buttonCancelEditOperation = document.getElementById("edit-cancel-new-operation")
const cardsSection = document.getElementById("cards-section")
const buttonAddNewOperation= document.getElementById("add-new-operation")
const openCategoriesWindow = document.getElementById("categories-window")
const categoriesSection = document.querySelector("#box-categories")
const contenedor = document.getElementById('contenedor-de-lista')

//Selectores para Ventana de Agregar Nueva Operacion 
const formNewOperation = document.getElementById("form-new-operation")
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


// Selectores para sección operaciones
const reportsSection =  document.getElementById("seccion-reportes")
const operationsImgContainer = document.getElementById("operations-img-container")
const tableTitles = document.getElementById("tabla-operaciones")
const selectExpense = document.getElementById("select-expense")
const selectGain = document.getElementById("select-gain")


openNewOperationButton.onclick = () => {
    sectionNewOperation.classList.remove("is-hidden")
    categoriesSection.classList.add("is-hidden")
    cardsSection.classList.add("is-hidden")

    
}

buttonCancelNewOperation.onclick = () => {
    sectionNewOperation.classList.add("is-hidden")
    cardsSection.classList.remove("is-hidden")
    
}

openCategoriesWindow.onclick =()=> {
  console.log("fdjnkd")
  categoriesSection.classList.toggle("is-hidden")
  cardsSection.classList.toggle("is-hidden")
}

// Obtener info del local storage
const dataLS = localStorage.getItem("operaciones")

// Para convertir de JSON a JS
const dataJS = JSON.parse(dataLS) || []

// Ocultar img si hay operaciones en LS
const removeImg = () => {
  if (dataJS.length > 0) {
    operationsImgContainer.classList.add("is-hidden")
  } 
}
removeImg()

// FUNCIONALIDAD PARA AGREGAR UNA NUEVA OPERACION.
formNewOperation.onsubmit = (e) => {
  e.preventDefault()
  const arrayClonado = [...dataJS]

  const addOperation = {
    descripcion: inputForNewDescription.value,
    monto: inputForNewAmount.value,
    tipo: selectType.value,
    categoria: selectForCategory.value,
    fecha: selectForDate.value,
  }

  arrayClonado.push(addOperation)

  localStorage.setItem("operaciones", JSON.stringify(arrayClonado))
  window.location.reload()
}

// Eliminar operaciones del LS
const removeOperationLS = (posicion) => {
  const newArrayOperations = [...dataJS]
  newArrayOperations.splice(posicion, 1)
  localStorage.setItem("operaciones", JSON.stringify(newArrayOperations))
  localStorage.setItem("operacionesConFiltro", JSON.stringify(newArrayOperations))
  window.location.reload()
}

// Selectores operaciones
const sectionEditOperation = document.getElementById("section-editar-operacion")
const sectionEditOperationButton = document.getElementById("edit-operation-button")
const saveInputName = document.getElementById("save-input-description-name")

// Editar operaciones del LS
const editOperationsLS = (posicion) => {
  const newArrayOperations = [...dataJS]
  newArrayOperations[posicion].description = saveInputName.value

  console.log(newArrayOperations)

  // localStorage.setItem("operaciones", JSON.stringify(newArrayOperations))
  // localStorage.setItem("operacionesConFiltro", JSON.stringify(newArrayOperations))
  // window.location.reload()
  
}

sectionEditOperationButton.onclick = () => {
  sectionEditOperation.classList.remove("is-hidden")
  categoriesSection.classList.add("is-hidden")
  cardsSection.classList.add("is-hidden")
  reportsSection.classList.add("is-hidden")
}

buttonCancelEditOperation.onclick = () => {
  sectionEditOperation.classList.add("is-hidden")
  cardsSection.classList.remove("is-hidden")
}

// FUNCIONALIDAD PARA AGREGAR CREAR LA TABLA
const llenarTabla = (array) => {
  let htmlHolder = "";
  //Obtener operaciones filtradas desde LS
  // const dataFiltrada = JSON.parse(localStorage.getItem("operacionesConFiltro"))
  // const arrayCorrecto = dataFiltrada || dataJS

  array.map((item, index) => {
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
    <div class="column is-2-tablet is-6-mobile has-text-weight-bold has-text-right-tablet is-size-4-mobile" id="amount">
      $${item.monto}
    </div>
    <div class="column is-2-tablet is-6-mobile has-text-right">
      <p class="is-fullwidth">
        <a href="#" class="mr-3 is-size-7 edit-link" id="edit-operation-button" onclick={editOperationsLS(${index})}>Editar</a>
        <a href="#" class="is-size-7 delete-link" onclick={removeOperationLS(${index})}>Eliminar</a>
      </p>
    </div>
  </div>`
  })
  contenedor.innerHTML=htmlHolder

  if (dataJS.length >= 1) {
    tableTitles.classList.remove("is-hidden")
  }

}

llenarTabla(dataJS)
 
// FUNCIONALIDAD PARA APLICAR FILTROS 
const applyFilters = () => {
    const type = inputTypeSelect.value
    const operationsFilteredByType = dataJS.filter((item)=> {
      if(type==="all") {
        return item
      }
    return item.tipo === type

    })

    const category = inputCategorySelect.value
    const operationsFilteredByCategory = operationsFilteredByType.filter((item)=>{
      if (category === "todos") {
        return item
      }
      return item.categoria === category
    })

    const finalArray = operationsFilteredByCategory.map((item)=> {
      const newElement = {...item}
      newElement.fecha = new Date(item.fecha).toLocaleDateString()
      return newElement
    })

    finalArray.sort ((a,b)=> {
      return new Date(a.fecha) - new Date(b.fecha)
    })
    
  return finalArray
}


inputTypeSelect.onchange = () => {
const filteredArray = applyFilters()
llenarTabla(filteredArray)
}

inputCategorySelect.onchange = ()=> {
const filteredArray =applyFilters()
llenarTabla(filteredArray)
}


inputDateSelect.onchange = () => {
  const filteredArray =applyFilters()
  llenarTabla(filteredArray)
}