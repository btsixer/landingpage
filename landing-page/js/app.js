/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const sections = document.querySelectorAll('section');
const navBar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// Add class 'active' to section when near top of viewport


// Make sections active

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
sections.forEach(element => {
  const liString = `<li class='menu__link'><a href="#${element.id}">${element.dataset.nav}</a></li>`;
  navBar.insertAdjacentHTML('beforeend', liString);
})

// Set sections as active
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    // You can play with the values in the "if" condition to further make it more accurate.
    if (box.top <= 80 && box.bottom >= 80) {
      // Apply active state on the current section and the corresponding Nav link.
      const id = section.getAttribute("id");
      document.querySelector(`#${id}`).classList.add("active");
      section.classList.add("your-active-class");
    } else {
      // Remove active state from other section and corresponding Nav link.
      const id = section.getAttribute("id");
      document.querySelector(`#${id}`).classList.remove("active");
      section.classList.remove("your-active-class");
    }
  }
}

// listen for scroll events and call makeActive function
window.addEventListener("scroll", makeActive);
