window.addEventListener("load", () => {
const faqBtnShowmoreAgency = document.querySelector(".btn-more-agency");
const faqBtnShowlessAgency = document.querySelector(".btn-less-agency");
const faqBtnShowmoreOutsource = document.querySelector(".btn-more-outsource");
const faqBtnShowlessOutsource = document.querySelector(".btn-less-outsource");
const faqBtnShowmoreMarketing = document.querySelector(".btn-more-marketing");
const faqBtnShowlessMarketing = document.querySelector(".btn-less-marketing");
const faqBtnShowmoreBusiness = document.querySelector(".btn-more-business");
const faqBtnShowlessBusiness = document.querySelector(".btn-less-business");

const articleOpenAgency = document.querySelector(".article-text-agency");
const articleOpenOutsource = document.querySelector(".article-text-outsource");
const articleOpenMarketing = document.querySelector(".article-text-marketing");
const articleOpenBusiness = document.querySelector(".article-text-business");

const articleTextAgency = document.querySelector(".article-box-agency");
const articleTextOutsource = document.querySelector(".article-box-outsource");
const articleTextMarketing = document.querySelector(".article-box-marketing");
const articleTextBusiness = document.querySelector(".article-box-business");

faqBtnShowmoreAgency.addEventListener("click", showAgency);
faqBtnShowlessAgency.addEventListener("click", hideAgency);

faqBtnShowmoreOutsource.addEventListener("click", showOutsource);
faqBtnShowlessOutsource.addEventListener("click", hideOutsource);

faqBtnShowmoreMarketing.addEventListener("click", showMarketing);
faqBtnShowlessMarketing.addEventListener("click", hideMarketing);

faqBtnShowmoreBusiness.addEventListener("click", showBusiness);
faqBtnShowlessBusiness.addEventListener("click", hideBusiness);

function showAgency() {
  faqBtnShowmoreAgency.classList.add("hide-btn");
  faqBtnShowlessAgency.classList.remove("hide-btn");
   articleOpenAgency.style.maxHeight = "400px";
  articleOpenAgency.style.overflow = "visible";
  articleTextAgency.classList.add("animate");
  articleTextAgency.style.maxHeight = "400px";
}
function hideAgency() {
  faqBtnShowmoreAgency.classList.remove("hide-btn");
  faqBtnShowlessAgency.classList.add("hide-btn");
  articleOpenAgency.style.overflow = "hidden";
  articleOpenAgency.style.maxHeight = "0";
  articleTextAgency.style.maxHeight = "100px";
  articleTextAgency.classList.remove("animate");
  
}

function showOutsource() {
  faqBtnShowmoreOutsource.classList.add("hide-btn");
  faqBtnShowlessOutsource.classList.remove("hide-btn");
  articleOpenOutsource.style.maxHeight = "400px";
  articleTextOutsource.classList.add("animate");
  articleTextOutsource.style.maxHeight = "400px";
}

function hideOutsource() {
  faqBtnShowmoreOutsource.classList.remove("hide-btn");
  faqBtnShowlessOutsource.classList.add("hide-btn");
  articleOpenOutsource.style.maxHeight = "0";
  articleTextOutsource.style.maxHeight = "120px";
  articleTextOutsource.classList.remove("animate");
}

function showMarketing() {
  faqBtnShowmoreMarketing.classList.add("hide-btn");
  faqBtnShowlessMarketing.classList.remove("hide-btn");
  articleOpenMarketing.style.maxHeight = "400px";
  articleTextMarketing.classList.add("animate");
  articleTextMarketing.style.maxHeight = "400px";
}

function hideMarketing() {
  faqBtnShowmoreMarketing.classList.remove("hide-btn");
  faqBtnShowlessMarketing.classList.add("hide-btn");
  articleOpenMarketing.style.maxHeight = "0";
  articleTextMarketing.style.maxHeight = "120px";
  articleTextMarketing.classList.remove("animate");
}

function showBusiness() {
  faqBtnShowmoreBusiness.classList.add("hide-btn");
  faqBtnShowlessBusiness.classList.remove("hide-btn");
  articleOpenBusiness.style.maxHeight = "400px";
  articleTextBusiness.classList.add("animate");
  articleTextBusiness.style.maxHeight = "400px";
}

function hideBusiness() {
  faqBtnShowmoreBusiness.classList.remove("hide-btn");
  faqBtnShowlessBusiness.classList.add("hide-btn");
  articleOpenBusiness.style.maxHeight = "0";
  articleTextBusiness.style.maxHeight = "120px";
  articleTextBusiness.classList.remove("animate");
}
});
