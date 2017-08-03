var btnAgregar = document.getElementById('agregarTarea');
var btnBuscar = document.getElementById('buscarTarea');
var btnEliminarLista = document.getElementById('eliminarLista');

function Lista() {
  this.tareas = [];
  this.containerLista = document.querySelector('ul');

  this.buscarTarea = function(titulo) {
    var tareaEncontrada = false;
    for (var i = 0; i < this.tareas.length; i++) {
      if (this.tareas[i].titulo === titulo) {
        this.containerLista.innerHTML = '';
        this.containerLista.appendChild(this.tareas[i].containerTarea);
        tareaEncontrada = true;
      }
    }
    if (tareaEncontrada === false) {
      alert('La Tarea no se encuentra en la base de datos.');
    }
  };

  this.listarTareas = function() {
    for (var i = 0; i < this.tareas.length; i++) {
      this.containerLista.appendChild(this.tareas[i].containerTarea);
    }
  };

  this.eliminarTarea = function(tarea) {
    for (var i = 0; i < this.tareas.length; i++) {
      if (tarea.id === this.tareas[i].id) {
        this.tareas.splice(this.tareas.indexOf(this.tareas[i]), 1);
        this.listarTareas();
      }
    }
  };

  this.eliminarLista = function() {
    if (this.tareas.length > 0) {
      this.tareas = [];
      this.containerLista.innerHTML = '';
      alert('Lista de Tareas eliminada correctamente.');
    } else {
      alert('No hay Tareas cargadas en la base de datos.');
    }
  };
}

var lista = new Lista();

function Tarea(id, titulo, descripcion) {
  this.id = id;
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.completo = false;
  this.containerTarea;

  this.editarTarea = function() {
    if (confirm('¿Desea editar el Título de la Tarea?')) {
      var nuevoTitulo = prompt('Ingrese el nuevo Título', this.titulo);
      this.titulo = nuevoTitulo;
    }
    if (confirm('¿Desea editar la Descripción de la Tarea?')) {
      var nuevaDescripcion = prompt(
        'Ingrese la nueva Descripción',
        this.descripcion
      );
      this.descripcion = nuevaDescripcion;
    }
    this.containerTarea.querySelector('h2').innerHTML = this.titulo;
    this.containerTarea.querySelector('p').innerHTML = this.descripcion;
  };

  this.cambiarEstado = function() {
    if (this.completo === false) {
      this.completo = true;
      this.containerTarea.setAttribute('class', 'complete');
    } else {
      this.completo = false;
      this.containerTarea.removeAttribute('class', 'complete');
    }
  };

  this.renderTarea = function() {
    var self = this;

    var container = document.createElement('li');
    container.className = 'task';

    var btnEditar = document.createElement('img');
    btnEditar.setAttribute('src', 'img/editar.png');
    btnEditar.addEventListener('click', function() {
      self.editarTarea();
    });

    var btnConfirmar = document.createElement('img');
    btnConfirmar.setAttribute('src', 'img/confirmar.png');
    btnConfirmar.addEventListener('click', function() {
      var estado = confirm(
        '¿Está seguro que desea cambiar el estado de la Tarea?'
      );
      if (estado) {
        self.cambiarEstado();
      }
    });

    var btnEliminar = document.createElement('img');
    btnEliminar.setAttribute('src', 'img/eliminar.png');
    btnEliminar.addEventListener('click', function() {
      var eliminar = confirm('¿Está seguro que desea eliminar la Tarea?');
      if (eliminar) {
        lista.eliminarTarea(self);
        self.containerTarea.parentNode.removeChild(self.containerTarea);
      }
    });

    // var id = document.createElement('h3');
    // var idTarea = document.createTextNode(this.id);
    // id.append(idTarea);

    var titulo = document.createElement('h2');
    var tituloTarea = document.createTextNode(this.titulo);
    titulo.append(tituloTarea);

    var descripcion = document.createElement('p');
    var descripcionTarea = document.createTextNode(this.descripcion);
    descripcion.append(descripcionTarea);

    // container.append(id);
    container.append(titulo);
    container.append(descripcion);

    container.appendChild(btnEditar);
    container.appendChild(btnConfirmar);
    container.appendChild(btnEliminar);

    this.containerTarea = container;
  };
}

btnAgregar.addEventListener('click', function(event) {
  event.preventDefault();

  var nuevaTarea = new Tarea();
  nuevaTarea.id = document.getElementById('id').value;
  nuevaTarea.titulo = document.getElementById('titulo').value;
  nuevaTarea.descripcion = document.getElementById('descripcion').value;

  if (buscarTarea(nuevaTarea.id) !== -1) {
    alert('El ID ingresado ya se encuentra en la base de datos.');
  } else {
    nuevaTarea.renderTarea();
    lista.tareas.push(nuevaTarea);
    alert('Tarea ingresada con éxito.');
  }
  limpiarForm();
  lista.listarTareas();
  document.getElementById('id').focus();
});

btnBuscar.addEventListener('click', function(event) {
  event.preventDefault();

  var titulo = prompt('Ingrese el título de la Tarea a buscar:');
  lista.buscarTarea(titulo);
});

btnEliminarLista.addEventListener('click', function(event) {
  event.preventDefault();
  lista.eliminarLista();
});

// Filtrar Tareas por ID.
// findIndex: devuelve el índice del primer elemento del array que cumpla con la función.
// Caso contrario devuelve -1.
function buscarTarea(idBuscado) {
  return lista.tareas.findIndex(function(tarea) {
    return tarea.id === idBuscado;
  });
}

function limpiarForm() {
  // var inputs = document.getElementsByTagName('input');
  // for(var i = 0; i < inputs.length; i++){
  //   inputs[i].value = '';
  // }
  document.getElementById('todo-form').reset();
}

// Validar datos del Formulario.

// localStorage.
