function sliderLoop(wrapper) {
  const el = wrapper.querySelectorAll(".slider__item");

  for (let i = 0; i < el.length; i++) {
    sliderElClick(el[i], i);
  }

  function sliderElClick(button, id) {
    button.addEventListener("click", function () {
      createSliderModal(button, id);
    });
  }

  function createSliderModal(item, index) {
    let current_item = item;
    let current_index = index;

    const body = document.querySelector("body");

    const rootDiv = document.createElement("div");
    rootDiv.classList.add("sliderModal");

    const wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("sliderWrapper");

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("sliderModal__inner");

    const leftSideInner = document.createElement("div");
    leftSideInner.classList.add("leftSideInner");

    const img = document.createElement("img");
    img.src = current_item.children[1].src;

    const rightSideInner = document.createElement("div");
    rightSideInner.classList.add("rightSideInner");

    const titleRightSideInner = document.createElement("p");
    titleRightSideInner.classList.add("titleRightSideInner");
    titleRightSideInner.textContent = "celebrationscakes8347";

    const textRightSideInner = document.createElement("p");
    textRightSideInner.classList.add("textRightSideInner");
    textRightSideInner.textContent =
      current_item.children[0].children[0].textContent;

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("modalCloseBtn");

    const nextBtn = document.createElement("button");
    nextBtn.classList.add("nextSlide", "sliderArrow");

    const prevBtn = document.createElement("button");
    prevBtn.classList.add("prevSlide", "sliderArrow");

    innerDiv.append(closeBtn);
    innerDiv.append(prevBtn);
    innerDiv.append(nextBtn);
    rightSideInner.append(titleRightSideInner);
    rightSideInner.append(textRightSideInner);
    leftSideInner.append(img);
    innerDiv.append(leftSideInner);
    innerDiv.append(rightSideInner);
    wrapperDiv.append(innerDiv);
    rootDiv.append(wrapperDiv);
    body.append(rootDiv);

    closeBtn.addEventListener("click", function () {
      rootDiv.remove();
    });

    nextBtn.addEventListener("click", function () {
      if (current_index + 1 < el.length) {
        current_index++;
        current_item = el[current_index];
      } else {
        current_index = 0;
        current_item = el[current_index];
      }
      img.src = current_item.children[1].src;
      textRightSideInner.textContent =
        current_item.children[0].children[0].textContent;
    });

    prevBtn.addEventListener("click", function () {
      if (current_index - 1 < 0) {
        current_index = el.length - 1;
        current_item = el[current_index];
      } else {
        current_index--;
        current_item = el[current_index];
      }
      img.src = current_item.children[1].src;
      textRightSideInner.textContent =
        current_item.children[0].children[0].textContent;
    });
  }
}

export { sliderLoop };
