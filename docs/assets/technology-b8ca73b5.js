import"./main-bc5e3e1b.js";const c=document.querySelector(".swiper-wrapper");let n=[];function o(e){return`
  <div class="swiper-slide">
  <div class="tech__columns">
    <div class="tech__column tech__description">
      <h3 class="content__subtitle tech__subtitle">THE TERMINOLOGY…</h3>
      <h2 class="tech__title content__title">${e.name}</h2>
      <p class="content__text tech__text">${e.description}</p>
    </div>
    <div class="tech__column tech__picture">
      <picture>
        <source media="(max-width: 980px)"
          srcset="${e.images.landscape}" />
        <img src="${e.images.portrait}" alt="${e.name}" class="tech__image">
      </picture>
    </div>
  </div>
</div>
    `}async function i(){try{const e=await fetch("./data.json");if(!e.ok)throw new Error("something is broken");return(await e.json()).technology}catch(e){console.log(e)}}window.addEventListener("DOMContentLoaded",async e=>{n=await i(),c.innerHTML="",n.forEach(t=>{const s=o(t);c.insertAdjacentHTML("beforeend",s)})});
