const hamburger = document.getElementById("hamburger");
const menuPanel = document.getElementById("menuPanel");
const menuLinks = document.querySelectorAll("#menuPanel a");

function openMenu() {
  hamburger.classList.add("active");
  menuPanel.classList.add("active");
  document.body.classList.add("menu-open");

  hamburger.setAttribute("aria-label", "メニューを閉じる");
  hamburger.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  hamburger.classList.remove("active");
  menuPanel.classList.remove("active");
  document.body.classList.remove("menu-open");

  hamburger.setAttribute("aria-label", "メニューを開く");
  hamburger.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  const isOpen = menuPanel.classList.contains("active");

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

if (hamburger && menuPanel) {
  hamburger.addEventListener("click", toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuPanel.classList.contains("active")) {
      closeMenu();
    }
  });
}