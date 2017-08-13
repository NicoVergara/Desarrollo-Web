/* 

# Realizar un ToDoList, en el cual podremos agregar, borrar o ordenar tareas.

Cada tarea tendra las siguientes propiedades. 

1) Crear el módulo ToDoList.

2) Cargar contenido de prueba:
- El modulo tendra un array llamado "tareas".
- Dentro del array tendremos objetos tarea.  
- Cada objeto tarea tendrá las siguientes propiedades:
​	- id: numerico
	- titulo: Texto
	- imagen: Nombre de la imagen (nombre del archivo + extensión).
	- descripción: texto
	- completado: booleano.
- Cargar 4 objetos tarea en el array de "tareas".

3) Mostrar tareas en la pantalla (Renderizar)
- Renderizar el array de tareas en la pantalla.
- Cada una de las tareas deben estar encerradas en un li que tenga la clase "tarea".
- Luego, cada li deberá ser agregados a un ul en el html que tenga la clase "tareas".

4) Crear formulario para agregar Tareas: 

- Deberemos ser capaces de agregar una "tarea" mediante un formulario.
- El formulario tendrá 3 campos:
	- titulo: Se lo podrá ingresar por el formulario.
	- imagen: nombre del archivo + extensión. 
	- descripción: Se lo podrá ingresar por un textarea formulario.
- El ID de la tarea será generado aleatoriamente. 
- La tarea inicializará el estado completado en false.


5) Botón de "agregar".
- El formulario tendrá un botón de "Agregar Tareas".
	- Al apretar el botón agregaremos una tarea al array de tareas.
	- Ademas agragaremos la tarea a la pantalla.

3) Eliminar una tarea.
- Dentro de si misma en el html, cada tarea deberá tener un botón que se llame "Eliminar Tarea".
- Al presionarlo hara lo siguiente:
	- Pedir un mensaje de confirmación de la operación.
	- Eliminará la tarea del array de tareas.
	- Eliminará la tarea del html. 

4) Crear botones para ordenar las tareas.
- Crear botones para ordernar el array de tareas por A-Z y Z-A las tareas por titulo.
- Renderizar el array ordenado.

5) Marcar como completado.
- Agregar un botón que sea completar tarea.
- Al apretarlo, la tarea pasará a estar completada.
- Las tareas que estén completadas tendran el estado complatado en true;
- Si una tarea tiene el estado completado en true, se agregará al li la clase "completado"
- Esta clase le dará un estilo diferente a la tarea.
- Si la tarea ya esta completada, se esconderá el botón.

5) Botón para salvar.
- Las tareas deberan quedar persistidas mediante localstorage y poder mostrarse en caso de recargar el browser.
*/

