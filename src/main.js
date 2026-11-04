import './styles/main.less';

// Menú móvil: el botón "+" abre/cierra los links del navbar
const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Año actual en el footer
const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
