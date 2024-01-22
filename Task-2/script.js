const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const bannerImage = document.getElementById("bannerImage");
const hamBurger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".navMenu");

let cnt = 1;

const newSrc = {
  1: "./design-4/image/Banner-1.png",
  2: "./design-4/image/Banner-2.png",
  3: "./design-4/image/Banner-3.png",
};

const moveRight = () => {
  cnt++;
  if (cnt > Object.keys(newSrc).length) {
    cnt = 1;
  }
  bannerImage.src = newSrc[cnt];

  bannerImage.classList.add("addAnimationLeftToRight");

  setTimeout(() => {
    bannerImage.classList.remove("addAnimationLeftToRight");
  }, 1000);
};

const moveLeft = () => {
  cnt--;
  if (cnt < 1) {
    cnt = Object.keys(newSrc).length;
  }
  bannerImage.src = newSrc[cnt];

  bannerImage.classList.add("addAnimationRightToLeft");

  setTimeout(() => {
    bannerImage.classList.remove("addAnimationRightToLeft");
  }, 1000);
};

const makeMenuVisible = () => {
  navMenu.style.visibility = "visible";
};

const makeMenuHidden = () => {
  navMenu.style.visibility = "hidden";
};

// leftArrow.addEventListener("click", moveLeft);
// rightArrow.addEventListener("click", moveRight);

hamBurger.addEventListener("mouseover", () => {
  makeMenuVisible();
});

hamBurger.addEventListener("mouseout", () => {
  makeMenuHidden();
});
