function toggleMenu(btn, translateValue) {
  const button = document.querySelector(btn);
  const navMenu = document.querySelector(".navbar-collapse");

  button.addEventListener("click", function() {
    navMenu.style.transform = translateValue;
  })
}

toggleMenu("#open-menu", "none");
toggleMenu("#close-menu", "translateX(100%)");