import"./main-bc5e3e1b.js";const s=document.querySelector(".swiper-wrapper");let c=[];function i(e){return`
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
          srcset="../../assets/images${e.images.landscape}" />
        <img src="../../assets/images${e.images.portrait}" alt="${e.name}" class="tech__image">
      </picture>
    </div>
  </div>
</div>
    `}async function o(){try{const e=await fetch("./assets/js/data.json");if(!e.ok)throw new Error("something is broken");return(await e.json()).technology}catch(e){console.log(e)}}window.addEventListener("DOMContentLoaded",async e=>{c=await o(),s.innerHTML="",c.forEach(t=>{const n=i(t);s.insertAdjacentHTML("beforeend",n)})});
