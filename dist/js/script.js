//Navbar fixd
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Hamburgr
const hamburger = document.querySelector("#hamburger");
const NavMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-a");
  NavMenu.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != NavMenu) {
    hamburger.classList.remove("hamburger-a");
    NavMenu.classList.add("hidden");
  }
});

// Ganti icon dark mode

const icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    icon.src = "dist/img/sun.png";
  } else {
    icon.src = "dist/img/moon.png";
  }
};
