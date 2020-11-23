const btn = document.querySelector(".subscribeBtn");
const email = document.querySelector(".form__input");

function modalShowWindow() {
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".modal__close");
  const okBtn = document.querySelector(".modal__btn");

  const name = document.querySelector("#name");
  const email1 = document.querySelector("#email");
  const textArea = document.querySelector("#textArea");
  const submitBtn = document.querySelector(".submit__btn");

  submitBtn.addEventListener("click", function () {
    console.log("CLICKED");
    if (email1.value == "" || name.value == "" || textArea.value == "") {
      email1.style.borderBottom = "2px solid red";
      name.style.borderBottom = "2px solid red";
      email1.focus();
      textArea.style.borderBottom = "2px solid red";
    } else {
      modal.style.display = "flex";
      name.value = "";
      name.style.borderBottom = "1px solid black";
      email1.value = "";
      email1.style.borderBottom = "1px solid black";
      textArea.value = "";
      textArea.style.borderBottom = "1px solid black";
    }
  });

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

// function checkSubmitForm(wrapper) {}

// checkSubmitForm(document.querySelector("#submitForm"));

btn.addEventListener("click", modalShowWindow);

export { modalShowWindow };
