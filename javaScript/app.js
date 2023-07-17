const mobileBtn = document.querySelector(".mobile-btn");
const mobile_menu = document.querySelector("body");

const toggleFunction = () => {
  mobile_menu.classList.toggle("active");
};

mobileBtn.addEventListener("click", toggleFunction);
