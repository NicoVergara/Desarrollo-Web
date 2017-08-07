/*

EJERCICIO N°6

	Crear un componente con 3 radio buttons que hagan cambiar de color al auto
  1. Capturar los input radio.
  2. Agregar el evento onchange.
  3. Cambiar el atributo src en la imangen.

*/

var botones = $('input[type="radio"]');

botones.change(function(event) {
  var imagen = $('.image-container img');
  var nombreImagen = this.value;

  imagen.fadeOut('slow', function() {
    imagen.attr('src', 'img/' + nombreImagen + '.png');
    imagen.fadeIn();
  });
})
