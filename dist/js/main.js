(()=>{"use strict";const e=e=>{let t=!0;return e.forEach((e=>{switch(e.classList.remove("error"),e.getAttribute("name")){case"user_name":if(!e.value.match(/[a-яA-я]{2}/gi)){e.style.border="2px solid red";break}return e.style.border="",void e.classList.remove("error");case"user_email":if(!e.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){e.style.border="2px solid red";break}return e.style.border="",void e.classList.remove("error");case"user_phone":if(!e.value.match(/^((\+7|7|8)+\(?([0-9]){3}\)?)(\-?([0-9]){3})(\-?([0-9]){2}){2}$/g)){e.style.border="2px solid red";break}return e.style.border="",void e.classList.remove("error");default:return}e.classList.add("error"),t=!1})),t},t=({formId:t,someElem:r=[]})=>{const o=document.getElementById(t),a=document.createElement("div");o.querySelectorAll("input").forEach((e=>{e.removeAttribute("required")}));try{if(!o)throw new Error("Пожалуйста, верните форму на место");o.addEventListener("submit",(t=>{t.preventDefault(),(()=>{const t=o.querySelectorAll("input"),n=new FormData(o),c={};var l;a.textContent="Загрузка...",o.append(a),n.forEach(((e,t)=>{"user_message"===t&&""===e||(c[t]=e)})),r.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type&&0!=t.textContent?c[e.id]=t.textContent:"input"===e.type&&""!=t.value&&(c[e.id]=t.value)})),(t=>{let r=!0;return e(t),t.forEach((e=>{e.classList.contains("error")&&(r=!1)})),r})(t)?(l=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(l),headers:{"Content-type":"application/json"}}).then((e=>e.json()))).then((e=>{a.textContent="Спасибо! Наш менеджер с Вами свяжется.",setTimeout((()=>{a.remove()}),3e3),t.forEach((e=>{e.value=""}))})).catch((e=>{a.textContent="Ошибка"})):(a.style.color="white",a.textContent="Некорректный ввод",setTimeout((()=>{a.remove()}),3e3))})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.querySelector("#timer-hours"),r=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds"),a=()=>{let e=(()=>{let e=new Date("19 january 2023").getTime(),t=(new Date).getTime(),r=(e-t)/1e3,o=Math.floor(r/60/60),a=Math.floor(r/60%60),c=Math.floor(r%60);return o=o.toString().padStart(2,"0"),a=a.toString().padStart(2,"0"),c=c.toString().padStart(2,"0"),e<t&&(clearInterval(n),o="00",a="00",c="00"),{timeRemaining:r,hours:o,minutes:a,seconds:c}})();t.textContent=e.hours,r.textContent=e.minutes,o.textContent=e.seconds,0===e.timeRemaining&&clearInterval(n)};a();let n=setInterval(a,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),r=function(){t.classList.toggle("active-menu")};t.addEventListener("click",(e=>{(e.target.classList.contains("close-btn")||e.target.matches("a"))&&r()})),e.addEventListener("click",r)})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),r=document.querySelectorAll(".popup-btn");let o=document.documentElement.clientWidth;r.forEach((r=>{r.addEventListener("click",(()=>{o<768?e.style.display="block":(t.style.transform="translateX(-150%)",function({timing:e,draw:t,duration:r}){let o=performance.now();requestAnimationFrame((function a(n){let c=(n-o)/r;c>1&&(c=1);let l=e(c);t(l),c<1&&requestAnimationFrame(a)}))}({duration:800,timing:e=>e,draw(r){e.style.display="block",t.style.transform=`translateX(-${150-135*r}%)`,t.style.left=""+50*r,e.style.width=100*r+"%"}}))}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),(()=>{const t=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),o=document.querySelector(".calc-day"),a=document.querySelectorAll(".form-name"),n=document.querySelectorAll(".form-email"),c=document.querySelectorAll(".form-phone"),l=document.querySelector(".mess");t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D/,"")})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D/,"")})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D/,"")})),c.forEach((function(t){t.addEventListener("input",(r=>{r.target.value=r.target.value.replace(/[^0-9()+\-]/,""),r.target.value=r.target.value.replace(/\*/,""),t.classList.contains("error")&&e([t])}))})),n.forEach((function(t){t.addEventListener("input",(r=>{r.target.value=r.target.value.replace(/[^a-zA-Z0-9@-_.!~*']/,""),t.classList.contains("error")&&e([t])}))})),a.forEach((function(t){t.addEventListener("input",(r=>{r.target.value=r.target.value.replace(/[^а-яА-Я0-9a-z? !]/,""),t.classList.contains("error")&&e([t])}))})),l.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я?!,. ]/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),r=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),r[t].classList.remove("d-none")):(e.classList.remove("active"),r[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),r=document.querySelector(".portfolio-dots");let o,a=0,n=document.querySelectorAll(".dot");const c=function(e,t,r){e[t].classList.add(r)},l=function(e,t,r){e[t].classList.remove(r)},s=function(){l(t,a,"portfolio-item-active"),l(n,a,"dot-active"),a++,a>=t.length&&(a=0),c(t,a,"portfolio-item-active"),c(n,a,"dot-active")},i=function(e=1500){o=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(l(t,a,"portfolio-item-active"),l(n,a,"dot-active"),e.target.matches("#arrow-right")?a++:e.target.matches("#arrow-left")?a--:e.target.classList.contains("dot")&&n.forEach((function(t,r){e.target===t&&(a=r)})),a>=t.length&&(a=0),a<0&&(a=t.length-1),c(t,a,"portfolio-item-active"),c(n,a,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(o)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),function(){for(let e=0;e<t.length;e++){const e=document.createElement("li");e.classList.add("dot"),r.append(e)}n=document.querySelectorAll(".dot"),n[0].classList.add("dot-active")}(),i(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),r=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),c=document.querySelector("#total");t.addEventListener("input",(t=>{t.target!==r&&t.target!==o&&t.target!==a&&t.target!==n||function(){const t=+r.options[r.selectedIndex].value,l=o.value;let s=1,i=1,u=0;a.value>1&&(s+=+a.value/10),n.value&&n.value<5?i=2:n.value&&n.value<10&&(i=1.5),u=r.value&&o.value?e*t*l*s*i:0,c.textContent=u}()}))})(100),t({formId:"form1",someElem:[{type:"block",id:"total"}]}),t({formId:"form2",someElem:[{type:"block",id:"total"}]}),t({formId:"form3",someElem:[{type:"block",id:"total"}]})})();