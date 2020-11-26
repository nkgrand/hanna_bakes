(() => {
  function cardClick(wrapper) {
    const el = wrapper.querySelectorAll(".card");

    for (let i = 0; i < el.length; i++) {
      sliderElClick(el[i], i);
    }

    function sliderElClick(button, id) {
      button.addEventListener("click", function () {
        alert("Added to basket");
      });
    }
  }

  cardClick(document.querySelector(".card__wrapper"));
})();
