import{a as u,S as f,i}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",m="51328495-a86ced526e026cbb82b9515b0";async function y(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(d,{params:o})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");let p=new f(".gallery a");function g(s){const o=s.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <ul class="image-info">
        <li>👍 ${t.likes}</li>
        <li>👁️ ${t.views}</li>
        <li>💬 ${t.comments}</li>
        <li>⬇️ ${t.downloads}</li>
      </ul>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",o),p.refresh()}function h(){l.innerHTML=""}function L(){c.classList.add("visible")}function b(){c.classList.remove("visible")}const w=document.querySelector(".form"),S=document.querySelector('input[name="search-text"]');w.addEventListener("submit",async s=>{s.preventDefault();const o=S.value.trim();if(!o){i.warning({message:"Please enter a search query."});return}h(),L();try{const t=await y(o),{hits:a}=t;a.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!"}):g(a)}catch{i.error({message:"Something went wrong. Please try again later."})}finally{b()}});
//# sourceMappingURL=index.js.map
