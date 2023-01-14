(()=>{"use strict";(e=>{const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds"),r=()=>{let e=(()=>{let e=new Date("19 january 2023").getTime(),t=(new Date).getTime(),o=(e-t)/1e3,n=Math.floor(o/60/60),r=Math.floor(o/60%60),c=Math.floor(o%60);return n=n.toString().padStart(2,"0"),r=r.toString().padStart(2,"0"),c=c.toString().padStart(2,"0"),e<t&&(clearInterval(a),n="00",r="00",c="00"),{timeRemaining:o,hours:n,minutes:r,seconds:c}})();t.textContent=e.hours,o.textContent=e.minutes,n.textContent=e.seconds,0===e.timeRemaining&&clearInterval(a)};r();let a=setInterval(r,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=function(){t.classList.toggle("active-menu")};t.addEventListener("click",(e=>{(e.target.classList.contains("close-btn")||e.target.matches("a"))&&o()})),e.addEventListener("click",o)})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),o=document.querySelectorAll(".popup-btn");let n=document.documentElement.clientWidth;o.forEach((o=>{o.addEventListener("click",(()=>{n<768?e.style.display="block":(t.style.left="-300px",function({timing:e,draw:t,duration:o}){let n=performance.now();requestAnimationFrame((function r(a){let c=(a-n)/o;c>1&&(c=1);let l=e(c);t(l),c<1&&requestAnimationFrame(r)}))}({duration:800,timing:e=>e,draw(o){e.style.display="block",t.style.transform=`translateX(${210*o}%)`,e.style.width=100*o+"%"}}))}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),o=document.querySelector(".calc-day"),n=document.querySelectorAll(".form-name"),r=document.querySelectorAll(".form-email"),a=document.querySelectorAll(".form-phone"),c=document.querySelector(".mess");e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D/,"")})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D/,"")})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D/,"")})),a.forEach((function(e){e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9()-]/,"")}))})),r.forEach((function(e){e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-zA-Z0-9@-_.!~*']/,"")}))})),n.forEach((function(e){e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я- ]/,"")}))})),c.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я- ]/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let n,r=0,a=document.querySelectorAll(".dot");const c=function(e,t,o){e[t].classList.add(o)},l=function(e,t,o){e[t].classList.remove(o)},i=function(){l(t,r,"portfolio-item-active"),l(a,r,"dot-active"),r++,r>=t.length&&(r=0),c(t,r,"portfolio-item-active"),c(a,r,"dot-active")},u=function(e=1500){n=setInterval(i,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(l(t,r,"portfolio-item-active"),l(a,r,"dot-active"),e.target.matches("#arrow-right")?r++:e.target.matches("#arrow-left")?r--:e.target.classList.contains("dot")&&a.forEach((function(t,o){e.target===t&&(r=o)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),c(t,r,"portfolio-item-active"),c(a,r,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&u(2e3)}),!0),function(){for(let e=0;e<t.length;e++){const e=document.createElement("li");e.classList.add("dot"),o.append(e)}a=document.querySelectorAll(".dot"),a[0].classList.add("dot-active")}(),u(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),c=document.querySelector("#total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==n&&t.target!==r&&t.target!==a||function(){const t=+o.options[o.selectedIndex].value,l=n.value;let i=1,u=1,s=0;r.value>1&&(i+=+r.value/10),a.value&&a.value<5?u=2:a.value&&a.value<10&&(u=1.5),s=o.value&&n.value?e*t*l*i*u:0,c.textContent=s}()}))})(100),(({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),n=document.createElement("div");try{if(!o)throw new Error("Пожалуйста, верните форму на место");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),r=new FormData(o),a={};var c;n.textContent="Загрузка...",o.append(n),r.forEach(((e,t)=>{a[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?a[e.id]=t.textContent:"input"===e.type&&(a[e.id]=t.value)})),(c=a,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-type":"application/json"}}).then((e=>e.json()))).then((t=>{n.textContent="Спасибо! Наш менеджер с Вами свяжется.",e.forEach((e=>{e.value=""}))})).catch((e=>{n.textContent="Ошибка.."}))})()}))}catch(e){console.log(e.message)}})({formId:"form1",someElem:[{type:"block",id:"total"}]})})();