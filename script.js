const slider = document.querySelector(".slider");
const slideLeft = document.querySelector(".slider_left");
const slideRight = document.querySelector(".slider_right");
const btnDown = document.querySelector(".slider_down");
const btnUp = document.querySelector(".slider_up");
const slidesImg = slideRight.querySelectorAll("div");
let activeSlideIndex = 0;

btnUp.addEventListener("click", () => changeSlide("up"));
btnDown.addEventListener("click", () => changeSlide("down"));

function changeSlide(direction) {
    const slideHeight = slider.clientHeight;

    if (direction == "up") {
        ++activeSlideIndex;
        if (activeSlideIndex >= slidesImg.length) {
            activeSlideIndex = 0;
        }
    } else {
        --activeSlideIndex;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesImg.length - 1;
        }
    }

    slideRight.style.transform =
        `translateY(-${activeSlideIndex * slideHeight}px)`;

    slideLeft.style.transform =
        `translateY(-${activeSlideIndex * slideHeight}px)`;
}