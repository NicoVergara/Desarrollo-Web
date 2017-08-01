var peliculas = []
var btnAgregar = document.getElementById('agregarPelicula')
var btnListar = document.getElementById('listarPeliculas')
var btnEliminar = document.getElementById('eliminarPelicula')
var btnFiltroId = document.getElementById('filtroId')
var btnFiltroTitulo = document.getElementById('filtroTitulo')


function Pelicula(id, titulo, fecha) {
  this.id = id
  this.titulo = titulo
  this.fecha = fecha
}


btnAgregar.addEventListener('click', function(event) {
  // Para evitar que el navegador se refresque por defecto.
  event.preventDefault()

  var id = document.getElementById('id').value
  var titulo = document.getElementById('titulo').value
  var fecha = document.getElementById('fecha').value

  if (!id || !titulo || !fecha) {
    alert('Te quedaron campos sin completar.')
    return
  }

  var nuevaPelicula = new Pelicula()
  nuevaPelicula.id = id
  nuevaPelicula.titulo = titulo
  nuevaPelicula.fecha = fecha

  if (buscarPeliculas(nuevaPelicula.id) !== -1) {
    alert('El ID ingresado ya existe en la base de datos.')
  } else {
    peliculas.push(nuevaPelicula)
    alert('Película agregada con éxito.')
  }
  limpiarForm()
})


btnEliminar.addEventListener('click', function(event) {
  event.preventDefault()

  var peliculaAEliminar = new Pelicula()
  peliculaAEliminar.id = document.getElementById('id').value

  if (buscarPeliculas(peliculaAEliminar.id) !== -1) {
    peliculas.splice(peliculaAEliminar, 1)
    alert(
      'La Película con el ID: ' + peliculaAEliminar.id + ' fue eliminada correctamente.'
    )
    limpiarForm()
  } else {
    alert('La Película no se encuentra en la base de datos.')
  }
})


btnListar.addEventListener('click', function(event) {
  event.preventDefault()

  var bodyChildren = document.body.children
  if (bodyChildren['divTable'] != null) {
    bodyChildren['divTable'].remove()
  }

  var divTable = document.createElement('div')
  var table = document.createElement('table')
  var thead = document.createElement('thead')
  var tbody = document.createElement('tbody')
  var trHeader = document.createElement('tr')
  var thId = document.createElement('th')
  var thTitulo = document.createElement('th')
  var thFecha = document.createElement('th')
  thId.appendChild(document.createTextNode('ID'))
  thTitulo.appendChild(document.createTextNode('Título'))
  thFecha.appendChild(document.createTextNode('Fecha'))
  trHeader.appendChild(thId)
  trHeader.appendChild(thTitulo)
  trHeader.appendChild(thFecha)
  thead.appendChild(trHeader)
  table.appendChild(thead)

  for (var i = 0; i < peliculas.length; i++) {
    var tr = document.createElement('tr')
    var th = document.createElement('th')
    var td1 = document.createElement('td')
    td1.setAttribute('class', 'col-xs-2')
    var td2 = document.createElement('td')
    td2.setAttribute('class', 'col-xs-4')
    var td3 = document.createElement('td')
    td3.setAttribute('class', 'col-xs-4')
    td1.appendChild(document.createTextNode(peliculas[i].id))
    td2.appendChild(document.createTextNode(peliculas[i].titulo))
    td3.appendChild(document.createTextNode(peliculas[i].fecha))
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tbody.appendChild(tr)
    table.appendChild(tbody)
  }

  table.setAttribute('class', 'table table-over')
  divTable.appendChild(table)
  divTable.setAttribute('id', 'divTable')
  divTable.setAttribute('class', 'col-xs-12')
  document.body.appendChild(divTable)
})


