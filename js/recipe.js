// recipe.js

mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
    }
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
    }
