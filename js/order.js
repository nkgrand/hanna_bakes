(() => {
  function error() {
    const modal = document.querySelector("#myModalStaticUnavailable");
    modal.style.display = "flex";
  }

  function cardClick(wrapper) {
    const el = wrapper.querySelectorAll(".card");

    for (let i = 0; i < el.length; i++) {
      sliderElClick(el[i], i);
    }

    function sliderElClick(button, id) {
      button.addEventListener("click", function () {
        error();
      });
    }
  }

  function cartClick(wrapper) {
    const spRequestBtn = wrapper.querySelector("#specialRequests");
    const orderBtn = wrapper.querySelector("#orderBtn");

    orderBtn.addEventListener("click", function () {
      error();
    });

    spRequestBtn.addEventListener("click", function () {
      // spRequestBtn.style.display = "none";
      spRequestBtn.innerHTML = `<textarea>Enter</textarea>`;
      console.log(spRequestBtn);
      // window.onclick = function (event) {
      //   if (event.target !== spRequestBtn) {
      //     spRequestBtn.innerHTML = `<a href="#!" class="comment__link" id="specialRequests"
      //     >Special requests</a
      //   >`;
      //   }
      // };
    });
  }

  cardClick(document.querySelector(".card__wrapper"));
  cartClick(document.querySelector("#orderSide"));
})();
