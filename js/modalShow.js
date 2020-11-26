const btn = document.querySelector(".subscribeBtn");
const email = document.querySelector(".form__input");

function modalShowWindow() {
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".modal__close");
  const okBtn = document.querySelector(".modal__btn");

  btn.addEventListener("click", function () {
    if (email.value !== "") {
      modal.style.display = "flex";
    } else {
      email.style.border = "1px solid red";
      email.focus();
    }
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    email.value = "";
  });

  okBtn.addEventListener("click", function () {
    modal.style.display = "none";
    email.value = "";
    email.style.borderColor = "#292325";
  });

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

btn.addEventListener("click", modalShowWindow);

export { modalShowWindow };
