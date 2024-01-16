import 'swiper/css/bundle';
import "the-new-css-reset/css/reset.css";
import '../styles/main.scss';


const header = document.querySelector('.header')
const burger = header.querySelector('.burger')
const navigation = header.querySelector('.header__navigation')


burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active')
  navigation.classList.toggle('header__navigation--active')
})


navigation.querySelectorAll('.header__link').forEach((link) => {
  const path = window.location.pathname
  if (link.href.includes(path) && path != '/') link.classList.add('header__link--active')
  if (!link.href.includes(path) && link.classList.contains('header__link--active')) link.classList.remove('header__link--active')
})
