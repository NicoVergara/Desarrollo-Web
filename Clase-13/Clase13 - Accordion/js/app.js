/*

EJERCICIO N°3

Armar un accordión utilizando jQuery que posea 4 secciones: Primavera, Verano, Otoño e invierno

*/
$('.accordion-content').hide();

$('.accordion-header').on('click', function() {
  var section = $(this).parent();
  var contenido = $(this).siblings();
  if(!section.hasClass('active')) {
    // Abrir el accordion.
    contenido.slideDown();
    section.addClass('active');

    // Cerrar section hermanos.
    cerrarHermanos(section);
  } else {
    // Cierro el accordion.
    contenido.slideUp();
    section.removeClass('active');
  }
});

function cerrarHermanos(section) {
  // Agarrar los hermanos de esa section.
  var hermanos = section.siblings();
  // Sacarle la clase active.
  hermanos.removeClass('active');
  // Ocultar su contenido.
  hermanos.find('.accordion-content').hide();
}
