document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.burger-button');
  const mainNav = document.querySelector('.main-nav');
  const menuLinks = document.querySelectorAll('.menu-link');
  
  // Открытие/закрытие меню
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
    mainNav.classList.toggle('active');
  });
  
  // Закрытие меню при клике на ссылку
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerButton.classList.remove('active');
      mainNav.classList.remove('active');
    });
  });
  
  // Закрытие меню при клике вне области
  document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !burgerButton.contains(e.target)) {
      burgerButton.classList.remove('active');
      mainNav.classList.remove('active');
    }
  });
  
  // Закрытие меню при ресайзе окна
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      burgerButton.classList.remove('active');
      mainNav.classList.remove('active');
    }
  });
});
