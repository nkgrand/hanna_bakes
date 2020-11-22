function btnPress(wrapper) {
  const aboutBtn = wrapper.querySelector(".js__aboutPage");
  const contactBtn = wrapper.querySelector(".js__contactPage");
  const orderBtn = wrapper.querySelector(".js__orderPage");

  aboutBtn.addEventListener("click", function () {
    window.location.href = "about.html";
  });

  contactBtn.addEventListener("click", function () {
    window.location.href = "contact.html";
  });

  orderBtn.addEventListener("click", function () {
    window.location.href = "order.html";
  });
}

export { btnPress };
