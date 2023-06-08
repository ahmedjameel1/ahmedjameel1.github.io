var maps = document.querySelectorAll(".about");
var mapBox = document.querySelector(".about-all");

maps.forEach(function(div) {
    var arrow = div.querySelector(".arrow");
    var info = div.querySelector('div.hidden'); // Update selector to target both <p> and <div> elements with class 'hidden'

    div.addEventListener('click', function() {
        arrow.classList.toggle("opened");
        info.classList.toggle("hidden");
    });

    info.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});








