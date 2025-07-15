import{a as f,S as d,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const m="https://pixabay.com/api/",y="твій_ключ_тут";async function p(s){const o={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(m,{params:o})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");let g=new d(".gallery a");function h(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <ul class="image-info">
        <li>👍 ${e.likes}</li>
        <li>👁️ ${e.views}</li>
        <li>💬 ${e.comments}</li>
        <li>⬇️ ${e.downloads}</li>
      </ul>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){l.innerHTML=""}function b(){c.classList.add("visible")}function w(){c.classList.remove("visible")}const u=document.querySelector(".form"),S=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async s=>{s.preventDefault();const o=S.value.trim();if(!o){n.error({message:"Please enter a search query!"});return}b(),L();try{const e=await p(o);e.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!"}):h(e.hits)}catch(e){n.error({message:"Something went wrong. Try again later."}),console.error(e)}finally{w()}});
//# sourceMappingURL=index.js.map
