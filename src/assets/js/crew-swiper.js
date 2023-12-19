// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
import '../styles/crewSwiper.scss';

const slider = document.querySelector('.crew-swiper__wrapper')
let crew = []

function addContent(data) {
  const html = `
<div class="swiper-slide crew-swiper__slide">
  <div class="crew-swiper__slide-wrapper">
    <div class="crew-swiper__content">
      <h3 class="crew-swiper__subtitle">${data.role}</h3>
      <h2 class="crew-swiper__title">${data.name}</h2>
      <p class="destination__text crew-swiper__text">
      ${data.bio}
      </p>
    </div>
    <div class="crew-swiper__picture">
      <img src="${data.images.webp}" alt="${data.name}" class="crew-swiper__image">
    </div>
  </div>
</div>
    `
  return html
}

async function loadCrew() {
  try {
    const response = await fetch('/data.json')
    if (!response.ok) throw new Error('something is broken')
    const data = await response.json()
    if (data.Response === 'False') throw new Error('Movie not found')
    return data.crew
  } catch (err) {
    if (err.name !== 'AbortError') {
      console.log(err)
    }
  }
}

window.addEventListener("DOMContentLoaded", async (event) => {
  crew = await loadCrew()
  slider.innerHTML = ''
  crew.forEach((member) => {
    const node = addContent(member)
    slider.insertAdjacentHTML("beforeend", node)
  })

  const swiper = new Swiper(".crew-swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="crew-swiper__pagination-item ' + className + ' ">' + "</span>";
      },
    },
  });

});





