(()=>{"use strict";(e=>{const t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds"),r=()=>{let e=(()=>{let e=new Date("9 january 2023").getTime(),t=(new Date).getTime(),n=(e-t)/1e3,o=Math.floor(n/60/60),r=Math.floor(n/60%60),l=Math.floor(n%60);return o=o.toString().padStart(2,"0"),r=r.toString().padStart(2,"0"),l=l.toString().padStart(2,"0"),e<t&&(clearInterval(c),o="00",r="00",l="00"),{timeRemaining:n,hours:o,minutes:r,seconds:l}})();t.textContent=e.hours,n.textContent=e.minutes,o.textContent=e.seconds,0===e.timeRemaining&&clearInterval(c)};r();let c=setInterval(r,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),r=function(){t.classList.toggle("active-menu")};o.forEach((e=>e.addEventListener("click",r))),e.addEventListener("click",r),n.addEventListener("click",r)})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn"),o=e.querySelector(".popup-close");let r=document.documentElement.clientWidth,c=0;const l=function(){c+=21,t.style.left="-200px",t.style.transform=`translateX(${c}px)`,e.style.display="block",c>=r/2?(cancelAnimationFrame(l),c=0):requestAnimationFrame(l)};n.forEach((t=>{t.addEventListener("click",(()=>{r<768?e.style.display="block":l()}))})),o.addEventListener("click",(()=>{e.style.display="none"}))})()})();