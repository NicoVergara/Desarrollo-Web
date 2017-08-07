/*

EJERCICIO N°2

Fun with flags!!

- En nuestra carpeta tenemos un archivo .json en donde encontramos mucha información sobre banderas de paises.
- Traer esa información con ajax y renderizar todas las banderas con el nombre de cada país a su lado.
- IMPORTANTE: ver como recorrer una base de datos mucho más compleja.


*/

function renderizarPaises(arrayDePaises) {
  console.log(arrayDePaises);

  for (var i = 0; i < arrayDePaises.length; i++) {
    console.log(arrayDePaises[i].name);
    var pais = $('<section></section>');
    var nombrePais = $('<span>' + arrayDePaises[i].name + '</span>');
    pais.append(nombrePais);

    var imagen = $('<img/>');
    imagen.attr('src', 'img/flags/' + arrayDePaises[i].flag.src);
    pais.append(imagen);

    var link = $('<a></a>');
    link.attr('href', arrayDePaises[i].locale.url.display);
    link.append(pais);

    $('.container').append(link);
  }
}

$(document).ready(function() {
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'json/flags.json',
    success: function(data) {
      console.log(data);
      console.log('Ingreso');

      var paises = data.countries.country;
      renderizarPaises(paises);
    },
    error: function(data) {
      console.log('No ingreso');
      console.log(data);
    }
  });
});
