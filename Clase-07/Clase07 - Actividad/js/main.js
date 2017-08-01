var noticias = [];
var btnAgregar = document.getElementById('agregar');
var btnListar = document.getElementById('listar');

function Noticia(id, titulo, descripcion, imagen) {
  this.id = id;
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.imagen = imagen;
}

btnAgregar.addEventListener('click', function(event) {
  // Para evitar que el navegador se refresque por defecto.
  event.preventDefault()

  var nuevaNoticia = new Noticia();
  nuevaNoticia.id = document.getElementById('id').value;
  nuevaNoticia.titulo = document.getElementById('titulo').value;
  nuevaNoticia.descripcion = document.getElementById('descripcion').value;
  nuevaNoticia.imagen = document.getElementById('imagen').value;

  if(buscarNoticias(nuevaNoticia.id) !== -1) {
    alert('El ID ingresado ya existe en la base de datos.');
  } else {
    noticias.push(nuevaNoticia);
    alert('Noticia agregada con éxito.');
  }
  limpiarForm();

});

btnListar.addEventListener('click', function(event) {
  event.preventDefault();

  var lista = document.querySelector('li');
  for(var i = 0; i < noticias.length; i++) {
    var id = document.getElementById('id');
    id.innerHTML = noticias[i].id;

    var titulo = document.getElementById('titulo');
    titulo.innerHTML = noticias[i].titulo;

    var descripcion = document.getElementById('descripcion');
    descripcion.innerHTML = noticias[i].descripcion;

    var imagen = document.getElementById('imagen');
    imagen.src = 'img/' + noticias[i].imagen;

    lista.appendChild(id);
    lista.appendChild(titulo);
    lista.appendChild(descripcion);
    lista.appendChild(imagen);
  }
});

// Filtrar Películas por ID.
// findIndex: devuelve el índice del primer elemento del array que cumpla con la función.
// Caso contrario devuelve -1.
function buscarNoticias(idBuscado) {
  return noticias.findIndex(function(noticia){
    return noticia.id === idBuscado;
  })
}

// limpiarForm: recorre y limpia todos los inputs del formulario.
function limpiarForm(){
  var inputs = document.getElementsByTagName("input");
  for(var i = 0; i < inputs.length; i++){
    inputs[i].value = '';
  }
}
