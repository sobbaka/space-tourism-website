const slider = document.querySelector('.crew-swiper__wrapper')
let crew = []

function addContent(data) {
  const html = `
    <div class="swiper-slide crew-swiper__slide">
      <div class="crew-swiper__content">
        <div class="crew-swiper__member">
          <h3 class="crew-swiper__subtitle">${data.role}</h3>
          <h2 class="crew-swiper__title">${data.name}</h2>
          <p class="crew-swiper__text">
          ${data.bio}
          </p>
        </div>
      </div>
      <div class="crew-swiper__picture">
        <img src="../../assets/images/${data.images.webp}" alt="${data.name}" class="crew-swiper__image">
      </div>
    </div>
    `
  return html
}

async function loadCrew() {
  try {
    const response = await fetch('./assets/js/data.json')
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
});
