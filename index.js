import{a as f,S as d,i as l}from"./assets/vendor-BK_rxH-O.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p="51687236-e99e958891c77c47ce6f4e325",m="https://pixabay.com/api/";function y(t){return f.get(m,{params:{key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}let n=null;function g(t){const s=document.querySelector(".gallery"),i=t.map(o=>`
        <li class='gallery-item'>
            <a href='${o.largeImageURL}'>
                <img class='gallery-img' src='${o.webformatURL}' alt='${o.tags}'>
                <ul class='gallery-item-info'>
                    <li class='text-info'>Likes<span class='text-info-data'>${o.likes}</span></li>
                    <li class='text-info'>Views<span class='text-info-data'>${o.views}</span></li>
                    <li class='text-info'>Comments<span class='text-info-data'>${o.comments}</span></li>
                    <li class='text-info'>Downloads<span class='text-info-data'>${o.downloads}</span></li>
                </ul>
            </a>
        </li>
    `).join("");s.innerHTML=i,n?n.refresh():n=new d(".gallery a",{})}function h(){document.querySelector(".gallery").innerHTML=""}function L(){var t;(t=document.querySelector(".loader"))==null||t.classList.remove("hidden")}function c(){var t;(t=document.querySelector(".loader"))==null||t.classList.add("hidden")}const u=document.querySelector("form");u.addEventListener("submit",t=>{t.preventDefault();const s=u.querySelector("input");L(),h(),y(s.value).then(i=>{if(c(),i.hits.length===0){l.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"bottomCenter"});return}g(i.hits),console.log(i.hits)}).catch(i=>{c(),l.error({title:"Error happened"}),console.log(i)})});
//# sourceMappingURL=index.js.map
