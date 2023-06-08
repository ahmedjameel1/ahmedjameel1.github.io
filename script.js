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


function incrementVisitorCount() {
        axios
          .get('https://api.countapi.xyz/hit/ahmedjameel1.github.io/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')
          .then(function (response) {
            document.getElementById('visitorCount').textContent = response.data.value;
          })
          .catch(function (error) {
            console.error(error);
          });
      }

      // Increment the visitor count on page load
      window.addEventListener('DOMContentLoaded', incrementVisitorCount);





