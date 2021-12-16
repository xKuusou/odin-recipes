// recipe.js

mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
    }
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
    }

function darkFunction() {
    document.body.classList.toggle("dark-body");
    document.getElementById("topBar").classList.toggle('dark-box');
    document.getElementById("box2").classList.toggle("dark-box")
    document.getElementById("box3").classList.toggle("dark-box")
    document.getElementById("box4").classList.toggle("dark-box")
    document.getElementById("menuBtn").classList.toggle('dark-menu');
    document.getElementById("topBtn").classList.toggle('dark-btn');
    document.getElementById("darkToggle").classList.toggle('dark-toggle');
    }