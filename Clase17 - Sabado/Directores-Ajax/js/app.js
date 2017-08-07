/*

EJERCICIO N°3

- Hacer un componente que importe html
- Al hacer click en la imagen de cada director, haremos una llamada ajax a un archivo que contiene su biografía.
- Una ves que tengamos el Html, deberemos incluirlo en nuestra página.
- Si hacemos click en otro director, debemos cargar su información en la "descripción"

*/

(function() {
  //Por buenas practicas encapsulamos todo en una funcion que se autoinvoca (Evitamos variables globales)

  $(document).ready(function() {
    //Ejecutamos nuestro programa una vez que todos los elementos del DOM terminaron de cargar

    $('li').click(function(event) {
      // Adjuntamos el evento "click" a cada una de los elementos contenedores de las imagenes de los directores.

      var nombreDelArchivo = $(this).attr('data-attr'); //Obtenemos el nombre del archivo que tenemos que traer

      $.ajax({
        // Hacemos nuestro llamado ajax
        type: 'GET',
        dataType: 'html', // En este caso traeremos un html
        url: 'includes/' + nombreDelArchivo, // La ruta que queremos traer a nuestra página será una concatenación entre la carpeta base y el nombre del archivo
        success: function(data) {
          console.log(data);
          $('.descripcion').html(data); // Una vez que tenemos el archivo correcto, reemplazamos el html de la descripción
        },
        error: function(data) {
          console.log(data);
          console.log('Could not find the file.');
        }
      });
    });
  });
})();

/* Lo mas importante es tener en cuenta de que cada vez que hagamos click en una imagen, el "This" cambia
por el elemento que hice click, y por lo tanto cambia el data-attr*/
