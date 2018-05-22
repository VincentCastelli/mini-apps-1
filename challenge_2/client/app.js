$('button').click( function() {
  $.ajax({
      url: 'http://127.0.0.1:3000',
      type: 'post',
      dataType: 'json',
      data: $('form').serialize(),
      success: function(data) {
                console.log('Sent to get converted!')
               }
  });
});