const slider = document.querySelector('.swiper-wrapper')
let technology = []

function addContent(data) {
  const html = `
  <div class="swiper-slide">
  <div class="tech__columns">
    <div class="tech__column tech__description">
      <h3 class="content__subtitle tech__subtitle">THE TERMINOLOGY…</h3>
      <h2 class="tech__title content__title">${data.name}</h2>
      <p class="content__text tech__text">${data.description}</p>
    </div>
    <div class="tech__column tech__picture">
      <picture>
        <source media="(max-width: 980px)"
          srcset="../../assets/images${data.images.landscape}" />
        <img src="../../assets/images${data.images.portrait}" alt="${data.name}" class="tech__image">
      </picture>
    </div>
  </div>
</div>
    `
  return html
}

async function loadTechnology() {
  try {
    const response = await fetch('./assets/js/data.json')
    if (!response.ok) throw new Error('something is broken')
    const data = await response.json()
    return data.technology
  } catch (err) {
    console.log(err)
  }
}

window.addEventListener("DOMContentLoaded", async (event) => {
  technology = await loadTechnology()
  slider.innerHTML = ''
  technology.forEach((member) => {
    const node = addContent(member)
    slider.insertAdjacentHTML("beforeend", node)
  })
});
