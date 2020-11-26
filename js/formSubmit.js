const name = document.querySelector("#name");
const email1 = document.querySelector("#email");
const textArea = document.querySelector("#textArea");
const submitBtn = document.querySelector("#submit__btn");
const modal = document.querySelector("#myModalStatic");
console.log(modal);

submitBtn.addEventListener("click", function () {
  console.log("CLICKED");

  if (email1.value == "" || name.value == "" || textArea.value == "") {
    email1.style.borderBottom = "2px solid red";
    name.style.borderBottom = "2px solid red";
    email1.focus();
    textArea.style.borderBottom = "2px solid red";
  } else {
    // alert("Message sent");
    modal.style.display = "flex";
    name.value = "";
    name.style.borderBottom = "1px solid black";
    email1.value = "";
    email1.style.borderBottom = "1px solid black";
    textArea.value = "";
    textArea.style.borderBottom = "1px solid black";
  }
});
