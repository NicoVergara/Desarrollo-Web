var peliculas = [];

var btnAgregar = document.getElementById('agregarPelicula');
var btnEliminar = document.getElementById('eliminarPelicula');
var btnListar = document.getElementById('listarPeliculas');

function Pelicula(id, titulo, descripcion, imagen) {
  this.id = id;
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.imagen = imagen;
}

function agregarPeliculas() {
  var agregar = confirm('¿Desea agregar una Película?');
  while(agregar) {
    var nuevaPelicula = new Pelicula();
    nuevaPelicula.id = parseInt(prompt('Ingrese el ID:'));
    nuevaPelicula.titulo = prompt('Ingrese el Título:');
    nuevaPelicula.descripcion = prompt('Ingrese la Descripción:');
    nuevaPelicula.imagen = prompt('Ingrese la ruta de la Imagen:');

    if(buscarPeliculas(nuevaPelicula.id) !== -1) {
      alert('La Película ya se encuentra en la base de datos.');
    } else {
      peliculas.push(nuevaPelicula);
      alert('Película agregada con éxito.');
    }

    agregar = confirm('¿Desea agregar otra Película?');
  }
  renderizarPeliculas();
}

function eliminarPeliculas() {
  var eliminar = confirm('¿Desea eliminar una Película?');
  while(eliminar) {
    var peliculaAEliminar = new Pelicula();
    peliculaAEliminar.id = parseInt(prompt('Ingrese el ID:'));

    if (buscarPeliculas(peliculaAEliminar.id) !== -1) {
      peliculas.splice(peliculaAEliminar, 1);
      alert('La Película con el ID: ' + peliculaAEliminar.id + ' fue eliminada.');
    } else {
      alert('La Película no se encuentra en la base de datos.');
    }

    eliminar = confirm('¿Desea eliminar otra Película?');
  }
  removerPeliculas();
}

// Filtrar Películas por ID.
// findIndex: devuelve el índice del primer elemento del array que cumpla con la función.
// Caso contrario devuelve -1.
function buscarPeliculas(idBuscado) {
  return peliculas.findIndex(function(pelicula) {
    return pelicula.id === idBuscado;
  })
}

function renderizarPeliculas() {
  var lista = document.querySelector('li')
  for(var i = 0; i < peliculas.length; i++) {
    var id = document.createElement('h2');
    id.innerHTML = peliculas[i].id;

    var titulo = document.createElement('h1')
    titulo.innerHTML = peliculas[i].titulo;

    var descripcion = document.createElement('p')
    descripcion.innerHTML = peliculas[i].descripcion;

    var imagen = document.createElement('img');
    imagen.src = 'img/' + peliculas[i].imagen;

    lista.appendChild(id);
    lista.appendChild(titulo);
    lista.appendChild(descripcion);
    lista.appendChild(imagen);
  }
}

btnAgregar.onclick = function() {
  agregarPeliculas();
}

btnEliminar.onclick = function() {
  eliminarPeliculas();
}

btnListar.onclick = function() {
  renderizarPeliculas();
}
