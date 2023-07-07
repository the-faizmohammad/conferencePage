const icon = document.querySelector('.nav-bar-icon');
const close = document.querySelector('.close-link');
const menuLink = document.querySelector('.mob-menu-links');
const nav = document.querySelectorAll('.bottom-nav-link');

icon.addEventListener('click', () => {
  menuLink.style.display = 'flex';
  icon.style.display = 'none';
  nav.forEach((n) => n.addEventListener('click', () => {
    menuLink.style.display = 'none';
    icon.style.display = 'block';
  }));
});

close.addEventListener('click', () => {
  menuLink.style.display = 'none';
  icon.style.display = 'block';
});

const aiLink = document.getElementById('ai');

function changeColor(event) {
  event.target.style.backgroundColor = 'orangered';
  event.target.style.color = 'white';
}

aiLink.addEventListener('click', changeColor);
