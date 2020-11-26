(() => {
  toggle.onclick = () => {
    const menuBtn = document.querySelector(".menu__container");
    nav.classList.toggle("expand");
    menuBtn.classList.toggle("change");
  };
})();

import { modalWindowCreate } from "./modalCreate.js";
import { modalShowWindow } from "./modalShow.js";
import { sliderLoop } from "./sliderLoop.js";
import { slideshow } from "./smallSlider.js";
import { modalSlider } from "./modalSlider.js";
import { btnPress } from "./mainBtnPress.js";

modalWindowCreate(document.querySelector("body"));
modalShowWindow(document.querySelector("body"));
sliderLoop(document.querySelector("#slider"));
slideshow(document.querySelector("#slider"));
modalSlider(document.querySelector("#slider"));
btnPress(document.querySelector("body"));
