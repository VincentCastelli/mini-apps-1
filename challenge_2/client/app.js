let sendData = (data) => {
  $('#submit').on('click', (event) => {
    event.preventDefault();
    $.ajax({
        url: 'http://127.0.0.1:3000',
        type: 'post',
        contentType: 'application/json',
        data: data,
        success: (data) => {
          $('#result').append(data);
        }
    });
  });
};
