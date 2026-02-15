const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (toggleButton && menu) {
  toggleButton.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach((item) => {
    item.addEventListener('click', () => menu.classList.remove('open'));
  });
}
