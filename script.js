function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu.hasAttribute("hidden")) {
    menu.removeAttribute("hidden");
  } else {
    menu.setAttribute("hidden", "");
  }
}
