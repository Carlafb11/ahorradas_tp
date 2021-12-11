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
openNewOperationButton.onclick = () => {
    console.log ("boton para abrir modal")
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
      descripcion: 'vinos',
      categoria: 'comida',
      fecha: '25/09/2021',
      monto: 5000,
      tipo: 'gasto',
  },
  {
    descripcion: 'vinos2',
    categoria: 'comida',
    fecha: '25/09/2021',
    monto: 5000,
    tipo: 'gasto',
},
{
  descripcion: 'vinos3',
  categoria: 'comida',
  fecha: '25/09/2021',
  monto: 5000,
  tipo: 'gasto',
},
{
  descripcion: 'vinos4',
  categoria: 'comida',
  fecha: '25/09/2021',
  monto: 10000,
  tipo: 'gasto',
}
]

// Convertir objeto de JS a JSON
const operacionesConvertidasAJSON = JSON.stringify(operaciones)

// Guardar en el almacenamiento local
localStorage.setItem("operaciones", operacionesConvertidasAJSON)

// Obtener info del local storage
const dataLS = localStorage.getItem("operaciones")

// Para convertir de JSON a JS
const dataJS = JSON.parse(dataLS)

const llenarTabla = () => {
  const contenedor = document.getElementById('contenedor-de-lista')
  const htmlHolder = "";
  dataJS.forEach((item) => {
    contenedor.innerHTML += `<div class="columns is-multiline is-mobile is-vcentered">
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
}

llenarTabla()