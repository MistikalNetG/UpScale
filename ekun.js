document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      var name = document.getElementById('name').value;
      var phone = document.getElementById('Phone').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;

      if (name && phone && email && message) {
        
        var confirmationMessage = 'Ваше повідомлення надіслано!\n\nДеталі:\nІм’я: ' + name + '\nТелефон: ' + phone + '\nEmail: ' + email + '\nПовідомлення: ' + message;
        alert(confirmationMessage);
        
      } else {
        alert('Будь ласка, заповніть всі поля форми.');
      }
    });
  });
