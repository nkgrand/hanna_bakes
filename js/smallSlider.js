function slideshow(wrapper) {
  const controlNext = wrapper.querySelector(".slider__control_right");
  const controlPrev = wrapper.querySelector(".slider__control_left");
  const slidesWrapper = wrapper.querySelector(".slider__slides");
  const slides = wrapper.querySelectorAll(".slider__item");
  const img = wrapper.querySelectorAll(".slider__slide");
  const transformCount = 200 / slides.length;
  let activeSlideIndex = 0;

  function incressSlideIndex() {
    if (activeSlideIndex < slides.length) {
      activeSlideIndex = activeSlideIndex + 9;
    } else if (activeSlideIndex === slides.length) {
      activeSlideIndex = 0;
    }
  }

  function decreesSlideIndex() {
    if (activeSlideIndex > 0) {
      activeSlideIndex = activeSlideIndex - 9;
    } else if (activeSlideIndex === 0) {
      activeSlideIndex = slides.length;
    }
  }

  function getTranslate() {
    return `translateX(-${transformCount * activeSlideIndex}%)`;
  }

  controlNext.addEventListener("click", function () {
    incressSlideIndex();
    slidesWrapper.style.transform = getTranslate();
  });

  controlPrev.addEventListener("click", function () {
    decreesSlideIndex();
    slidesWrapper.style.transform = getTranslate();
  });
}

export { slideshow };
