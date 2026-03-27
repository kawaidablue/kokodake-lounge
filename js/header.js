const hamburger = document.getElementById("hamburger");
const menuPanel = document.getElementById("menuPanel");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  menuPanel.classList.toggle("active");
});