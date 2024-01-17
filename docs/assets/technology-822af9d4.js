import"./main-e9b9f3ac.js";const o=document.querySelector(".swiper-wrapper");let i=[];function s(e){return`
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
    `}async function r(){try{const e=await fetch("./data.json");if(!e.ok)throw new Error("something is broken");return(await e.json()).technology}catch(e){console.log(e)}}window.addEventListener("DOMContentLoaded",async e=>{if(i=await r(),o.innerHTML="",i.forEach(t=>{const n=s(t);o.insertAdjacentHTML("beforeend",n)}),500<window.screen.width&&window.screen.width<760){const n=document.querySelector(".tech__picture").getBoundingClientRect().bottom,c=document.querySelector(".tech__pagination");console.log(c),c.style.top=n+50+"px"}});
