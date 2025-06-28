const navBtn = document.querySelectorAll(".nav-btn");
const modalMenu = document.querySelector(".modal-menu");
const body = document.querySelector("body");

navBtn.forEach((button) => {
  button.addEventListener("click", () => {
    modalMenu.classList.toggle("active-modal");

    if (modalMenu.classList.contains("active-modal")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "scroll";
    }
  });
});
