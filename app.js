let next = document.getElementById("next");
let prev = document.getElementById("prev");
let carousel = document.querySelector(".carousel");
let items = document.querySelectorAll(".carousel .item");
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;
next.onclick = () => {
  carousel.classList.remove("prev");
  carousel.classList.add("next");
  active = active + 1 >= countItem ? 0 : active + 1;
  other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
  other_2 = active + 1 >= countItem ? 0 : active + 1;
  changeSlider();
};
prev.onclick = () => {
  carousel.classList.remove("next");
  carousel.classList.add("prev");
  active = active - 1 < 0 ? countItem - 1 : active - 1;
  other_1 = active + 1 >= countItem ? 0 : active + 1;
  other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
  changeSlider();
};
const changeSlider = () => {
  let itemOldActive = document.querySelector(".carousel .item.active");
  if (itemOldActive) itemOldActive.classList.remove("active");

  let itemOldOther_1 = document.querySelector(".carousel .item.other_1");
  if (itemOldOther_1) itemOldOther_1.classList.remove("other_1");

  let itemOldOther_2 = document.querySelector(".carousel .item.other_2");
  if (itemOldOther_2) itemOldOther_2.classList.remove("other_2");

  items.forEach((e) => {
    e.querySelector(".image img").style.animation = "none";
    e.querySelector(".image figcaption").style.animation = "none";
    void e.offsetWidth;
    e.querySelector(".image img").style.animation = "";
    e.querySelector(".image figcaption").style.animation = "";
  });

  items[active].classList.add("active");
  items[other_1].classList.add("other_1");
  items[other_2].classList.add("other_2");

  clearInterval(autoPlay);
  autoPlay = setInterval(() => {
    next.click();
  }, 5000);
};
let autoPlay = setInterval(() => {
  next.click();
}, 5000);

// const hamMenu = document.querySelector(".ham-menu");
// const offscreeMenu = document.querySelector(".off-screen-menu");
// const links = document.querySelectorAll(".off-screen-menu li a");
// hamMenu.addEventListener("click", () => {
//   hamMenu.classList.toggle("active");
//   offscreeMenu.classList.toggle("active");
// });
// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     hamMenu.classList.remove("active");
//     offscreeMenu.classList.remove("active");
//   });
// });

// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let interval = null;
// const navLinks = document.querySelectorAll(".text-anim");

// navLinks.forEach((e) => {
//   e.onmouseenter = (event) => {
//     let iteration = 0;
//     clearInterval(interval);

//     interval = setInterval(() => {
//       event.target.innerText = event.target.innerText
//         .split("")
//         .map((letter, index) => {
//           if (index < iteration) {
//             return event.target.dataset.value[index];
//           }
//           return letters[Math.floor(Math.random() * 26)];
//         })
//         .join("");

//       if (iteration >= event.target.dataset.value.length) {
//         clearInterval(interval);
//       }
//       iteration += 1 / 3;
//     }, 15);
//   };

//   e.onmouseleave = (event) => {
//     clearInterval(interval);
//     // Reset the text back to the original value stored in data-value
//     event.target.innerText = event.target.dataset.value;
//   };
// });

// const prevBtn = document.querySelector(".slider-prev-btn");
// const nextBtn = document.querySelector(".slider-next-btn img");
// const item = document.querySelectorAll(".slider-item");

// let currentIndex = 0; // Tracks the middle item in view

// function updatePositions() {
//   const totalitem = item.length;

//   item.forEach((item, index) => {
//     // Calculate the offset from the current index, looping with modulus
//     const offset = (index - currentIndex + totalitem) % totalitem;

//     // Apply transforms based on position in the loop
//     if (offset === 0) {
//       // Center item
//       item.style.transform = "rotateY(0deg) translateX(0px) translateZ(0px)";
//       item.style.opacity = "1";
//       item.style.zIndex = "10";
//     } else if (offset === 1 || offset === totalitem - 1) {
//       // item adjacent to the center
//       const sign = offset === 1 ? 1 : -1;
//       item.style.transform = `rotateY(${sign * 15}deg) translateX(${
//         sign * 150
//       }px) translateZ(-100px)`;
//       item.style.opacity = "0.8";
//       item.style.zIndex = "9";
//     } else {
//       // item further back
//       const sign = offset > totalitem / 2 ? -1 : 1;
//       const depth = Math.abs(offset);
//       item.style.transform = `rotateY(${sign * depth * 15}deg) translateX(${
//         sign * depth * 150
//       }px) translateZ(-${depth * 100}px)`;
//       item.style.opacity = "0.5";
//       item.style.zIndex = "8";
//     }
//   });
// }

// // Move to the next item
// nextBtn.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % item.length; // Wrap-around for indices exceeding length
//   updatePositions();
// });

// // Move to the previous item
// prevBtn.addEventListener("click", () => {
//   // Adding item.length ensures the index stays positive
//   currentIndex = (currentIndex - 1 + item.length) % item.length;
//   updatePositions();
// });

// // Initialize positions on page load
// updatePositions();