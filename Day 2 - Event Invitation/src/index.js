import style from "./scss/main.scss";

const preloader = document.querySelector('.preload');

window.addEventListener('load', function() {
  preloader.classList.add('visible');
});