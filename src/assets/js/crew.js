const slide = document.querySelector('.crew-swiper__slide')
const slider = document.querySelector('.crew-swiper__wrapper')
let crew = []

function addContent(data, slide) {
  const newSlide = slide.cloneNode(true)
  const name = newSlide.querySelector('.crew-swiper__title')
  const role = newSlide.querySelector('.crew-swiper__subtitle')
  const image = newSlide.querySelector('.crew-swiper__image')
  const bio = newSlide.querySelector('.crew-swiper__text')

  image.src = `../../assets/images/${data.images.webp}`
  name.innerHTML = data.name
  role.innerHTML = data.role
  bio.innerHTML = data.bio

  return newSlide
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
    const node = addContent(member, slide)
    slider.append(node)
  })
});
