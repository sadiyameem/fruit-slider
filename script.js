const slider = document.querySelector(".slider");
const slideLeft = document.querySelector(".slider_left");
const slideRight = document.querySelector(".slider_right");
const btnDown = document.querySelector(".slider_down");
const btnUp = document.querySelector(".slider_up");
const slidesImg = slideRight.querySelectorAll("div");
let activeSlideIndex = 0;

slideLeft.computedStyleMap.top = `-${(slidesImg.length - 1) * 100}vh`;
btnUp.addEventListener("click", () => changeSlide("up"));
btnDown.addEventListener("click", () => changeSlide("down"));

function changeSlide(direction) {
    const slideHeight = slider.clientHeight;
    if (direction == "up") {
        ++activeSlideIndex;
        activeSlideIndex == slidesImg.length ? (activeSlideIndex = 0) : activeSlideIndex;
    
    } else if (direction == "down") {
        --activeSlideIndex;
        activeSlideIndex == slideImg.length - slideImg.length - 1
        ? (activeSlideIndex = slidesImg.length - 1)
        :activeSlideIndex;
    }
    slideRight.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`;
}