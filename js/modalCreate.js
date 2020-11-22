function modalWindowCreate() {
  const body = document.querySelector("body");

  const rootDiv = document.createElement("div");
  rootDiv.id = "myModal";
  rootDiv.classList.add("modal");

  const modalContentDiv = document.createElement("div");
  modalContentDiv.classList.add("modal__content");

  const modalHeaderDiv = document.createElement("div");
  modalHeaderDiv.classList.add("modal__header");

  const span = document.createElement("span");
  span.classList.add("modal__close");
  span.textContent = "x";

  const modalBodyDiv = document.createElement("div");
  modalBodyDiv.classList.add("modal__body");

  const h3 = document.createElement("h3");
  h3.classList.add("modal__body-title");
  h3.textContent = "Congratilations!!!";

  const h4 = document.createElement("h4");
  h4.classList.add("modal__body-text");
  h4.textContent = `You have successfully subscribed for the news!`;

  const btnOk = document.createElement("button");
  btnOk.classList.add("modal__btn");
  btnOk.textContent = "GOT IT!";

  modalBodyDiv.append(h3);
  modalBodyDiv.append(h4);
  modalBodyDiv.append(btnOk);

  modalHeaderDiv.append(span);

  modalContentDiv.append(modalHeaderDiv);
  modalContentDiv.append(modalBodyDiv);

  rootDiv.append(modalContentDiv);

  body.append(rootDiv);
}

export { modalWindowCreate };
