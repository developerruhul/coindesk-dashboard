import "svgxuse";
import "./element.closest";
import "./chart";
// sass
import "../scss/style.scss";

/*===============================================
    MOBILE MENU
  */
var mobileMenu = document.querySelector(".mobile-menu"),
  sidebar = document.querySelector(".sidebar-wrapper"),
  body = document.body;

mobileMenu.addEventListener("click", function(e) {
  e.stopPropagation();
  // show the sidebar
  sidebar.classList.add("active");
  // Detect all clicks on the document
  document.addEventListener("click", HideSidebar);
  // disable scroll
  body.classList.add("noscroll");
});

function HideSidebar(e) {
  // If user clicks inside the element, do nothing
  if (e.target.closest(".sidebar")) return;
  sidebar.classList.remove("active");

  // we're done, no more listening
  document.removeEventListener("click", HideSidebar);

  // enable scroll
  body.classList.remove("noscroll");
}
