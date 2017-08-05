/*

EJERCICIO N°1 - Anclas con efectos:
"Hacer anclas con efectos a todas las secciones:"

- Crear un ancla que vaya al footer
- Crear un ancla que vaya desde el footer hasta la parte de arriba de la pagina.
- Crear anclas customizadas que vayan a distintas secciones

- Utilizar los efectos animate y scrollTo.

*/

// Seleccionar el botón.
// Funcionalidad click.
// Event Handler.
$(document).ready(function() {

  $('#to-top').on('click', function() {
    console.log('click');
    $('body').animate({
      scrollTop: 0
      },
      1000,
      function() {
        // Callback
        console.log('Llegue')
    })
  });

  $('a.btn').click(function(event) {
    event.preventDefault();

    var redirigir = $(this).attr('href');
    var posicionNueva = $('#' + redirigir).position().top;

    $('body').animate({
      scrollTop: posicionNueva
    }, 1000);
  });
})
