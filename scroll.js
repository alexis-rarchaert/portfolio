var scrollButton = document.getElementById("scrollButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
        scrollButton.style.opacity = "1";
    } else {
        scrollButton.style.display = "none";
        scrollButton.style.opacity = "0";
    }
}
    
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var scroll = document.getElementById("scroll");
scroll.addEventListener("click", function(){
    document.getElementById("about-me").scrollIntoView({behavior: "smooth"});
});