btnFiltroId.addEventListener('click', function(event) {
  event.preventDefault()

  var idPelicula = document.getElementById('id')
  var bodyChildren = document.body.children
  if (bodyChildren['divTable'] != null) {
    bodyChildren['divTable'].remove()
  }

  var divTable = document.createElement('div')
  var table = document.createElement('table')
  var thead = document.createElement('thead')
  var tbody = document.createElement('tbody')
  var trHeader = document.createElement('tr')
  var thId = document.createElement('th')
  var thTitulo = document.createElement('th')
  var thFecha = document.createElement('th')
  thId.appendChild(document.createTextNode('ID'))
  thTitulo.appendChild(document.createTextNode('Título'))
  thFecha.appendChild(document.createTextNode('Fecha'))
  trHeader.appendChild(thId)
  trHeader.appendChild(thTitulo)
  trHeader.appendChild(thFecha)
  thead.appendChild(trHeader)
  table.appendChild(thead)

  for (var i = 0; i < peliculas.length; i++) {
    if (peliculas[i].id === id.value) {
      var tr = document.createElement('tr')
      var th = document.createElement('th')
      var td1 = document.createElement('td')
      td1.setAttribute('class', 'col-xs-2')
      var td2 = document.createElement('td')
      td2.setAttribute('class', 'col-xs-4')
      var td3 = document.createElement('td')
      td3.setAttribute('class', 'col-xs-4')
      td1.appendChild(document.createTextNode(peliculas[i].id))
      td2.appendChild(document.createTextNode(peliculas[i].titulo))
      td3.appendChild(document.createTextNode(peliculas[i].fecha))
      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tbody.appendChild(tr)
      table.appendChild(tbody)
    }

    table.setAttribute('class', 'table table-over')
    divTable.appendChild(table)
    divTable.setAttribute('id', 'divTable')
    divTable.setAttribute('class', 'col-xs-12')
    document.body.appendChild(divTable)
  }
  limpiarForm()
})


btnFiltroTitulo.addEventListener('click', function(event) {
  event.preventDefault()

  var idPelicula = document.getElementById('id')
  var bodyChildren = document.body.children
  if (bodyChildren['divTable'] != null) {
    bodyChildren['divTable'].remove()
  }

  var divTable = document.createElement('div')
  var table = document.createElement('table')
  var thead = document.createElement('thead')
  var tbody = document.createElement('tbody')
  var trHeader = document.createElement('tr')
  var thId = document.createElement('th')
  var thTitulo = document.createElement('th')
  var thFecha = document.createElement('th')
  thId.appendChild(document.createTextNode('ID'))
  thTitulo.appendChild(document.createTextNode('Título'))
  thFecha.appendChild(document.createTextNode('Fecha'))
  trHeader.appendChild(thId)
  trHeader.appendChild(thTitulo)
  trHeader.appendChild(thFecha)
  thead.appendChild(trHeader)
  table.appendChild(thead)

  for (var i = 0; i < peliculas.length; i++) {
    if (peliculas[i].titulo === titulo.value) {
      var tr = document.createElement('tr')
      var th = document.createElement('th')
      var td1 = document.createElement('td')
      td1.setAttribute('class', 'col-xs-2')
      var td2 = document.createElement('td')
      td2.setAttribute('class', 'col-xs-4')
      var td3 = document.createElement('td')
      td3.setAttribute('class', 'col-xs-4')
      td1.appendChild(document.createTextNode(peliculas[i].id))
      td2.appendChild(document.createTextNode(peliculas[i].titulo))
      td3.appendChild(document.createTextNode(peliculas[i].fecha))
      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tbody.appendChild(tr)
      table.appendChild(tbody)
    }

    table.setAttribute('class', 'table table-over')
    divTable.appendChild(table)
    divTable.setAttribute('id', 'divTable')
    divTable.setAttribute('class', 'col-xs-12')
    document.body.appendChild(divTable)
  }
  limpiarForm()
})


// Filtrar Películas por ID.
// findIndex: devuelve el índice del primer elemento del array que cumpla con la función.
// Caso contrario devuelve -1.
function buscarPeliculas(idBuscado) {
  return peliculas.findIndex(function(pelicula) {
    return pelicula.id === idBuscado
  })
}

// limpiarForm: recorre y limpia todos los inputs del formulario.
function limpiarForm() {
  var inputs = document.getElementsByTagName('input')
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = ''
  }
}
