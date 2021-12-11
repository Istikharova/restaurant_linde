const slider = document.querySelector(".bild");
const punkte = document.querySelectorAll(".punkt");
const slide = document.querySelectorAll(".slide");
let aktuellSlide = 1;

//click events für pfeil

document.querySelector(".fa-arrow-left").addEventListener("click", moveLeft);
document.querySelector(".fa-arrow-right").addEventListener("click", moveRight);

//function für pfeil

function moveLeft() {
  slider.prepend(document.querySelectorAll(".slide")[3]);
  anzeige("left");
}

function moveRight() {
  slider.append(document.querySelectorAll(".slide")[0]);
  anzeige("right");
}

function anzeige(direction) {
  if (direction === "left") {
    if (aktuellSlide === 1) {
      aktuellSlide = 5;
    } else {
      aktuellSlide--;
    }
  }
  if (direction === "right") {
    if (aktuellSlide === 5) {
      aktuellSlide = 1;
    } else {
      aktuellSlide++;
    }
  }
}
