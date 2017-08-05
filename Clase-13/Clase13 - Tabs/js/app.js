/*

EJERCICIO N°3
Crear un componente de tabs con jQuery

*/
(function() {
  // Comportamiento click.
  $('.tab').click(function() {
    if(!$(this).hasClass()) {

      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      
      var id = this.id;
      var numero = id.split('-')[1];

      $('.content').hide();
      $('#content-' + numero).show();
    }
  });
  $('#tab-0').click();
})()
