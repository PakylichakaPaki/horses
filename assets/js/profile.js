function loadDataFromLocalStorage() {
    var storedData = localStorage.getItem('userData');
    if (storedData) {
      var userData = JSON.parse(storedData);
      document.getElementById('address').value = userData.address || '';
      document.getElementById('email').value = userData.email || '';
      document.querySelector('.name_a').textContent = (userData.surname + ' ' + userData.name) || '';
    }
  }
  
  // Функция для сохранения данных в localStorage
  function saveDataToLocalStorage() {
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    var userData = {
      address: address,
      email: email,
      password: password
    };
  
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Регистрация прошла успешно');
  }
  
  // Добавляем обработчики событий при загрузке страницы и нажатии кнопки "Сохранить"
  document.addEventListener('DOMContentLoaded', loadDataFromLocalStorage);
  document.querySelector('.btn_box').addEventListener('click', saveDataToLocalStorage);
  