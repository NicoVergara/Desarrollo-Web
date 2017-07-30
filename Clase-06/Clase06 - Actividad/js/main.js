// Array de Noticias vacío.
var noticias = [];

// Creo el botón Agregar.
var btnAgregar = document.getElementById('agregarNoticia');

// Constructor de Noticias.
function Noticia(titulo, descripcion, imagen) {
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.imagen = imagen;
}

// Agregar Noticias.
function agregarNoticias() {
  var consulta = confirm('¿Desea agregar una Noticia?');
  while(consulta) {
    var nuevaNoticia = new Noticia();
    nuevaNoticia.titulo = prompt('Ingrese el título de la Noticia:');
    nuevaNoticia.descripcion = prompt('Ingrese la descripción de la Noticia:');
    nuevaNoticia.imagen = prompt('Ingrese la imagen de la Noticia:');

    if(buscarNoticias(nuevaNoticia.titulo) !== -1) {
      alert('La Noticia ya se encuentra en la base de datos.');
    } else {
      noticias.push(nuevaNoticia);
      alert('Noticia agregada con éxito.');
    }

    consulta = confirm('¿Desea agregar otra Noticia?');
  }
  renderizarNoticias();
}

// Filtrar Noticias por ID.
// findIndex: devuelve el índice del primer elemento del array que cumpla con la función.
// Caso contrario devuelve -1.
function buscarNoticias(tituloBuscado) {
  return noticias.findIndex(function(noticia) {
    return noticia.titulo === tituloBuscado;
  })
}

// Renderizar las Noticias en el browser.
function renderizarNoticias() {
  var lista = document.querySelector('li');
  for(var i = 0; i < noticias.length; i++) {
    // Agrego Título.
    var titulo = document.createElement('h1');
    titulo.innerHTML = noticias[i].titulo;

    // Agrego Descripción.
    var descripcion = document.createElement('p');
    descripcion.innerHTML = noticias[i].descripcion;

    // Agrego Imagen.
    var imagen = document.createElement('img');
    imagen.src = 'img/' + noticias[i].imagen;

    lista.appendChild(titulo);
    lista.appendChild(descripcion);
    lista.appendChild(imagen);
  }
}

// Evento click del botón agregar.
btnAgregar.onclick = function() {
  agregarNoticias();
}
