import "./css/style.css";

const dropdown = (function () {
  const init = () => {
    const dropdown = document.querySelector(".dropdown");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    dropdownToggle.innerHTML +=
      '<svg class="toggle-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>';
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const svg = document.querySelector("svg");

    dropdownToggle.addEventListener("mouseenter", () => {
      dropdownMenu.classList.add("show");
      svg.classList.add("rotated");
    });
    dropdown.addEventListener("mouseleave", () => {
      dropdownMenu.classList.remove("show");
      svg.classList.remove("rotated");
    });
  };

  return { init };
})();

dropdown.init();
