// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle

// import '../styles/crewTwo.scss';

const slider = document.querySelector('.crew-swiper__wrapper')
let crew = []

function addContent(data) {

  const heading = document.querySelector('.crew__title-main')
  const headingBottom = heading.getBoundingClientRect().bottom
  const slideHeight = (window.innerHeight - headingBottom - 1) + 'px'

  const html = `
<div class="swiper-slide crew__slide">
<div class="crew__slide-wrapper" style="min-height: ${slideHeight}">
      <h2 class="crew__title"><span class="crew__subtitle">${data.role}</span><br>${data.name}</h2>
      <p class="crew__description">
      ${data.bio}
      </p>

      <img src="${data.images.webp}" alt="${data.name}" class="crew-swiper__image crew__image">
      </div>
</div>
    `
  return html
}

async function loadCrew() {
  try {
    const response = await fetch('./data.json')
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
        return '<span class="crew__pagination-item ' + className + ' ">' + "</span>";
      },
    },
  });
});





