import "the-new-css-reset/css/reset.css";
import '../styles/main.scss';


const header = document.querySelector('.header')
const burger = header.querySelector('.burger')
const navigation = header.querySelector('.header__navigation')


burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active')
  navigation.classList.toggle('header__navigation--active')
})
