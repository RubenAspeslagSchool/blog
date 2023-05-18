"use strict";
document.addEventListener("DOMContentLoaded", init);
let currentArticle = null;
function init() {
    document.querySelectorAll("nav ul li").forEach(li => li.addEventListener("click", clickHandler));
    document.querySelectorAll("article").forEach(article => article.classList.add("hidden"));
}

function clickHandler(e) {
    e.preventDefault();
    console.log(e.target.getAttribute('data-href'));
    currentArticle !== null ? currentArticle.classList.add("hidden") : null;
    currentArticle = document.querySelector("#" + e.target.getAttribute('data-href'));
    console.log(currentArticle);
    currentArticle.classList.toggle("hidden");
}