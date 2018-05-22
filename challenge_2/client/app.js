$('button').click( function(event) {
  event.preventDefault();
  $.ajax({
      url: 'http://127.0.0.1:3000',
      type: 'post',
      dataType: 'json',
      data: $('form#Submit').serialize(),
      success: function(data) {
        console.log('Sent to get converted!')
      }

  });
});