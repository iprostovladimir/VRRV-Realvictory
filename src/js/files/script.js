// Подключение функционала "Чертогов Фрилансера"
import { isMobile, menuClose } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// const telInputs = document.querySelectorAll('input[type="tel"]');

// if (telInputs) {
//   telInputs.forEach((input) => {
//     Inputmask({ mask: "+7 (999) 999-9999" }).mask(input);
//     input.addEventListener("input", function () {
//       const formItemInput = input.parentElement;
//       if (
//         input.inputmask &&
//         typeof input.inputmask.isComplete === "function" &&
//         !input.inputmask.isComplete()
//       ) {
//         formItemInput.classList.add("active");
//       } else {
//         formItemInput.classList.remove("active");
//       }
//     });
//   });
// }

const inputs = document.querySelectorAll(".form__item-input input");

if (inputs) {
  inputs.forEach((input) => {
    const formItemInput = input.parentElement;
    input.addEventListener("input", function () {
      if (this.value) {
        formItemInput.classList.add("_active");
      } else {
        formItemInput.classList.remove("_active");
      }
    });
  });
}

// const animateItems = document.querySelectorAll(".animate-block");
// if (animateItems[0]) {
//   animateItems.forEach((element) => {
//     const items = element.querySelectorAll("[data-watch]");
//     if (items[0]) {
//       items.forEach((element, index) => {
//         element.style.animationDelay = index * 0.3 + "s";
//       });
//     }
//   });
// }

const animateItems = document.querySelectorAll(".animate-block");
if (animateItems[0]) {
  animateItems.forEach((element) => {
    const items = element.querySelectorAll("[data-watch]");
    if (items[0]) {
      items.forEach((element, index) => {
        if (window.matchMedia("(max-width: 992px)").matches) {
          element.style.animationDelay = "0.1s";
        } else {
          element.style.animationDelay = index * 0.3 + "s";
        }
      });
    }
  });
}

window.addEventListener("hashchange", () => {
  const anchor = window.location.hash;
  const closeMenu = document.querySelectorAll(".js-close-menu");
  if (anchor) {
    const target = document.getElementById(anchor.substring(1));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }
  closeMenu.forEach((element) => {
    element.addEventListener("click", menuClose);
  });
});

window.dispatchEvent(new HashChangeEvent("hashchange"));

// window.addEventListener("hashchange", () => {
//   const anchor = window.location.hash;
//   const closeMenu = document.querySelectorAll(".js-close-menu");
//   if (anchor) {
//     const target = document.getElementById(anchor.substring(1));

//     if (target) {
//       target.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//         inline: "nearest",
//       });
//     }
//   }
//   closeMenu.forEach((element) => {
//     element.addEventListener("click", menuClose);
//   });
// });

// const slider = document.querySelector(".results__slider");

// if (slider) {
//   const images = slider.querySelectorAll(".results__slide-img img");

//   images.forEach((image) => {
//     const preloader = image.parentElement.querySelector(
//       ".swiper-lazy-preloader"
//     );

//     // Устанавливаем начальную прозрачность 0
//     image.style.opacity = "0";

//     image.addEventListener("load", () => {
//       if (preloader) {
//         preloader.style.display = "none";
//       }

//       // После загрузки, устанавливаем прозрачность 1
//       image.style.opacity = "1";
//     });
//   });
// }
const slider = document.querySelector(".results__slider");

if (slider) {
  const slides = slider.querySelectorAll(".results__slide");

  slides.forEach((slide) => {
    const image = slide.querySelector(".results__slide-img img");
    const preloader = slide.querySelector(".swiper-lazy-preloader");

    // Set initial opacity to 0
    image.style.opacity = "0";

    image.addEventListener("load", () => {
      if (preloader) {
        preloader.style.display = "none";
      }

      // After loading, set opacity to 1
      image.style.opacity = "1";
    });
  });
}
