$(function () {
    $('.link').on('mouseenter', function () {
      if ($('.tooltip').is(':visible')) {
          $('.tooltip').hide();
      }
      $(this).next().show();
    });
    $('.tooltip').on('mouseout', function () {
      $(this).hide();
    });
})
