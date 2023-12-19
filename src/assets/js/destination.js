
let planets = []

const image = document.querySelector('.destination__image')
const namePlanet = document.querySelector('.destination__title-planet')
const description = document.querySelector('.destination__text')
const distance = document.querySelector('.destination__distance')
const travel = document.querySelector('.destination__travel')
const tabs = document.querySelector('.tabs')

function renderTabs(data) {
  const planets = data.map((planet, index) => `<li class="tabs__items ${index === 0 && 'tabs__items--active'} ">${planet.name.toUpperCase()}</li>`)
  tabs.innerHTML = planets.join('')
}

function addContent(data) {
  image.src = `${data.images.webp}`
  namePlanet.innerHTML = data.name
  description.innerHTML = data.description
  distance.innerHTML = data.distance
  travel.innerHTML = data.travel
}

async function loadPlanets() {
  try {
    const response = await fetch('./data.json')
    if (!response.ok) throw new Error('something is broken')
    const data = await response.json()
    if (data.Response === 'False') throw new Error('Movie not found')
    return data.destinations
  } catch (err) {
    if (err.name !== 'AbortError') {
      console.log(err)
    }
  }
}

window.addEventListener("load", async (event) => {
  planets = await loadPlanets()
  renderTabs(planets)
  tabs.querySelectorAll('.tabs__items').forEach((tab) => {
    tab.addEventListener('click', (e) => {
      tabs.querySelector('.tabs__items--active').classList.remove('tabs__items--active')
      tab.classList.add('tabs__items--active')
      const planetDetail = planets.find((item) => tab.innerHTML.toLowerCase() === item.name.toLowerCase())
      addContent(planetDetail)
    })
  })
});



