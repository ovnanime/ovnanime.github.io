document.addEventListener('DOMContentLoaded', function() {
  // Загружаем меню
  fetch('menu.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('menu-container').innerHTML = html;
    })
    .catch(error => console.error('Ошибка загрузки меню:', error));
  
  // Загружаем футер
  fetch('footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer-container').innerHTML = html;
    })
    .catch(error => console.error('Ошибка загрузки футера:', error));
});