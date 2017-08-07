/*

EJERCICIO N°1

Nuestro primer ajax :)

- Traer hacia nuestro html la información de colores.json utilizando ajax
- Crear una seccion que tenga cada uno de los colores del json de fondo, agregando los estilos en linea.

*/

$.ajax({
  type: 'GET', // Hacemos un pedido de informacion
  dataType: 'json', // El tipo de datos que vamos a traer es un json
  url: 'js/colores.json', // URL del lugar donde queremos acceder
  success: function(data) {
    // Funcion que se ejecuta si no hbubo ningun error en la request

    var colores = data.colorsArray;
    for (var i = 0; i < colores.length; i++) {
      console.log(colores[i]);

      // Crear el elemento.
      var section = $('<section></section>');
      // Agregarle Texto.
      section.text(colores[i].colorName);
      // Agregarle estilo de color en línea.
      section.css('background-color', colores[i].hexValue);
      // Appendear.
      $('.container').append(section);
    }
  },
  error: function(data) {
    // Esta funcion se ejecuta en caso de que haya habido algun error al hacer el "get" de la informacion.

    console.log('BUUUUU!!');
    console.log(data);
  }
});