var ToDoList = (function () {

	function asignarEventos() {

		var botonCrear = document.getElementById('agregar-tarea');

		botonCrear.onclick = function(event) {

			event.preventDefault();

			var id = Math.random();
			var titulo = document.getElementById('titulo').value;
			var descripcion = document.getElementById('descripcion').value;
			var rutaImagen = document.getElementById('ruta-imagen').value;
			var completado = false;

			console.log(id, titulo, descripcion, rutaImagen,completado);

			agregarTarea(id, titulo, descripcion, rutaImagen,completado);

		}

		var botonSalvar = document.getElementById('salvar');

		botonSalvar.onclick = function(event) {

			event.preventDefault();

			var tareasString = JSON.stringify(tareas);
			localStorage.setItem('tareas',tareasString);
			alert('Cambios Guardados!');

		}	

		//Ordenar Ascendentemente por titulo;
		var botonOrdernarAsc = document.getElementById('ordernar-asc');

		botonOrdernarAsc.onclick = function(event) {

			event.preventDefault();

			ordernarTareas(tareas,'asc','titulo');


		}			

		var botonOrdernarDesc = document.getElementById('ordernar-desc');

		botonOrdernarDesc.onclick = function(event) {

			event.preventDefault();

			ordernarTareas(tareas,'desc','titulo');


		}

		var botonOrdernarId = document.getElementById('ordernar-id');

		botonOrdernarId.onclick = function(event) {

			event.preventDefault();

			ordernarTareas(tareas,'desc','id');


		}



	}
	
	function restaurarTareas () {

		var jsonToParse = localStorage.getItem('tareas');
		var restore = JSON.parse( jsonToParse );
		tareas = restore;
		console.log(restore);
		renderizarTareas();
		
	}

	function agregarTarea (id, titulo, descripcion, rutaImagen, completado ) {

		var existe = buscarTarea(id,tareas);

		if(existe >= 0) {
			
			console.log('La tarea no existe. Creando tarea');

			var tarea = {
				id:id,
				titulo:titulo,
				descripcion:descripcion,
				completado:completado
			}

			tareas.push(tarea);

			renderizarTarea(tarea);
			
		} else {

			console.log('Ya existe una tarea con el ID '+ id +'. Por favor comprobar la información ingresada.');	
		
		}


	}


	function renderizarTarea (tarea) {

		//Creamos un contenedor para cada tarea
		var container = document.createElement('li');
		container.className = 'tarea';

		//Creamos el titulo
		var titulo = document.createElement('h2');
		var textoDelTitulo = document.createTextNode(tarea.titulo);					
		titulo.append(textoDelTitulo);

		//Creamos el descripcion;
		var descripcion = document.createElement('p');
		var textoDeLaDescripcion = document.createTextNode(tarea.descripcion);					
		descripcion.append(textoDeLaDescripcion);

		//Creamos la imagen
		var imagen = document.createElement('img');
		imagen.src = 'img/' + tarea.imagen;


		var botonEliminar = document.createElement('button')
		botonEliminar.innerHTML = 'Eliminar Tarea';
		botonEliminar.onclick = function() {

			var confirmarEliminar = confirm('Está seguro que quiere eliminar esta tarea?');

			if (confirmarEliminar) {
				eliminarTarea(tarea.id, container);
			}
			
		}

		var botonCompletar = document.createElement('button')
		botonCompletar.innerHTML = 'Completar Tarea';
		botonCompletar.onclick = function() {

			var confirmarCompletar = confirm('Está seguro que quiere eliminar esta tarea?');

			if (confirmarCompletar) {
				completarTarea(tarea.id, container, this);
			}
			
		}

		//Ponemos el título, la imagen y la descripción dentro del "div" contenedor que creamos.
		container.append(titulo);
		container.append(imagen);				
		container.append(descripcion);
		container.append(botonEliminar);
		container.append(botonCompletar);
		

		//Adjuntamos el div contenedor que tiene todos los datos de nuestra peli a el body.
		document.querySelector('.lista-de-tareas').append(container)

	}

	function eliminarTarea(id, container) {

		var existe = buscarTarea(id,tareas);
		if(existe >= 0) {

			//Saco la tarea del array de tareas
			tareas.splice(existe,1);
			container.parentNode.removeChild(container);

		}

	}

	function completarTarea (id, container, button) {

		var existe = buscarTarea(id,tareas);

		if(existe >= 0) {

			//Saco la tarea del array de tareas
			tareas[existe].completado = true;

			console.log('in!!!');
			console.log(container);

			container.className += ' completado';
			button.style.display = 'none'

		}


	}

	//Por último tenemos nuestra función para ordenar nuestro array de objetos de diferentes maneras
	function ordernarTareas( arrayAOrdernar , forma, prop) {

		arrayAOrdernar.sort(function (a,b) {

			if (forma === 'asc') {
				if(a[prop] > b[prop]) { // Para comparar utilizaremos la "propiedad" de cada objeto.
					return 1;  // si retorna 1, a va a ir primero que b
				} else {
					return -1; // si retorna -1, b va a ir primero que a
				}
			} else {
				if(a[prop] > b[prop]) {
					return -1;
				} else {
					return 1;
				}
			}

		})

		document.querySelector('ul').innerHTML = '';
		renderizarTareas();


	}

 
	var tareas = [

		{
			id:4,
			titulo:'Tarea N°4',
			descripcion:'Esta es la tarea n° 4',
			imagen: 'js-logo.png',
			completado:false
		},
		{
			id:3,
			titulo:'Noticia 3',
			descripcion:'Esta es la tarea n° 12',
			imagen: 'html-logo.png',
			completado:false		
		},
		{
			id:5,
			titulo:'Noticia 5',
			descripcion:'Esta es la tarea n° 12',
			imagen: 'css-logo.png',
			completado:false	
		},
		{
			id:2,
			titulo:'Noticia 2',
			descripcion:'Esta es la tarea n° 12',
			imagen: 'java-logo.png',
			completado:false			
		},
		{
			id:1,
			titulo:'Noticia 1',
			descripcion:'Esta es la tarea n° 12',
			imagen: 'net-logo.jpg',
			completado:false			
		}

	];

	function buscarTarea(id, arrayDondeBuscar) {

		for (var i = 0; i < arrayDondeBuscar.length; i++) {
			
			if (arrayDondeBuscar[i].id === id) {
				return i;
			};

		}

		return false;

	}

	function renderizarTareas () {

		//Empezamos a recorrer nuestro array "peliculas" al podemos acceder ya que estamos dentro del módulo.
		for (var i = 0; i < tareas.length; i++) {
		
			renderizarTarea(tareas[i]);

		}

	} 

	return {
		init: function () {
			asignarEventos();
			restaurarTareas();
		}
	}

})()

ToDoList.init();