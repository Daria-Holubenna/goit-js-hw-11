import{a as u,S as f,i as d}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();function m(o){return u.defaults.baseURL="https://pixabay.com/api/",u.get("",{params:{key:"50295834-c918df4fa87d72bde5e1e5104",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}}).then(function(r){if(r.status!==200)throw new Error(`HTTP error! status: ${r.status}`);return r.data}).catch(function(r){console.log(r)}).finally(function(){})}new f(".some-element a",{});const p=document.querySelector(".gallery");let y=new f(".gallery a");function h(o){const r=o.map(e=>`<li>
    <a href=${e.largeImageURL} title=${e.tags}>
    <img src=${e.webformatURL} 
    alt=${e.tags} width="450"
    />
    </a>
    <div class="gallery-img">
    <p>${e.likes}</p>
    <p>${e.views}</p>
    <p>${e.comments}</p>
    <p>${e.downloads}</p>
     </div>
    </li>`).join("");p.insertAdjacentHTML("beforeend",r),y.refresh()}function g(){p.innerHTML=""}function b(){const o=document.querySelector(".loader");o&&(o.style.display="inline-block")}function a(){const o=document.querySelector(".loader");o&&(o.style.display="none")}const L=document.querySelector(".form"),i=document.querySelector('input[name="search-text"]'),l=document.querySelector('button[type="submit"]');l.disabled=i.value.trim()==="";i.addEventListener("input",()=>{l.disabled=i.value.trim()===""});L.addEventListener("submit",o=>{o.preventDefault();const r=i.value.trim();if(r===""){l.disabled=!0;return}g(),b(),m(r).then(e=>{a(),e.hits&&e.hits.length>0?h(e.hits):d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(e=>{d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),console.error(e),a()})});a();
//# sourceMappingURL=index.js.map
