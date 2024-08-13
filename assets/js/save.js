document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
  
    // Получаем значения полей формы
    var surname = document.getElementById('surname').value;
    var name = document.getElementById('name').value;
    var number_phone = document.getElementById('number_phone').value;
    var email = document.getElementById('email').value;
  
    // Создаем объект с данными пользователя
    var userData = {
      surname: surname,
      name: name,
      number_phone: number_phone,
      email: email
    };
  
    // Сохраняем объект в localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
  
    // Опционально: очищаем поля формы
    document.getElementById('myForm').reset();
  
    alert('Регистрация прошла успешно!');
  });


  document.querySelector('.btn_box').addEventListener('click', function() {
  
    window.location.href = 'Profile.html';
  });