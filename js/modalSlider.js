function modalSlider(wrapper) {
  const showMoreBtn = wrapper.querySelector(".show__more");
  const hiddenSlides = wrapper.querySelectorAll(".hideMob");

  showMoreBtn.addEventListener("click", function () {
    for (i = 0; i < hiddenSlides.length; i++) {
      hiddenSlides[i].style.display = "flex";
    }
    showMoreBtn.style.display = "none";
  });
}
export { modalSlider };
