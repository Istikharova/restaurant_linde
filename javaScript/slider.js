const slider = document.querySelector(".bild");
const punkte = document.querySelectorAll(".punkt");
const slides = document.querySelectorAll(".slide");
const checkbox = document.querySelector("#toggle_animation");
let aktuellSlide = 1;
let autoplayActive = false;

//click events für pfeil
document.querySelector(".fa-arrow-left").addEventListener("click", moveLeft);
document.querySelector(".fa-arrow-right").addEventListener("click", moveRight);
toggleAutoplay();
updatePunkte();

// updatet der aktive punkt
function updatePunkte() {
  punkte.forEach((punkt) => {
    punkt.classList.remove("active");
  });

  punkte[aktuellSlide - 1].classList.add("active");
}

//function für pfeil
function moveLeft() {
  slider.prepend(document.querySelectorAll(".slide")[3]);
  anzeige("left");
  updatePunkte();
}

function moveRight() {
  slider.append(document.querySelectorAll(".slide")[0]);
  anzeige("right");
  updatePunkte();
}

function anzeige(direction) {
  if (direction === "left") {
    if (aktuellSlide === 1) {
      aktuellSlide = slides.length;
    } else {
      aktuellSlide--;
    }
  }
  if (direction === "right") {
    if (aktuellSlide === slides.length) {
      aktuellSlide = 1;
    } else {
      aktuellSlide++;
    }
  }
}

//autoplay aktivieren

$(".toggle_animation").on("click", toggleAutoplay);

function toggleAutoplay() {
  $(".toggle_animation").toggleClass("actives");
  if ($(".toggle_animation").hasClass("actives")) {
    sliderInterval = setInterval(moveRight, 2000);
  } else {
    // Stop interval
    clearInterval(sliderInterval);
  }
}
