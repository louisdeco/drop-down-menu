import "./css/style.css";

const dropdown = (function () {
  const openDropdown = (dropdownMenu, svg) => {
    dropdownMenu.classList.add("show");
    svg.classList.add("rotated");
  };

  const closeDropdown = (dropdownMenu, svg) => {
    dropdownMenu.classList.remove("show");
    svg.classList.remove("rotated");
  };

  const injectSVG = (dropdownToggle) => {
    dropdownToggle.innerHTML +=
      '<svg class="toggle-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>';
  };

  const setupDropdowns = (dropdown) => {
    const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
    injectSVG(dropdownToggle);

    const dropdownMenu = dropdown.querySelector(".dropdown-menu");
    const svg = dropdown.querySelector("svg");

    dropdownToggle.addEventListener("mouseenter", () =>
      openDropdown(dropdownMenu, svg),
    );
    dropdown.addEventListener("mouseleave", () =>
      closeDropdown(dropdownMenu, svg),
    );
  };

  const init = () => {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(setupDropdowns);
  };

  return { init };
})();

dropdown.init();
