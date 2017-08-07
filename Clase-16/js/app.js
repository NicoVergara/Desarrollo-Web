$('button').click(function() {
  $.ajax({
    url: 'datos.json',
    dataType: 'json',
    success: function(data) {
      var quotes = data.quotes;

      var i = Math.floor(Math.random() * quotes.length);
      var id = quotes[i].ID;
      var titulo = quotes[i].title;
      var quote = quotes[i].content;
      var link = quotes[i].link;
      console.log(id);

      // Mostrar QUOTES
    },
    error: function(data) {
      console.log(data);
      console.log('Error');
    }
  });
});
