const e=document.querySelector(".scroll-to-top");window.onscroll=function(){document.body.scrollTop>250||document.documentElement.scrollTop>250?e.style.display="flex":e.style.display="none"},window.addEventListener("load",(()=>{const e=document.querySelectorAll(".img--design"),t=document.querySelectorAll(".img--branding"),n=document.querySelectorAll(".img--illustration"),s=document.querySelectorAll(".img--motion"),o=document.querySelectorAll(".img__wrapper"),c=document.querySelector(".all-count"),a=document.querySelector(".design-count"),i=document.querySelector(".branding-count"),l=document.querySelector(".illustration-count"),r=document.querySelector(".motion-count");c.innerHTML=o.length,a.innerHTML=e.length,i.innerHTML=t.length,l.innerHTML=n.length,r.innerHTML=s.length;const d=o.length,u=e.length,m=t.length,y=n.length,g=s.length,h=document.querySelector(".all-count"),q=document.querySelector(".design-count"),L=document.querySelector(".branding-count"),S=document.querySelector(".illustration-count"),f=document.querySelector(".motion-count");function v(e,t,n,s){let o=null;const c=a=>{o||(o=a);const i=Math.min((a-o)/s,1);e.innerHTML=Math.floor(i*(n-t)+t),i<1&&window.requestAnimationFrame(c)};window.requestAnimationFrame(c)}v(h,0,d,1e3),v(q,0,u,1e3),v(L,0,m,1e3),v(S,0,y,1e3),v(f,0,g,1e3)}));const t=document.querySelector(".latest-work__filters"),n=document.querySelectorAll(".img__wrapper");window.onload=()=>{t.onclick=e=>{if(e.target.classList.contains("filter-btn")){t.querySelector(".active").classList.remove("active"),e.target.classList.add("active");let s=e.target.getAttribute("data-name");n.forEach((e=>{e.getAttribute("data-name")==s||"all"==s?(e.classList.remove("hide"),e.classList.add("show")):(e.classList.add("hide"),e.classList.remove("show"))}))}}};const s=document.querySelector("[js-faq-more-agency]"),o=document.querySelector("[js-faq-less-agency]"),c=document.querySelector("[js-faq-more-outsource]"),a=document.querySelector("[js-faq-less-outsource]"),i=document.querySelector("[js-faq-more-marketing]"),l=document.querySelector("[js-faq-less-marketing]"),r=document.querySelector("[js-faq-more-business]"),d=document.querySelector("[js-faq-less-business]"),u=document.querySelector("[data-name='agency']"),m=document.querySelector("[data-name='outsource']"),y=document.querySelector("[data-name='marketing']"),g=document.querySelector("[data-name='business']"),h=document.querySelector("[faq-data='agency']"),q=document.querySelector("[faq-data='outsource']"),L=document.querySelector("[faq-data='marketing']"),S=document.querySelector("[faq-data='business']");s.addEventListener("click",(function(){s.classList.add("hide-btn"),o.classList.remove("hide-btn"),u.style.maxHeight="400px",u.style.overflow="visible",h.classList.add("animate"),h.style.maxHeight="400px"})),o.addEventListener("click",(function(){s.classList.remove("hide-btn"),o.classList.add("hide-btn"),u.style.overflow="hidden",u.style.maxHeight="0",h.style.maxHeight="100px",h.classList.remove("animate")})),c.addEventListener("click",(function(){c.classList.add("hide-btn"),a.classList.remove("hide-btn"),m.style.maxHeight="400px",q.classList.add("animate"),q.style.maxHeight="400px"})),a.addEventListener("click",(function(){c.classList.remove("hide-btn"),a.classList.add("hide-btn"),m.style.maxHeight="0",q.style.maxHeight="120px",q.classList.remove("animate")})),i.addEventListener("click",(function(){i.classList.add("hide-btn"),l.classList.remove("hide-btn"),y.style.maxHeight="400px",L.classList.add("animate"),L.style.maxHeight="400px"})),l.addEventListener("click",(function(){i.classList.remove("hide-btn"),l.classList.add("hide-btn"),y.style.maxHeight="0",L.style.maxHeight="120px",L.classList.remove("animate")})),r.addEventListener("click",(function(){r.classList.add("hide-btn"),d.classList.remove("hide-btn"),g.style.maxHeight="400px",S.classList.add("animate"),S.style.maxHeight="400px"})),d.addEventListener("click",(function(){r.classList.remove("hide-btn"),d.classList.add("hide-btn"),g.style.maxHeight="0",S.style.maxHeight="120px",S.classList.remove("animate")}));
//# sourceMappingURL=index.7d153bf4.js.map