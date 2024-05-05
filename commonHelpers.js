import{a as v,S as w,A as g,i as u}from"./assets/vendor-05c5c2f5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const h=document.querySelector(".open-menu-btn"),L=document.querySelectorAll(".header-menu-item"),b=document.querySelector(".header-menu-list");h.addEventListener("click",p);L.forEach(e=>{e.addEventListener("click",p)});function p(){b.classList.toggle("slide")}const E="https://portfolio-js.b.goit.study/api/reviews";async function q(){const{data:e}=await v.get(`${E}`,{headers:{Accept:"application/json"},method:"Get"});return e}function m(e,t){return new w(e,t)}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".about-me-accordion-container");new g(e,{duration:400,openOnInit:[0],showMultiple:!0,beforeOpen:function(n){n.querySelector("use[href]").setAttribute("href","/portfolio/assets/icon-sprite-1e5406a1.svg#icon-arrow-up")},beforeClose:function(n){n.querySelector("use[href]").setAttribute("href","/portfolio/assets/icon-sprite-1e5406a1.svg#icon-arrow-down")}});const t=m(".about-me-swiper",{loop:!0,spaceBetween:0,slidesPerView:2,direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});document.querySelector(".about-me-slide-next-btn").addEventListener("click",n=>{t.slideNext()})});const S={navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!1},grabCursor:!0,slidesPerView:1,on:{slideChange:function(){a.isEnd?a.navigation.nextEl.classList.add("swiper-button-disabled"):a.navigation.nextEl.classList.remove("swiper-button-disabled"),a.isBeginning?a.navigation.prevEl.classList.add("swiper-button-disabled"):a.navigation.prevEl.classList.remove("swiper-button-disabled")}}},k=document.querySelector(".swiper"),a=m(k,S);class B{constructor(t){this.element=t,this.content=this.element.querySelector(".faq-ac-panel"),this.arrow=this.element.querySelector(".faq-btn"),this.element.addEventListener("click",()=>this.toggle()),this.content.style.display="none"}toggle(){this.element.classList.toggle("active"),this.content.style.display=this.content.style.display==="block"?"none":"block",this.arrow.style.transform=this.arrow.style.transform==="rotate(0.5turn)"?"none":"rotate(0.5turn)"}}document.addEventListener("DOMContentLoaded",x);function x(){document.querySelectorAll(".faq-ac").forEach(t=>new B(t))}document.getElementById("animation");function C(e){let t=e.getBoundingClientRect();return t.top>=0&&t.bottom<=window.innerHeight||t.bottom>=0&&t.top<=window.innerHeight}function f(){let e=document.querySelector(".marquee");C(e)?e.querySelectorAll(".marquee__line").forEach(function(r){r.classList.add("animate-covers")}):e.querySelectorAll(".marquee__line").forEach(function(r){r.classList.remove("animate-covers")})}document.addEventListener("DOMContentLoaded",f);window.addEventListener("scroll",f);const A=document.querySelector(".swiper_js"),_=document.querySelector(".swiper_reviews"),O=document.querySelector(".placeholder_text"),P={navigation:{nextEl:".end",prevEl:".start"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},mousewheel:{sensitivity:1}};async function I(){try{const e=await q();_.insertAdjacentHTML("beforeend",M(e)),m(A,P)}catch{O.classList.replace("visually-hidden","title_not_found"),u.show({message:"Reviews Not found",backgroundColor:"#ed3b44",messageColor:"#fafafa",position:"topRight",timeout:2e3})}}function M(e){return e.map(({author:t,avatar_url:r,review:n})=>`
      <ul class="swiper-slide reviews_cards">
      <li class="card">
      <img class="card_img" src="${r}" alt="photo">
      <h3 class="card_title">${t}</h3>
      <p class="card_text">${n}</p> 
    </li>
    </ul>
    `).join("")}I();const c=document.querySelector(".modal-backdrop"),V=document.getElementById("form-box");V.addEventListener("submit",N);function N(e){e.preventDefault();const t=document.querySelector('input[name="email"]'),r=document.querySelector('input[name="comment"]'),n=document.querySelector(".lwt-wrapper.com"),o=document.querySelector(".lwt-wrapper.mail");if(!t.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){n.classList.add("invalid"),o.classList.add("invalid"),n.classList.remove("success"),o.classList.remove("success"),u.error({title:"Error",message:"Invalid data, try again!",maxWidth:300,progressBar:!0,position:"bottomRight",color:"#1c1d20",backgroundColor:"#ed3b44"});return}const s={email:t.value,comment:r.value};fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(i=>{if(i.ok)n.classList.add("success"),o.classList.add("success"),n.classList.remove("invalid"),o.classList.remove("invalid"),c.classList.remove("visually-hidden"),document.getElementsByClassName("form")[0].reset();else{n.classList.add("invalid"),o.classList.add("success"),n.classList.remove("success"),o.classList.remove("invalid"),u.error({title:"Error",message:"Something is wrong, try again!",maxWidth:300,progressBar:!0,position:"bottomRight",color:"#1c1d20",backgroundColor:"#ed3b44"});return}}).catch(i=>{console.error("Error:",i)})}const l=document.getElementsByName("email")[0];l.addEventListener("input",function(){const e=l.offsetWidth/8,t=l.value;t.length>e&&(l.value=t.substring(0,e)+"...")});const j=document.querySelector(".modal-close-btn");j.addEventListener("click",()=>c.classList.add("visually-hidden"));c.addEventListener("click",()=>{event.target===c&&c.classList.add("visually-hidden")});document.addEventListener("keydown",e=>{e.key==="Escape"&&c.classList.add("visually-hidden")});const R=document.querySelector(".open-modal-btn"),$=document.querySelector(".close-modal-btn"),z=document.querySelectorAll(".modal-item-link"),y=document.querySelector(".modal-window-cont"),T=document.querySelector(".menu-order-btn");R.addEventListener("click",d);$.addEventListener("click",d);T.addEventListener("click",d);z.forEach(e=>{e.addEventListener("click",d)});function d(){y.classList.toggle("is-open"),document.body.classList.toggle("menu-is-open")}document.addEventListener("keydown",e=>{e.code==="Escape"&&y.classList.remove("is-open")});
//# sourceMappingURL=commonHelpers.js.map